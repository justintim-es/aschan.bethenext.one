import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainReducer } from "./reducer";

const getRdxMainFeatureState = createFeatureSelector<IMainReducer>('mainReducer');
export const getRdxMainIsAppendFetch = createSelector(
    getRdxMainFeatureState,
    state => state.isFetchAppend
)
export const getRdxMainIsAppendFetchSuccess = createSelector(
    getRdxMainFeatureState,
    state => state.isFetchAppendSuccess
)
export const getRdxMainPosition = createSelector(
    getRdxMainFeatureState,
    state => state.position
)
export const getRdxMainToken = createSelector(
    getRdxMainFeatureState,
    state => state.token
)
export const getRdxMainJumpUrl = createSelector(
    getRdxMainFeatureState,
    state => state.jumpUrl
)
export const getRdxMainHasDangerous = createSelector(
    getRdxMainFeatureState,
    state => state.hasDangerous
)
export const getRdxMainJumpPosition = createSelector(
  getRdxMainFeatureState,
  state => state.jump_position
)
export const getRdxMainJumpFee = createSelector(
  getRdxMainFeatureState,
  state => state.jump_fee
)
export const getRdxMainIsPositionError = createSelector(
    getRdxMainFeatureState,
    state => state.isPositionError
)
export const getRdxMainPositionError = createSelector(
    getRdxMainFeatureState,
    state => state.positionError
)
