import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JumpSuccessComponent } from './routs/jump-success/jump-success.component';
import { LandingComponent } from './routs/landing/landing.component';
import { MainComponent } from './routs/main/main.component';
import { RedeemRedeemComponent } from './routs/redeem/redeem-redeem/redeem-redeem.component';
import { RedeemComponent } from './routs/redeem/redeem.component';
import { GuardService } from './guard.service';
import { InviteComponent } from './routs/invite/invite.component';
const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'main/:queue', component: MainComponent
  },
  {
    path: 'main/:queue/:dangerous', component: MainComponent
  },
  {
    path: 'jump-success/:queue/:dangerous', component: JumpSuccessComponent
  },
  {
    path: 'redeem', component: RedeemComponent
  },
  {
    path: 'redeem-redeem', component: RedeemRedeemComponent, canActivate: [GuardService]
  },
  {
   path: 'invite', component: InviteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
