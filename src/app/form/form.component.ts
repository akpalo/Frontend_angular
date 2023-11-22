import { Component } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  currentPerson : Person = new Person();

  Constructor() {
    this.currentPerson.firstName
    this.currentPerson.lastName
    this.currentPerson.id
    this.currentPerson.email
    this.currentPerson.userName
    this.currentPerson.passWord
    this.currentPerson.passWord_2
  }
}







