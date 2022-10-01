import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemRedeemComponent } from './redeem-redeem.component';

describe('RedeemRedeemComponent', () => {
  let component: RedeemRedeemComponent;
  let fixture: ComponentFixture<RedeemRedeemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemRedeemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedeemRedeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
