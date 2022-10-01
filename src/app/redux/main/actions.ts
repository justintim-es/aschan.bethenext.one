import { createAction, props } from "@ngrx/store";

export const RDX_MAIN_FETCH_APPEND = 'RDX_MAIN_FETCH_APPEND';
export const rdxMainFetchAppend = createAction(
    RDX_MAIN_FETCH_APPEND,
    props<{ queueId: number }>()
)
export const RDX_MAIN_FETCH_APPEND_SUCCESS = 'RDX_MAIN_FETCH_APPEND_SUCCESS';
export const rdxMainFetchAppendSuccess = createAction(
    RDX_MAIN_FETCH_APPEND_SUCCESS,
    props<{ pos: number, dangerous: string, jump: string, jump_position: number, jump_fee: number }>()
)
export const RDX_MAIN_FETCH_POSITION = 'RDX_MAIN_FETCH_POSITION';
export const rdxMainFetchPosition = createAction(
    RDX_MAIN_FETCH_POSITION,
    props<{ dangerous: string }>()
)
export const RDX_MAIN_FETCH_POSITION_SUCCESS = 'RDX_MAIN_FETCH_POSITION_SUCCESS';
export const rdxMainFetchPositionSuccess = createAction(
    RDX_MAIN_FETCH_POSITION_SUCCESS,
    props<{ pos: number, dangerous: string, jump: string, jump_position: number, jump_fee: number }>()
)
export const RDX_MAIN_FETCH_POSITION_ERROR = 'RDX_MAIN_FETCH_POSITION_ERROR';
export const rdxMainFetchPositionError = createAction(
    RDX_MAIN_FETCH_POSITION_ERROR,
    props<{ message: string }>()
)
export const RDX_MAIN_FETCH_POSITION_LOOP = 'RDX_MAIN_FETCH_POSITION_LOOP';
export const rdxMainFetchPositionLoop = createAction(
    RDX_MAIN_FETCH_POSITION_LOOP,
);
export const RDX_MAIN_FETCH_POSITION_BREAK = 'RDX_MAIN_FETCH_POSITION_BREAK';
export const rdxMainFetchPositionBreak = createAction(
    RDX_MAIN_FETCH_POSITION_BREAK
)

export const RDX_MAIN_FETCH_QUIT = 'RDX_MAIN_FETCH_QUIT';
export const rdxMaionFetchQuit = createAction(
    RDX_MAIN_FETCH_QUIT,
)
export const RDX_MAIN_FETCH_QUIT_SUCCESS = 'RDX_MAIN_FETCH_QUIT_SUCCESS';
export const rdxMainFetchQuitSuccess = createAction(
    RDX_MAIN_FETCH_QUIT_SUCCESS,
)
export const RDX_MAIN_HAS_DANGEROUS_FALSE = 'RDX_MAIN_HAS_DANGEROUS_FALSE';
export const rdxMainHasDangerousFalse = createAction(
    RDX_MAIN_HAS_DANGEROUS_FALSE
)
export const RDX_MAIN_ROUTE_WITH_DANGEROUS = 'RDX_MAIN_ROUTE_WITH_DANGEROUS';
export const rdxMainRouteWithDangerous = createAction(
    RDX_MAIN_ROUTE_WITH_DANGEROUS,
)
export const RDX_MAIN_BACK = 'RDX_MAIN_BACK';
export const rdxMainBack = createAction(
    RDX_MAIN_BACK
)