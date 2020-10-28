import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalationDialogComponent } from './evalation-dialog.component';

describe('EvalationDialogComponent', () => {
  let component: EvalationDialogComponent;
  let fixture: ComponentFixture<EvalationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
