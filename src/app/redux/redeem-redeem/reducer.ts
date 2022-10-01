import { createReducer, on } from "@ngrx/store";
import { queue } from "rxjs";
import { rdxRedeemRedeemFetch, rdxRedeemRedeemFetchSuccess, rdxRedeemRedeemNextCustomerFetch, rdxRedeemRedeemNextCustomerFetchSuccess } from './actions';

export interface IRedeemRedeemReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    queueLength: number;
    isFetchNextCustomer: boolean;
    isFetchNextCustomerSuccess: boolean;
}
export const redeemRedeemInitial: IRedeemRedeemReducer = {
    isFetch: false,
    isFetchSuccess: false,
    queueLength: 0,
    isFetchNextCustomer: false,
    isFetchNextCustomerSuccess: false
}
export const redeemRedeemReducer = createReducer(
    redeemRedeemInitial,
    on(rdxRedeemRedeemFetch, (state: IRedeemRedeemReducer, action) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false
        }
    }),
    on(rdxRedeemRedeemFetchSuccess, (state: IRedeemRedeemReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true,
            queueLength: action.queueLength
        }
    }),
    on(rdxRedeemRedeemNextCustomerFetch, (state: IRedeemRedeemReducer) => {
        return {
            ...state,
            isFetchNextCustomer: true,
            isFetchNextCustomerSuccess: false
        }
    }),
    on(rdxRedeemRedeemNextCustomerFetchSuccess, (state: IRedeemRedeemReducer) => {
        return {
            ...state,
            isFetchNextCustomer: false,
            isFetchNextCustomerSuccess: true
        }
    })
)