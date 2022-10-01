import { createReducer, on } from "@ngrx/store";
import { rdxLandingCurtainOpen, rdxLandingIsFaqTrue, rdxLandingFetchContact, rdxLandingFetchContactSuccess } from "./actions";

export interface ILandingReducer {
    isCurtainOpen: boolean;
    isFaq: boolean;
    isFetchContact: boolean;
    isFetchContactSuccess: boolean;
}
export const landingInitial: ILandingReducer = {
    isCurtainOpen: false,
    isFaq: false,
    isFetchContact: false,
    isFetchContactSuccess: false
}
export const landingReducer = createReducer(
    landingInitial,
    on(rdxLandingCurtainOpen, (state: ILandingReducer) => {
        return {
            ...state,
            isCurtainOpen: true
        }
    }),
    on(rdxLandingIsFaqTrue, (state: ILandingReducer) => {
        return {
            ...state,
            isFaq: true
        }
    }),
    on(rdxLandingFetchContact, (state: ILandingReducer) => {
        return {
            ...state,
            isFetchContact: true,
            isFetchContactSuccess: false
        }
    }),
    on(rdxLandingFetchContactSuccess, (state: ILandingReducer) => {
        return {
            ...state,
            isFetchContact: false,
            isFetchContactSuccess: true
        }
    })
)
