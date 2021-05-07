import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpFormComponent } from './tp-form.component';

describe('TpFormComponent', () => {
  let component: TpFormComponent;
  let fixture: ComponentFixture<TpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
