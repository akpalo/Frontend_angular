import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { parseString } from 'xml2js';




@Injectable({
  providedIn: 'root'
})
export class CinemaserviceService {
  url = 'https://www.finnkino.fi/xml/News/';
  newsCount: number = 0;

  testData = [
    {
    'Title':'Ensi-ilta: PalmSprings',
    'PublishDate':'2020-11-24T00:00:00',
    'HTMLLead':'',
    'ImageURL':'http://media.finnkino.fi/1012/news/6124/PalmSprings_550.jpg'
    },
    {
    'Title':'Ensi-ilta: Karjamäenjoulu',
    'PublishDate':'2020-11-24T00:00:00',
    'HTMLLead':'',
    'ImageURL':'http://media.finnkino.fi/1012/news/6123/JulPaKutoppen_550.jpg'
    }
  ];

  constructor(private httpClient: HttpClient) { }

  getData() : Observable<any> {
    let testData: any;
    return testData;
  }




}
