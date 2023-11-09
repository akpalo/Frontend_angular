import { Component } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  feedbackTitle: string;
  

 

  questions: Array <Question> = [new Question('Kysymys 1'), new Question('Kysymys 2'), new Question('Kysymys 3')]

  constructor() {
    this.feedbackTitle = 'Palautesivu'
  }

  

  onInputChange(event: any, question: Question){
    question.setFeedback(event.target.value);
  }

  
}


