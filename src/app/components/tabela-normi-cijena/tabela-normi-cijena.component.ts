import { Component, OnInit } from '@angular/core';
import { UnosPodatakaSjecaComponent } from '../unos-podataka-sjeca/unos-podataka-sjeca.component';
import { NormeService } from '../../services/norme.service';



@Component({
  selector: 'app-tabela-normi-cijena',
  templateUrl: './tabela-normi-cijena.component.html',
  styleUrls: ['./tabela-normi-cijena.component.css']
})
export class TabelaNormiCijenaComponent implements OnInit {
  cijenaRadnogDanaSjeca = 89.37;
  cijenaRadnogDanaAnimal = 124.63;
  cijenaRadnogDanaTraktor = 696.26;
  cijenaRadnogDanaIznos = 110.06;
  constructor( private normeSjece: NormeService) { }



  norme = this.normeSjece.podaci;
  cijenaSjeceCet = this.cijenaRadnogDanaSjeca / this.norme.normaCetSjeca;
  cijenaSjeceLis = this.cijenaRadnogDanaSjeca / this.norme.normaLisSjeca;
  cijenaSjece = this.cijenaSjeceCet + this.cijenaSjeceLis;
  cijenaAnimalCet = this.cijenaRadnogDanaAnimal / this.norme.normaCetAnimal;
  cijenaAnimalLis = this.cijenaRadnogDanaAnimal / this.norme.normaLisAnimal;
  neto = this.norme.netoCet + this.norme.netoLis;
   
   

  ngOnInit(): void {
   
  //console.log(this.normeSjece.cijenaSjeceCet)
   
  }

 



}
