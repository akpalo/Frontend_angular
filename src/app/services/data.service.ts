import { Injectable } from '@angular/core';
import { Question } from '../question';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getQuestions(): any {
    return [new Question('Mitä pidit kurssista - Tietokannat?'), new Question('Mitä pidit kurssista - Prosessilouhinta?'), new Question('Mitä pidit kurssista - Svenska i arbetslivet?')]
  }
}
