import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RDX_REDEEM_REDEEM_FETCH, RDX_REDEEM_REDEEM_NEXT_CUSTOMER_FETCH } from 'src/app/redux/redeem-redeem/actions';
import { getRedeemRedeemIsFetch, getRedeemRedeemIsFetchNextCustomer, getRedeemRedeemIsFetchNextCustomerSuccess, getRedeemRedeemIsFetchSuccess, getRedeemRedeemQueueLength } from 'src/app/redux/redeem-redeem/selectors';

@Component({
  selector: 'app-redeem-redeem',
  templateUrl: './redeem-redeem.component.html',
  styleUrls: ['./redeem-redeem.component.css']
})
export class RedeemRedeemComponent implements OnInit {
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  queueLength: Observable<number>;
  isFetchNextCustomer: Observable<boolean>;
  isFetchNextCustomerSuccess: Observable<boolean>;
  constructor(
    private store: Store
  ) { 
    this.isFetch = this.store.select(getRedeemRedeemIsFetch);
    this.isFetchSuccess = this.store.select(getRedeemRedeemIsFetchSuccess);
    this.queueLength = this.store.select(getRedeemRedeemQueueLength);
    this.isFetchNextCustomer = this.store.select(getRedeemRedeemIsFetchNextCustomer);
    this.isFetchNextCustomerSuccess = this.store.select(getRedeemRedeemIsFetchNextCustomerSuccess);
  }

  ngOnInit(): void {
    this.refresh();
  }
  next() {
    this.store.dispatch({
      type: RDX_REDEEM_REDEEM_NEXT_CUSTOMER_FETCH
    })
  }
  refresh() {
    this.store.dispatch({
      type: RDX_REDEEM_REDEEM_FETCH
    })
  }

  ngOnDestroy() {
  
  }
}
