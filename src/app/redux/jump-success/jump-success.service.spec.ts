import { TestBed } from '@angular/core/testing';

import { JumpSuccessService } from './jump-success.service';

describe('JumpSuccessService', () => {
  let service: JumpSuccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JumpSuccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
