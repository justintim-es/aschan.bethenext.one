import { createAction, props } from "@ngrx/store";

export const RDX_LANDING_CURTAIN_OPEN_TRIGGER = 'RDX_LANDING_CURTAIN_OPEN_TRIGGER';
export const rdxLandingCurtainOpenTrigger = createAction(
    RDX_LANDING_CURTAIN_OPEN_TRIGGER
)
export const RDX_LANDING_CURTAIN_OPEN  = 'RDX_LANDING_CURTAIN_OPEN';
export const rdxLandingCurtainOpen = createAction(
    RDX_LANDING_CURTAIN_OPEN
);
export const RDX_LANDING_IS_FAQ_TRUE  = 'RDX_LANDING_IS_FAQ_TRUE';
export const rdxLandingIsFaqTrue = createAction(
    RDX_LANDING_IS_FAQ_TRUE
)
export const RDX_LANDING_FETCH_CONTACT  = 'RDX_LANDING_FETCH_CONTACT';
export const rdxLandingFetchContact = createAction(
    RDX_LANDING_FETCH_CONTACT,
    props<{ message: string, from: string }>()
)
export const RDX_LANDING_FETCH_CONTACT_SUCCESS = 'RDX_LANDING_FETCH_CONTACT_SUCCESS';
export const rdxLandingFetchContactSuccess = createAction(
    RDX_LANDING_FETCH_CONTACT_SUCCESS
)