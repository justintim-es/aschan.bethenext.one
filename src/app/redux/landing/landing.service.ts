import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { rdxLandingCurtainOpenTrigger, RDX_LANDING_CURTAIN_OPEN, rdxLandingCurtainOpen, RDX_LANDING_IS_FAQ_TRUE, rdxLandingFetchContact, RDX_LANDING_FETCH_CONTACT_SUCCESS } from './actions';
import { delay, map, switchMap } from 'rxjs/operators';
import { aschax } from 'src/app/aschax';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(
    private actions: Actions
  ) { }

  curtainOpenTrigger = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingCurtainOpenTrigger),
      delay(2500),
      map(ac => {
        return {
          type: RDX_LANDING_CURTAIN_OPEN
        }
      })
    )
  })
  curtainOpen = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingCurtainOpen),
      delay(500),
      map(ac => {
        return {
          type: RDX_LANDING_IS_FAQ_TRUE
        }
      })
    )
  })
  fetchContact = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingFetchContact),
      switchMap(ac => aschax.post('/contact', {
        message: ac.message,
        from: ac.from
      }).then(res => {
        return {
          type: RDX_LANDING_FETCH_CONTACT_SUCCESS,
        }
      })
      ))
  })
}
