import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTraining } from './pipe-training';

describe('PipeTraining', () => {
  let component: PipeTraining;
  let fixture: ComponentFixture<PipeTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeTraining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeTraining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
