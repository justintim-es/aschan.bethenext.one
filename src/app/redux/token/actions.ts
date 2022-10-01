import { createAction, props } from "@ngrx/store";

export const RDX_TOKEN_SET = 'RDX_TOKEN_SET';
export const rdxTokenSet = createAction(
    RDX_TOKEN_SET,
    props<{ token: string }>()
)