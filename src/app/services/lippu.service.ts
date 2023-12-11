import { Injectable } from '@angular/core';
import { Kappale } from '../kappale';


@Injectable({
  providedIn: 'root'
})
export class LippuService {

  constructor() { }

  lippuInfo(): any {
    return [new Kappale('Peruslippu:'), new Kappale('Opiskelija:'), new Kappale('Eläkeläinen:')]
  }
}
