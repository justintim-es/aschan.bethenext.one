import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ILandingReducer } from "./reducer";

const getLandingFeatureState = createFeatureSelector<ILandingReducer>('landingReducer');

export const getLandingIsCurtainOpen = createSelector(
    getLandingFeatureState,
    state => state.isCurtainOpen
)
export const getLandingIsFaq = createSelector(
    getLandingFeatureState,
    state => state.isFaq
)
export const getLandingIsFetchContact = createSelector(
    getLandingFeatureState,
    state => state.isFetchContact
)
export const getLandingIsFetchContactSuccess = createSelector(
    getLandingFeatureState,
    state => state.isFetchContactSuccess
)