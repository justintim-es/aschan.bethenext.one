import { createAction, props } from "@ngrx/store";

export const RDX_REDEEM_REDEEM_FETCH = 'RDX_REDEEM_REDEEM_FETCH';
export const rdxRedeemRedeemFetch = createAction(
    RDX_REDEEM_REDEEM_FETCH
)
export const RDX_REDEEM_REDEEM_FETCH_SUCCESS = 'RDX_REDEEM_REDEEM_FETCH_SUCCESS';
export const rdxRedeemRedeemFetchSuccess = createAction(
    RDX_REDEEM_REDEEM_FETCH_SUCCESS,
    props<{ queueLength: number }>()
)
export const RDX_REDEEM_REDEEM_NEXT_CUSTOMER_FETCH = 'RDX_REDEEM_REDEEM_NEXT_CUSTOMER_FETCH';
export const rdxRedeemRedeemNextCustomerFetch = createAction(
    RDX_REDEEM_REDEEM_NEXT_CUSTOMER_FETCH
)
export const RDX_REDEEM_REDEEM_NEXT_CUSTOMER_FETCH_SUCCESS = 'RDX_REDEEM_REDEEM_NEXT_CUSTOMER_FETCH_SUCCESS';
export const rdxRedeemRedeemNextCustomerFetchSuccess = createAction(
    RDX_REDEEM_REDEEM_NEXT_CUSTOMER_FETCH_SUCCESS
)