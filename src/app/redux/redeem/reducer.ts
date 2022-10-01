import { createReducer, on } from "@ngrx/store";
import { rdxRedeemFetchLogin, rdxRedeemFetchLoginSuccess, rdxRedeemFetchLoginError } from  './actions';
export interface IRedeemReducer {
    isFetchLogin: boolean;
    isFetchLoginSuccess: boolean;
    isFetchLoginError: boolean;
    fetchLoginError: any;
}
export const redeemInitial: IRedeemReducer = {
    isFetchLogin: false,
    isFetchLoginSuccess: false,
    isFetchLoginError: false,
    fetchLoginError: null
}
export const redeemReducer = createReducer(
    redeemInitial,
    on(rdxRedeemFetchLogin, (state: IRedeemReducer, action) => {
        return {
            ...state,
            isFetchLogin: true,
            isFetchLoginSuccess: false,
        }
    }),
    on(rdxRedeemFetchLoginSuccess, (state: IRedeemReducer, action) => {
        return {
            ...state,
            isFetchLogin: false,
            isFetchLoginSuccess: true,
        }
    }),
    on(rdxRedeemFetchLoginError, (state: IRedeemReducer, action) => {
        return {
            ...state,
            isFetchLogin: false,
            isFetchLoginError: true,
            fetchLoginError: action.error
        }
    })
)