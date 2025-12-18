import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeTraining } from './custom-pipe-training';

describe('CustomPipeTraining', () => {
  let component: CustomPipeTraining;
  let fixture: ComponentFixture<CustomPipeTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPipeTraining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPipeTraining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
