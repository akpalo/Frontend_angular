import { Component } from '@angular/core';

@Component({
  selector: 'app-laskin',
  templateUrl: './laskin.component.html',
  styleUrls: ['./laskin.component.css']
})
export class LaskinComponent {
      buttons: string[] = [
        '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='
      ];
}


