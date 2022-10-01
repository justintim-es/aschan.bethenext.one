import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getTokenToken } from './redux/token/selectors';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  token: string;
  constructor(
    private router: Router,
    private store: Store
  ) { 
    this.token = '';
    this.store.select(getTokenToken).subscribe(res => this.token = res);
  }

  canActivate() {
    if (this.token == '') {
      this.router.navigate(['/redeem']);
      return false;
    }
    return true;
  }
}
