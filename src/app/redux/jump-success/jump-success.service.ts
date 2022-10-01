import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { aschax } from 'src/app/aschax';
import { rdxJumpSuccessFetch, RDX_JUMP_SUCCESS_FETCH_ERROR, RDX_JUMP_SUCCESS_FETCH_SUCCESS } from './actions';
import { switchMap } from 'rxjs';
import { AxiosError } from 'axios';
@Injectable({
  providedIn: 'root'
})
export class JumpSuccessService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxJumpSuccessFetch),
      switchMap(ac => aschax.post(`/jump/${ac.queue}/${ac.dangerous}`).then(res => {
        return {
          type: RDX_JUMP_SUCCESS_FETCH_SUCCESS,
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_JUMP_SUCCESS_FETCH_ERROR,
          error: err.response?.data
        }
      }))
    )
  })
}
