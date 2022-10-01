import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { rdxMainFetchAppend, rdxMainFetchPosition, rdxMainFetchPositionLoop, RDX_MAIN_FETCH_APPEND_SUCCESS, rdxMainFetchPositionSuccess, RDX_MAIN_FETCH_POSITION_SUCCESS, RDX_MAIN_FETCH_POSITION, RDX_MAIN_FETCH_QUIT_SUCCESS, RDX_MAIN_FETCH_POSITION_BREAK, rdxMainFetchAppendSuccess, RDX_MAIN_FETCH_POSITION_ERROR } from './actions';
import { map, switchMap, withLatestFrom, delay } from 'rxjs';
import { aschax } from '../../aschax';
import { Store } from '@ngrx/store';
import { getRdxMainToken } from './selectors';
import { AxiosError } from 'axios';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private store: Store,
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainFetchAppend),
      switchMap(ac => aschax.post('/append-queue/' + ac.queueId).then(res => {
        return {
          type: RDX_MAIN_FETCH_APPEND_SUCCESS,
          pos: res.data.pos,
          dangerous: res.data.dangerous,
          jump: res.data.jump,
          jump_position: res.data.jump_position,
          jump_fee: res.data.jump_fee
        }
      })))
  });
  fetchAppendSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainFetchAppendSuccess),
      map(ac => {
        return {
          type: RDX_MAIN_FETCH_POSITION,
          dangerous: ac.dangerous
        }
      })
    )
  })

  fetchPosition = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainFetchPosition),
      switchMap(ac => aschax.get('/position/' + ac.dangerous).then(res => {
        return {
          type: RDX_MAIN_FETCH_POSITION_SUCCESS,
          pos: res.data.pos,
          dangerous: ac.dangerous,
          jump: res.data.jump,
          jump_position: res.data.jump_position,
          jump_fee: res.data.jump_fee
        }
      }).catch((err: AxiosError<any>) => {
        return {
          type: RDX_MAIN_FETCH_POSITION_ERROR,
          message: err.response?.data.message
        }
      }))
    )
  })
  fetchPositionSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainFetchPositionSuccess),
      delay(1000),
      map(ac => {
        if (ac.pos > 0) {
          return {
            type: RDX_MAIN_FETCH_POSITION,
            dangerous: ac.dangerous
          }
        } else {
          return {
            type: RDX_MAIN_FETCH_POSITION_BREAK
          }
        }
      })
    )
  })
}
