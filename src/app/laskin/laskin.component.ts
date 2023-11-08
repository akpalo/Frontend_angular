import { Component } from '@angular/core';

@Component({
  selector: 'app-laskin',
  templateUrl: './laskin.component.html',
  styleUrls: ['./laskin.component.css'],
})
export class LaskinComponent {
  buttons: string[] = [
    '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='
  ];

  laskinTitle: string;

  constructor() {
    this.laskinTitle = 'Nelilaskin';
  }

  result: any;

  calculate(value: any) {
    console.log('addValue value: ' + value)

    if (value === 'C') {
      this.result = '';
    } else if (value === '=') {
      try {
        this.result = eval(this.result);
      } catch (error) {
        this.result = 'Error';
      }
    } else {
      if (this.result === 'Error') {
        this.result = '';
      }
      if (value.match(/[+\-*/]/) && this.result[this.result.length - 1].match(/[+\-*/]/)) {
        // Varmista, ettei lisätä kahta operaattoria peräkkäin
        return;
      }
      this.result += value;
    }

    }
  }









