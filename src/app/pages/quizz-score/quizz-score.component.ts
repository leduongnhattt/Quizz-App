import { Component, inject, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { QuizzResult } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizz-score',
  standalone: true,
  imports: [],
  templateUrl: './quizz-score.component.html',
  styleUrl: './quizz-score.component.css'
})
export class QuizzScoreComponent implements OnInit{
  ngOnInit(): void {
    this.quizzResult = this.testService.quizzResult;
    if(!this.quizzResult){
      this.router.navigateByUrl('/');
      return;
    }

    let quizzResultId = this.testService.quizzResult.id!;
    this.testService.getQuizzResult(quizzResultId).subscribe((result) => {
      this.quizzResult = result
    })
  }
  testService = inject(TestService)
  quizzResult!: QuizzResult
  router = inject(Router)
}
