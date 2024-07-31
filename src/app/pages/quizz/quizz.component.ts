import { Component, inject, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Question, Quizz, QuizzResult } from '../../types';
import { Router } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [MatRadioModule, MatButtonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
  ngOnInit(): void {
    this.quizzResult = this.testService.quizzResult;
    if(!this.quizzResult) {
      this.router.navigateByUrl('/')
      return;
    }
    this.testService.getQuestions().subscribe((results) => {
      this.questions = results
    });
    this.testService.getQuizzById(this.quizzResult.quizzId).subscribe((result) => {
      this.quizzInfo = result;
    })
  }
  get currentQuestion() {
    let questionId = this.quizzInfo.question[this.currentQuestionNo];
    return this.questions.find(x => x.id == questionId)
  }
  next() {
    this.quizzResult.respone?.push({
      questionId: this.currentQuestion!.id,
      answerOptionId: this.currentSelectedOptionId

    })
    this.currentQuestionNo++;
    this.currentSelectedOptionId = ""
  }
  currentSelectedOptionId: string = ''
  router = inject(Router)
  testService = inject(TestService);
  questions: Question[] = [];
  quizzInfo !: Quizz
  quizzResult !: QuizzResult
  currentQuestionNo: number = 0;

}
