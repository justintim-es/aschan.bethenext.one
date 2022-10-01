import { TestBed } from '@angular/core/testing';

import { RedeemRedeemService } from './redeem-redeem.service';

describe('RedeemRedeemService', () => {
  let service: RedeemRedeemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedeemRedeemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
