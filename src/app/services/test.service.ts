import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Quizz, QuizzResult } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  http = inject(HttpClient)
  constructor() {

  }
  getQuizzByCode(code: string) {
    return this.http.get<Quizz[]>("http://localhost:3000/quizz?code="+code)
  }
  joinQuizz(quizzResult: QuizzResult) {
    return this.http.post<QuizzResult>("http://localhost:3000/quizzResults?code=", quizzResult)
  }
}
