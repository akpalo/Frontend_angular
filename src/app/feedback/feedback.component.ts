import { Component } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  feedbackTitle: string;
  feedbackInstructions: string; 
  

 

  questions: Array <Question> = [new Question('Mitä pidit kurssista - Tietokannat?'), new Question('Mitä pidit kurssista - Prosessilouhinta?'), new Question('Mitä pidit kurssista - Svenska i arbetslivet?')]

  constructor() {
    this.feedbackTitle = 'Palautesivu'
    this.feedbackInstructions = 'HUOM. Jos et osaa sanoa mielipidettä kurssista, vie arviosi nollaan.'
  }

  

  onInputChange(event: any, question: Question){
    question.setFeedback(event.target.value);
  }

  
}


