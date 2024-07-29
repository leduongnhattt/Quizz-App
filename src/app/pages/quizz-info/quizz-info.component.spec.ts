import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzInfoComponent } from './quizz-info.component';

describe('QuizzInfoComponent', () => {
  let component: QuizzInfoComponent;
  let fixture: ComponentFixture<QuizzInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizzInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
