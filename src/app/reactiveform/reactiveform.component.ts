import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})


export class ReactiveformComponent implements OnInit {

  ngOnInit(): void {

  }

  profileForm: FormGroup;

  person: any = {
    firstName: "Anna",
    lastName: 'Puu',
    personID: '123456-2234',
    email: 'anna.puu@gmail.com',
    userName: 'annapuu123',
    passWord: 'Lappeenranta1!',
    confirmPassword: 'Lappeenranta1!',
    termsAndConditions: 'true'
  };

  constructor() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('Anna', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z ]*$")]),
      lastName: new FormControl('Puu', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z ]*$")]),
      personID: new FormControl('123489-4422', [Validators.required, Validators.minLength(1), Validators.pattern("/^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])([5-9]\d\+|\d\d-|[01]\dA)\d{3}[\dA-Z]$/")]),
      email: new FormControl('anna.puu@gmail.com', [Validators.required, Validators.minLength(1), Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      userName: new FormControl('annapuu123', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('Lappeenranta1!', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('Lappeenranta1!', [Validators.required, Validators.minLength(8), Validators.pattern('Lappeenranta1!')]),
      termsAndConditions: new FormControl('true') 
    });



  }



  get firstName() {
    return this.profileForm.get('firstName')
  }
  get lastName() {
    return this.profileForm.get('lastName')
  }
  get personID() {
    return this.profileForm.get('personID')
  }
  get email() {
    return this.profileForm.get('email')
  }
  get userName() {
    return this.profileForm.get('userName')
  }
  get password() {
    return this.profileForm.get('password')
  }
  get confirmPassword() {
    return this.profileForm.get('confirmPassword')
  }
  get termsAndConditions() {
    return this.profileForm.get('termsAndConditions')
  }

  onSubmit() {
    console.log('profileForm.value: ' + this.profileForm.value);
    console.log('profileForm.value: ' + this.profileForm.value.firstName);
    console.log('profileForm.value: ' + this.profileForm.value.lastName);
    console.log('profileForm.value: ' + this.profileForm.value.personID);
    console.log('profileForm.value: ' + this.profileForm.value.email);
    console.log('profileForm.value: ' + this.profileForm.value.userName);
    console.log('profileForm.value: ' + this.profileForm.value.password);
    console.log('profileForm.value: ' + this.profileForm.value.confirmPassword);
    console.log('profileForm.valid: ' + this.profileForm.valid);
    console.log('Form data: ', this.profileForm)
    
    
  }
}

