import { createFeatureSelector, createSelector } from '@ngrx/store'
import { IJumpSuccessReducer } from './reducer'
const getJumpSuccessFeatureState = createFeatureSelector<IJumpSuccessReducer>('jumpSuccessReducer');

export const getJumpSuccessIsFetch = createSelector(
    getJumpSuccessFeatureState,
    state => state.isFetch
)
export const getJumpSuccessIsFetchSuccess = createSelector(
    getJumpSuccessFeatureState,
    state => state.isFetchSuccess
)  
export const getJumpSuccessIsFetchError = createSelector(
    getJumpSuccessFeatureState,
    state => state.isFetchError
)
export const getJumpSuccessFetchError = createSelector(
    getJumpSuccessFeatureState,
    state => state.fetchError
)