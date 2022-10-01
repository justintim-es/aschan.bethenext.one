import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { enterFromLeft, leavePositionDown, leavePositionUp } from 'src/app/animations';
import { RDX_LANDING_CURTAIN_OPEN_TRIGGER, RDX_LANDING_FETCH_CONTACT } from 'src/app/redux/landing/actions';
import { getLandingIsCurtainOpen, getLandingIsFaq, getLandingIsFetchContact, getLandingIsFetchContactSuccess } from 'src/app/redux/landing/selectors';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    leavePositionUp,
    leavePositionDown,
    enterFromLeft
  ]
})
export class LandingComponent implements OnInit {
  isCurtainOpen: Observable<boolean>;
  isFaq: Observable<boolean>;
  isContactFetch: Observable<boolean>;
  isContactFetchSuccess: Observable<boolean>;
  emailFormControl: FormControl;
  email: string;
  messageFormControl: FormControl;
  message: string;

  constructor(
    private store: Store
  ) { 
    this.isCurtainOpen = this.store.select(getLandingIsCurtainOpen);
    this.isFaq = this.store.select(getLandingIsFaq);
    this.isContactFetch = this.store.select(getLandingIsFetchContact);
    this.isContactFetchSuccess = this.store.select(getLandingIsFetchContactSuccess);
    this.emailFormControl = new FormControl('', [
      Validators.required
    ]);
    this.email = '';
    this.messageFormControl = new FormControl('', [
      Validators.required
    ])
    this.message = '';
  }

  ngOnInit(): void {
    this.store.dispatch({
      type: RDX_LANDING_CURTAIN_OPEN_TRIGGER,
    })
  }
  submit() {
    this.store.dispatch({
      type: RDX_LANDING_FETCH_CONTACT,
      message: this.message,
      from: this.email
      
    })
  }
}
