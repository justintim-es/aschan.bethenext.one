import { createAction, props } from "@ngrx/store";

export const RDX_REDEEM_FETCH_LOGIN  = 'RDX_REDEEM_FETCH_LOGIN';
export const rdxRedeemFetchLogin = createAction(
    RDX_REDEEM_FETCH_LOGIN,
    props<{ username: string, password: string }>()
)
export const RDX_REDEEM_FETCH_LOGIN_SUCCESS = 'RDX_REDEEM_FETCH_LOGIN_SUCCESS';
export const rdxRedeemFetchLoginSuccess = createAction(
    RDX_REDEEM_FETCH_LOGIN_SUCCESS,
    props<{ token: string }>()
)
export const RDX_REDEEM_FETCH_LOGIN_ERROR ='RDX_REDEEM_FETCH_LOGIN_ERROR';
export const rdxRedeemFetchLoginError = createAction(
    RDX_REDEEM_FETCH_LOGIN_ERROR,
    props<{ error: any }>()
)