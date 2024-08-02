
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
    this.quizzResult.response?.push({
      questionId: this.currentQuestion!.id,
      answerOptionId: this.currentSelectedOptionId

    })
    this.currentQuestionNo++;
    this.currentSelectedOptionId = ""
  }
  Submit() {
    this.next();
    this.calculateResult();
    this.testService.updateQuizzResult(this.quizzResult.id!, this.quizzResult).subscribe()
    this.router.navigateByUrl('quizz-score')
  }
  calculateResult() {
    let score = 0;
    let correct = 0;
    let unCorrect = 0;
    let totalMark = 0;
    let unAttempt = 0;
    let percentage = 0;
    this.quizzResult.response?.forEach((respone) => {
      let questionId = respone.questionId;
      let selectedOptionId = respone.answerOptionId;
      let question = this.questions.find(x => x.id == questionId)
      let correctOption = question?.options.find(x => x.isCorrect == true);
      totalMark += question!.marks;
      if(!selectedOptionId){
        unAttempt++;
      }
      else if (selectedOptionId == correctOption?.id) {
        correct++;
        score += question!.marks;
      }
      else {
        unCorrect++;
        score -= question!.negativeMarks;
      }
    });
    percentage = Math.round((score / totalMark) * 100);
    this.quizzResult.correct = correct;
    this.quizzResult.score = score;
    this.quizzResult.unAttempt = unAttempt;
    this.quizzResult.percentage = percentage;
    this.quizzResult.unCorrect = unCorrect;
  }
  currentSelectedOptionId: string = ''
  router = inject(Router)
  testService = inject(TestService);
  questions: Question[] = [];
  quizzInfo !: Quizz
  quizzResult !: QuizzResult
  currentQuestionNo: number = 0;
}
