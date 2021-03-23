import { Component, OnInit } from '@angular/core';
import { UnosPodatakaSjecaComponent } from '../unos-podataka-sjeca/unos-podataka-sjeca.component';
import { NormeService } from '../../services/norme.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-tabela-normi-cijena',
  templateUrl: './tabela-normi-cijena.component.html',
  styleUrls: ['./tabela-normi-cijena.component.css']
})
export class TabelaNormiCijenaComponent implements OnInit {

  podaci = this.norme.podaci;
  
  constructor( private norme: NormeService) { }
  
 cijenaSjeceCetinari = this.norme.cijenaRadnogDanaSjeca / this.podaci.normaCetSjeca;
 cijenaSjeceLiscari = this.norme.cijenaRadnogDanaSjeca / this.podaci.normaLisSjeca;




  
  // cijenaSjeceCet = this.cijenaRadnogDanaSjeca / this.norme.normaCetSjeca;
  // cijenaSjeceLis = this.cijenaRadnogDanaSjeca / this.norme.normaLisSjeca;
  // cijenaSjece = this.cijenaSjeceCet + this.cijenaSjeceLis;
  // cijenaAnimalCet = this.cijenaRadnogDanaAnimal / this.norme.normaCetAnimal;
  // cijenaAnimalLis = this.cijenaRadnogDanaAnimal / this.norme.normaLisAnimal;
  // neto = this.norme.netoCet + this.norme.netoLis;
   
   

  ngOnInit(): void {
   
  //console.log(this.normeSjece.cijenaSjeceCet)
   
  }

 



}
