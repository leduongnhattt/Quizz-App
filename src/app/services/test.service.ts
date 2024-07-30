import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Quizz, QuizzResult } from '../types';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  http = inject(HttpClient)
  quizzResult: QuizzResult = {
    id: 1,
    name: "âsass",
    quizzId: 1
  }
  constructor() {

  }
  getQuizzByCode(code: string): Observable<Quizz[]>{
    return this.http.get<Quizz[]>("http://localhost:3000/quizz?code="+code).pipe(
      catchError(this.handleError<Quizz[]>('getQuizzByCode', []))
    );
  }
  joinQuizz(quizzResult: QuizzResult): Observable<QuizzResult> {
    return this.http.post<QuizzResult>("http://localhost:3000/quizzResults", quizzResult).pipe(
      catchError(this.handleError<QuizzResult>('joinQuizz'))
    );
  }
  getQuizzById(id: number): Observable<Quizz> {
    return this.http.get<Quizz>("http://localhost:3000/quizz/" + id).pipe(
      catchError(this.handleError<Quizz>("getQuizzById"))
    )
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T)
    }
  }
}
