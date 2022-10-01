import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpSuccessComponent } from './jump-success.component';

describe('JumpSuccessComponent', () => {
  let component: JumpSuccessComponent;
  let fixture: ComponentFixture<JumpSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumpSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JumpSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
