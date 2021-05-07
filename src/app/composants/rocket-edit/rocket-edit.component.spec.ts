import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketEditComponent } from './rocket-edit.component';

describe('RocketEditComponent', () => {
  let component: RocketEditComponent;
  let fixture: ComponentFixture<RocketEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
