import { Component } from '@angular/core';
import { Kappale } from '../kappale';
import { LippuService } from '../services/lippu.service';
import { Service } from '../service';

@Component({
  selector: 'app-tentti',
  templateUrl: './tentti.component.html',
  styleUrls: ['./tentti.component.css']
})
export class TenttiComponent {
  isChecked = false;

  lippuHinta = 16;
  opiskelijaHinta = 10;
  elakelaisHinta = 8;
  yhteisHinta = 0;

  
  uusiTilaaja : Service = new Service();
  kappaleet : Array<Kappale> = []; 

  constructor(private lippuService: LippuService ){
    this.lippuService.lippuInfo()
    this.kappaleet = this.lippuService.lippuInfo()
    
    this.uusiTilaaja.firstName
    this.uusiTilaaja.lastName
    this.uusiTilaaja.email
    
  }
  onInputChange(event: any, kappaleMäärät: Kappale){
    kappaleMäärät.setAmount(event.target.value);
  }

  hinta() {
    
  }
  
  tilaus() {
    console.info('Tilaus tehty!')
    console.log('Tilaajan tiedot: ', this.uusiTilaaja)
  }

  alennus(){
    if(this.isChecked == true){
      this.yhteisHinta * 2
    }
    
  }
}
