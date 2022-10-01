import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { RDX_JUMP_SUCCESS_FETCH } from 'src/app/redux/jump-success/actions';
import { getJumpSuccessFetchError, getJumpSuccessIsFetch, getJumpSuccessIsFetchError, getJumpSuccessIsFetchSuccess } from 'src/app/redux/jump-success/selectors';

@Component({
  selector: 'app-jump-success',
  templateUrl: './jump-success.component.html',
  styleUrls: ['./jump-success.component.css']
})
export class JumpSuccessComponent implements OnInit, OnDestroy {
  activatedRoute: SubscriptionLike;
  queue: number;
  dangerous: string;
  isFetch: Observable<boolean>;
  isFetchSuccess: SubscriptionLike;
  isFetchError: Observable<boolean>;
  fetchError: Observable<string>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) { 
    this.queue = 0;
    this.dangerous = '';
    this.activatedRoute = this.route.paramMap.subscribe(res => {
      this.queue = parseInt(res.get('queue')!);
      this.dangerous = res.get('dangerous')!;
      this.store.dispatch({
        type: RDX_JUMP_SUCCESS_FETCH,
        queue: this.queue,
        dangerous: this.dangerous
      });
    })
    this.isFetch = this.store.select(getJumpSuccessIsFetch);
    this.isFetchSuccess = this.store.select(getJumpSuccessIsFetchSuccess).subscribe(res => {
      if (res) {
        this.router.navigate(['/main/' + this.queue + '/' + this.dangerous  ]);
      }
    });
    this.isFetchError = this.store.select(getJumpSuccessIsFetchError);
    this.fetchError = this.store.select(getJumpSuccessFetchError)
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.activatedRoute.unsubscribe();
  }

}
