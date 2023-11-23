import { Component } from '@angular/core';
import { Question } from '../question';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  feedbackTitle: string;
  feedbackInstructions: string; 
  

 

  questions: Array<Question> = [];

  constructor(private dataService: DataService) {
    this.feedbackTitle = 'Palautesivu'
    this.feedbackInstructions = 'HUOM. Jos et osaa sanoa mielipidettä kurssista, vie arviosi nollaan.'
    this.dataService.getQuestions()
    this.questions = this.dataService.getQuestions()
  }

  
  

  onInputChange(event: any, question: Question){
    question.setFeedback(event.target.value);
  }

  
}


