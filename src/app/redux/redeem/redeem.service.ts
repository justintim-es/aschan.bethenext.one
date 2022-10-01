import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { aschax } from 'src/app/aschax';
import { rdxRedeemFetchLogin, rdxRedeemFetchLoginSuccess, RDX_REDEEM_FETCH_LOGIN, RDX_REDEEM_FETCH_LOGIN_ERROR, RDX_REDEEM_FETCH_LOGIN_SUCCESS } from './actions';
import { map, switchMap } from 'rxjs/operators';
import { AxiosError } from 'axios';
import { RDX_TOKEN_SET } from '../token/actions';
@Injectable({
  providedIn: 'root'
})
export class RedeemService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetchLogin = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxRedeemFetchLogin),
      switchMap(ac => aschax.post('/auth', {
        username: ac.username,
        password: ac.password
      }).then(res => {
        return {
          type: RDX_REDEEM_FETCH_LOGIN_SUCCESS,
          token: res.data.access_token
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_REDEEM_FETCH_LOGIN_ERROR,
          error: err.response?.data
        }
      }))
    )
  })
  fetchLoginSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxRedeemFetchLoginSuccess),
      map(ac => {
        return {
          type: RDX_TOKEN_SET,
          token: ac.token
        }
      })
    )
  })
}
