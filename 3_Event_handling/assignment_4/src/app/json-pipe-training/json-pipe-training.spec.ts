import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPipeTraining } from './json-pipe-training';

describe('JsonPipeTraining', () => {
  let component: JsonPipeTraining;
  let fixture: ComponentFixture<JsonPipeTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonPipeTraining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonPipeTraining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
