import { createReducer, on } from "@ngrx/store";
import { rdxMainBack, rdxMainFetchAppend, rdxMainFetchAppendSuccess, rdxMainFetchPositionError, rdxMainFetchPositionSuccess, rdxMainHasDangerousFalse, rdxMainRouteWithDangerous } from "./actions";

export interface IMainReducer {
    isFetchAppend: boolean;
    isFetchAppendSuccess: boolean;
    position: number;
    token: string;
    jumpUrl: string;
    hasDangerous: boolean;
    jump_position: number;
    jump_fee: number;
    isPositionError: boolean;
    positionError: string;
}
export const mainInitial: IMainReducer = {
    isFetchAppend: false,
    isFetchAppendSuccess: false,
    position: -1,
    token: '',
    jumpUrl: '',
    hasDangerous: false,
    jump_position: -1,
    jump_fee: 0,
    isPositionError: false,
    positionError: ''
}
export const mainReducer = createReducer(
    mainInitial,
    on(rdxMainFetchAppend, (state: IMainReducer) => {
        return {
            ...state,
            isFetchAppend: true,
            isFetchAppendSuccess: false
        }
    }),
    on(rdxMainFetchAppendSuccess, (state: IMainReducer, action) => {
        return {
            ...state,
            isFetchAppend: false,
            isFetchAppendSuccess: true,
            position: action.pos,
            token: action.dangerous,
            jumpUrl: action.jump,
            hasDangerous: true,
            jump_position: action.jump_position,
            jump_fee: action.jump_fee
        }
    }),
    on(rdxMainFetchPositionSuccess, (state: IMainReducer, action) => {
        return {
            ...state,
            position: action.pos,
            isFetchAppendSuccess: true,
            jumpUrl: action.jump,
            jump_position: action.jump_position,
            jump_fee: action.jump_fee
        }
    }),
    on(rdxMainHasDangerousFalse, (state: IMainReducer) => {
        return {
            ...state,
            hasDangerous: false
      }
    }),
    on(rdxMainFetchPositionError, (state: IMainReducer, action) => {
        return {
            ...state,
            isPositionError: true,
            positionError: action.message
        }
    }),
    on(rdxMainBack, (state: IMainReducer) => {
        return mainInitial;
    })

)
