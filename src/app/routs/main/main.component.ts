import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { enterPositionFromDown, enterPositionFromUp } from 'src/app/animations';
import { getLandingIsCurtainOpen } from 'src/app/redux/landing/selectors';
import { RDX_MAIN_BACK, RDX_MAIN_FETCH_APPEND, RDX_MAIN_FETCH_POSITION, RDX_MAIN_FETCH_QUIT, RDX_MAIN_HAS_DANGEROUS_FALSE } from 'src/app/redux/main/actions';
import { getRdxMainHasDangerous, getRdxMainIsAppendFetch, getRdxMainIsAppendFetchSuccess, getRdxMainJumpPosition, getRdxMainJumpUrl, getRdxMainPosition, getRdxMainToken, getRdxMainJumpFee, getRdxMainIsPositionError, getRdxMainPositionError } from 'src/app/redux/main/selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    enterPositionFromDown,
    enterPositionFromUp
  ]
})
export class MainComponent implements OnInit, OnDestroy {
  isAppendFetch: Observable<boolean>;
  isAppendFetchSuccess: Observable<boolean>;
  position: Observable<number>;
  activatedRouteSub: SubscriptionLike;
  token: Observable<string>;
  jump: Observable<string>;
  isFetchAppendSuccess: SubscriptionLike;
  queue: number;
  dangerous: string;
  dangerousSub: SubscriptionLike;
  isCurtainOpen: Observable<boolean>;
  jumpPosition: Observable<number>;
  jumpFee: Observable<number>;
  isPositionError: Observable<boolean>;
  positionError: Observable<any>;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
    this.queue = 0;
    this.dangerous = '';
    this.isAppendFetch = this.store.select(getRdxMainIsAppendFetch);
    this.isAppendFetchSuccess = this.store.select(getRdxMainIsAppendFetchSuccess);
    this.activatedRouteSub = this.activatedRoute.paramMap.subscribe(res => {
      this.queue = parseInt(res.get('queue')!)
      if(!res.get('dangerous')) {
        this.store.dispatch({
          type: RDX_MAIN_FETCH_APPEND,
          queueId: this.queue,
        })
      } else {
        this.dangerous = res.get('dangerous')!;
        this.store.dispatch({
          type: RDX_MAIN_FETCH_POSITION,
          dangerous: this.dangerous
        })
      }
    });
    this.position = this.store.select(getRdxMainPosition);
    this.token = this.store.select(getRdxMainToken);
    this.jump = this.store.select(getRdxMainJumpUrl);
    this.dangerousSub = this.store.select(getRdxMainToken).subscribe(res => this.dangerous = res)
    this.isFetchAppendSuccess = this.store.select(getRdxMainHasDangerous).subscribe(res => {
      if (res) {
        this.store.dispatch({ type: RDX_MAIN_HAS_DANGEROUS_FALSE });
        this.router.navigate(['/main/' + this.queue + '/' + this.dangerous])
      }
    });
    this.isCurtainOpen = this.store.select(getLandingIsCurtainOpen);
    this.jumpPosition = this.store.select(getRdxMainJumpPosition);
    this.jumpFee = this.store.select(getRdxMainJumpFee);
    this.isPositionError = this.store.select(getRdxMainIsPositionError);
    this.positionError = this.store.select(getRdxMainPositionError);
  }

  ngOnInit(): void {
  }
  back() {
    this.store.dispatch({
      type: RDX_MAIN_BACK
    })
    this.router.navigate(['/main/' + this.queue ]);
  }
  ngOnDestroy(): void {
    this.activatedRouteSub.unsubscribe();
    // this.jumpSub.unsubscribe();
    this.dangerousSub.unsubscribe();
    // this.store.dispatch({
    //   type: RDX_MAIN_FETCH_QUIT
    // })
  }
}
