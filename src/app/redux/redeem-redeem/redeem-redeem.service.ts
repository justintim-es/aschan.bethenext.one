import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType,  } from '@ngrx/effects';
import { rdxRedeemRedeemFetch, rdxRedeemRedeemFetchSuccess, rdxRedeemRedeemNextCustomerFetch, RDX_REDEEM_REDEEM_FETCH_SUCCESS, RDX_REDEEM_REDEEM_NEXT_CUSTOMER_FETCH_SUCCESS, rdxRedeemRedeemNextCustomerFetchSuccess, RDX_REDEEM_REDEEM_FETCH } from './actions';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { aschax } from 'src/app/aschax';
import { Store } from '@ngrx/store';
import { getTokenToken } from '../token/selectors';
@Injectable({
  providedIn: 'root'
})
export class RedeemRedeemService {

  constructor(
    private store: Store,
    private actions: Actions
  ) { }
  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxRedeemRedeemFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get('/queue-length', {
        headers: {
          'Authorization': 'JWT ' + ac[1]
        }      
      }).then(res => {
        return {
          type: RDX_REDEEM_REDEEM_FETCH_SUCCESS,
          queueLength: res.data.length
        }
      }))
    )
  })
  fetchNextCustomer = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxRedeemRedeemNextCustomerFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get('/next-manual', {
        headers: {
          'Authorization': 'JWT '+ ac[1]
        }
      }).then(res => {
        return {
          type: RDX_REDEEM_REDEEM_NEXT_CUSTOMER_FETCH_SUCCESS
        }
      })
    ))
  })
  fetchNextCustomerSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxRedeemRedeemNextCustomerFetchSuccess),
      map(ac => {
        return {
          type: RDX_REDEEM_REDEEM_FETCH  
        }
      })
    )
  }) 
}
