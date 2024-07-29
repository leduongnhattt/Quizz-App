import { Routes } from '@angular/router';
import { QuizzComponent } from './pages/quizz/quizz.component';
import { QuizzInfoComponent } from './pages/quizz-info/quizz-info.component';
import { QuizzScoreComponent } from './pages/quizz-score/quizz-score.component';
import { QuizzJoinComponent } from './pages/quizz-join/quizz-join.component';

export const routes: Routes = [
  {
    path: 'quizz', component: QuizzComponent
  },
  {
    path: 'quizz-info', component: QuizzInfoComponent
  },
  {
    path: 'quizz-score', component: QuizzScoreComponent
  },
  {
    path: '', component: QuizzJoinComponent
  }
];
