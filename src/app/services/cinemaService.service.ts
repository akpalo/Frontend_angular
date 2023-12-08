import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { parseString } from 'xml2js';




@Injectable({
  providedIn: 'root'
})
export class CinemaserviceService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'https://www.finnkino.fi/xml/News/';
  

  

  

  getData() : Observable<any> {
    return this.httpClient.get(this.url, { responseType: 'text'})
     .pipe(map(response => {
      let newsData: any = [];
      parseString(response, {
        trim: true,
        explicitArray: false,
        mergeAttrs: true
      }, function (err: any, result: any) {
        newsData = result.News.NewsArticle;
      })
      return newsData;
     }))
  }




}
