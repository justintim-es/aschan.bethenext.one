import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { RDX_REDEEM_FETCH_LOGIN } from 'src/app/redux/redeem/actions';
import { getRedeemFetchLoginError, getRedeemIsFetchLogin, getRedeemIsFetchLoginError, getRedeemIsFetchLoginSuccess } from 'src/app/redux/redeem/selectors';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.component.html',
  styleUrls: ['./redeem.component.css']
})
export class RedeemComponent implements OnInit {
  username: string;
  usernameFormControl: FormControl;
  password: string;
  passwordFormControl: FormControl;
  isFetchLogin: Observable<boolean>;
  isFetchLoginSuccess: SubscriptionLike;
  isFetchLoginError: SubscriptionLike;
  fetchLoginError: Observable<boolean>;
  constructor(
    private router: Router,
    private store: Store
  ) {
    this.username = '';
    this.usernameFormControl = new FormControl('', [
      Validators.required
    ]);
    this.password = '';
    this.passwordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.isFetchLogin = this.store.select(getRedeemIsFetchLogin);
    this.isFetchLoginSuccess = this.store.select(getRedeemIsFetchLoginSuccess).subscribe(res => {
      if (res) {
        this.router.navigate(['/redeem-redeem']);
      }
    });
    this.isFetchLoginError = this.store.select(getRedeemIsFetchLoginError).subscribe(res => {
      if (res) {
        this.usernameFormControl.setErrors({ backend: true });
      }
    });
    this.fetchLoginError = this.store.select(getRedeemFetchLoginError);

   }

  ngOnInit(): void {
  }
  login() {
    this.store.dispatch({
      type: RDX_REDEEM_FETCH_LOGIN,
      username: this.username,
      password: this.password
    })
  }
}
