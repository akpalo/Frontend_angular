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
  laskinInstructions: string;

  constructor() {
    this.laskinTitle = 'Nelilaskin';
    this.laskinInstructions = 'Paina aluksi C - painiketta'
  }

  result: string = '';

  calculate(value: any): number {
    console.log('addValue value: ' + value)

    if (value === 'C') {
      this.result = '';
    } else if (value === '=') {
      try {
        this.result = eval(this.result);
        return parseFloat(this.result);
      } catch (error) {
        this.result = 'Error';
        return NaN;
      }
    } else {
      if (this.result === 'Error') {
        this.result = '';
      }
      if (value.match(/[+\-*/]/) && this.result[this.result.length - 1].match(/[+\-*/]/)) {
        
        return NaN;
      }
      this.result += value;
    }
    return NaN;
    }
  }









