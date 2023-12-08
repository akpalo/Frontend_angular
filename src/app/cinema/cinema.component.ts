import { Component, OnInit } from '@angular/core';
import { CinemaserviceService } from '../services/cinemaService.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  public cinemaData$: Observable<any>;

  constructor(private cinemaService: CinemaserviceService) {
    this.cinemaData$ = new Observable<any>();
  }

  ngOnInit(): void {
    this.cinemaData$ = this.cinemaService.getData();
  }
    

  
  
  
}
