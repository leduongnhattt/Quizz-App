import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { TestService } from '../../services/test.service';
import { QuizzResult } from '../../types';
@Component({
  selector: 'app-quizz-join',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './quizz-join.component.html',
  styleUrl: './quizz-join.component.css'
})
export class QuizzJoinComponent {
  code!: string;
  name!: string;
  testService = inject(TestService)
  join() {
    if(this.code && this.name) {
      this.testService.getQuizzByCode(this.code).subscribe((result) => {
      let quizz = result[0];
      let quizzResult: QuizzResult = {
        name: this.name,
        quizzId: quizz.id
      }
      this.testService.joinQuizz(quizzResult).subscribe((respone) => {
        console.log(respone)
      })
      });
    }
    else {

    }
  }
}
