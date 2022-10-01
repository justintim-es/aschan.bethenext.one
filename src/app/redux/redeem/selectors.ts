import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IRedeemReducer } from "./reducer";

const getRedeemFeatureState = createFeatureSelector<IRedeemReducer>('redeemReducer');
export const getRedeemIsFetchLogin = createSelector(
    getRedeemFeatureState,
    state => state.isFetchLogin
)
export const getRedeemIsFetchLoginSuccess = createSelector(
    getRedeemFeatureState,
    state => state.isFetchLoginSuccess
)
export const getRedeemIsFetchLoginError = createSelector(
    getRedeemFeatureState,
    state => state.isFetchLoginError
)
export const getRedeemFetchLoginError = createSelector(
    getRedeemFeatureState,
    state => state.fetchLoginError
)