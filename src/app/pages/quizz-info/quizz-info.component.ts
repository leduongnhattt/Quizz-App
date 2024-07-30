import { Component, inject } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Quizz, QuizzResult } from '../../types';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-quizz-info',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './quizz-info.component.html',
  styleUrl: './quizz-info.component.css'
})
export class QuizzInfoComponent {
  testService = inject(TestService)
  quizzInfo!: Quizz
  router = inject(Router)
  quizzResult!: QuizzResult
  ngOnInit(): void {
    this.quizzResult = this.testService.quizzResult

    if(!this.quizzResult) {
      this.router.navigateByUrl("/")
      return
    }
    let quizzId =  this.quizzResult.quizzId
    this.testService.getQuizzById(quizzId).subscribe((quizz) => {
      this.quizzInfo = quizz;
    })
  }
  start() {
    this.router.navigateByUrl("/quizz")
  }
}
