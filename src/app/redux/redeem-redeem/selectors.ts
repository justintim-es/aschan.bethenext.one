import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IRedeemRedeemReducer } from "./reducer";

const getRedeemRedeemFeatureState = createFeatureSelector<IRedeemRedeemReducer>('redeemRedeemReducer');
export const getRedeemRedeemIsFetch = createSelector(
    getRedeemRedeemFeatureState,
    state => state.isFetch
)
export const getRedeemRedeemIsFetchSuccess = createSelector(
    getRedeemRedeemFeatureState,
    state => state.isFetchSuccess
)
export const getRedeemRedeemQueueLength = createSelector(
    getRedeemRedeemFeatureState,
    state => state.queueLength
)
export const getRedeemRedeemIsFetchNextCustomer = createSelector(
    getRedeemRedeemFeatureState,
    state => state.isFetchNextCustomer
)
export const getRedeemRedeemIsFetchNextCustomerSuccess = createSelector(
    getRedeemRedeemFeatureState,
    state => state.isFetchNextCustomerSuccess
)
