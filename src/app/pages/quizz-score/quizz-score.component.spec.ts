import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzScoreComponent } from './quizz-score.component';

describe('QuizzScoreComponent', () => {
  let component: QuizzScoreComponent;
  let fixture: ComponentFixture<QuizzScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizzScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
