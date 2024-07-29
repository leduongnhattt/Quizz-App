import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzJoinComponent } from './quizz-join.component';

describe('QuizzJoinComponent', () => {
  let component: QuizzJoinComponent;
  let fixture: ComponentFixture<QuizzJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizzJoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
