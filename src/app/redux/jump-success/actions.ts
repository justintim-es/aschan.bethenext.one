import { createAction, props } from "@ngrx/store";

export const RDX_JUMP_SUCCESS_FETCH = 'RDX_JUMP_SUCCESS_FETCH';
export const rdxJumpSuccessFetch = createAction(
    RDX_JUMP_SUCCESS_FETCH,
    props<{ queue: number, dangerous: string }>()
)
export const RDX_JUMP_SUCCESS_FETCH_SUCCESS = 'RDX_JUMP_SUCCESS_FETCH_SUCCESS';
export const rdxJumpSuccessFetchSuccess = createAction(
    RDX_JUMP_SUCCESS_FETCH_SUCCESS,
)
export const RDX_JUMP_SUCCESS_FETCH_ERROR = 'RDX_JUMP_SUCCESS_FETCH_ERROR';
export const rdxJumpSuccessFetchError = createAction(
    RDX_JUMP_SUCCESS_FETCH_ERROR,
    props<{ error: string }>()
)