import { createReducer, on } from "@ngrx/store";
import { rdxJumpSuccessFetch, rdxJumpSuccessFetchSuccess, rdxJumpSuccessFetchError } from "./actions";

export interface IJumpSuccessReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchError: any;
}
export const jumpSuccessInitial: IJumpSuccessReducer = {
    isFetch: false,
    isFetchSuccess: false,
    isFetchError: false,
    fetchError: null
}
export const jumpSuccessReducer = createReducer(
    jumpSuccessInitial,
    on(rdxJumpSuccessFetch, (state: IJumpSuccessReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false
        }
    }),
    on(rdxJumpSuccessFetchSuccess, (state: IJumpSuccessReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true
        }
    }),
    on(rdxJumpSuccessFetchError, (state: IJumpSuccessReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchError: true,
            fetchError: action.error
        }
    })
)