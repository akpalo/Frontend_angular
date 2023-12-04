import { Component } from '@angular/core';
import { CinemaserviceService } from '../services/cinemaService.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent {

  public cinemaData$: Observable<any>

  constructor(public cinemaData$ : CinemaserviceService) {
    this.cinemaData$ = this.cinemaserviceService.getData();
  }

  
  
  
}
