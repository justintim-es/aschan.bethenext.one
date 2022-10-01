import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './routs/main/main.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { mainReducer } from './redux/main/reducer';
import { MainService } from './redux/main/main.service';
import { MatButtonModule } from '@angular/material/button';
import { JumpSuccessComponent } from './routs/jump-success/jump-success.component';
import { LandingComponent } from './routs/landing/landing.component';
import { landingReducer } from './redux/landing/reducer';
import { LandingService } from './redux/landing/landing.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { JumpSuccessService } from './redux/jump-success/jump-success.service';
import { jumpSuccessReducer } from './redux/jump-success/reducer';
import { RedeemComponent } from './routs/redeem/redeem.component';
import { RedeemRedeemComponent } from './routs/redeem/redeem-redeem/redeem-redeem.component';
import { redeemReducer } from './redux/redeem/reducer';
import { RedeemService } from './redux/redeem/redeem.service';
import { RedeemRedeemService } from './redux/redeem-redeem/redeem-redeem.service';
import { redeemRedeemReducer } from './redux/redeem-redeem/reducer';
import { tokenReducer } from './redux/token/reducer';
import { InviteComponent } from './routs/invite/invite.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    JumpSuccessComponent,
    LandingComponent,
    RedeemComponent,
    RedeemRedeemComponent,
    InviteComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      mainReducer: mainReducer,
      landingReducer: landingReducer,
      jumpSuccessReducer: jumpSuccessReducer,
      redeemReducer: redeemReducer,
      redeemRedeemReducer: redeemRedeemReducer,
      tokenReducer: tokenReducer
    }, {}),
    EffectsModule.forRoot([
      MainService,
      LandingService,
      JumpSuccessService,
      RedeemService,
      RedeemRedeemService
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
