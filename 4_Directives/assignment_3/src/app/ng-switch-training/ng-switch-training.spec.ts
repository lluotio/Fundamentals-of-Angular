import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchTraining } from './ng-switch-training';

describe('NgSwitchTraining', () => {
  let component: NgSwitchTraining;
  let fixture: ComponentFixture<NgSwitchTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSwitchTraining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitchTraining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
