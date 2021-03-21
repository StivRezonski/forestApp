import { Component, OnInit } from '@angular/core';
import { UnosPodatakaSjecaComponent } from '../unos-podataka-sjeca/unos-podataka-sjeca.component';
import { NormeService } from '../../services/norme.service';

@Component({
  selector: 'app-unos-podataka-animal',
  templateUrl: './unos-podataka-animal.component.html',
  styleUrls: ['./unos-podataka-animal.component.css']
})
export class UnosPodatakaAnimalComponent implements OnInit {

  constructor(private sjeca: UnosPodatakaSjecaComponent,
              private norme: NormeService ) { }

  ngOnInit(): void {
  }

usloviRadaCet: number;
usloviRadaLis: number;
bodoviCetinari: number;
bodoviLiscari: number;
nagibTerena: number;
ucesceLiscara: number;
gustinaPodmlatka: number;
doznacenaMasa: number;
nadmorskaVisina: number;
udaljenostOdStale: number;
srednjiPrecnikCetinari: number;
srednjiPrecnikLiscari: number;
srednjiPrecnikCetinariBodovi: number;
srednjiPrecnikLiscariBodovi: number;
udaljenostOdStaleBodovi: number;
udaljenostOdCeste: number;
normaCetAnimal: number;
normaLisAnimal: number;
normeAnimalCetinari = this.norme.normeAnimalCetinari;
normeAnimalLiscari = this.norme.normeAnimalLiscari
//sumCetinariNeto: number = this.sjeca.sumCetinariNeto;
//sumLiscariNeto: number = this.sjeca.sumLiscariNeto;
cijenaAnimalCetinari: number;
cijenaAnimalLiscari: number;


dohvatiNagibTerena(event){
  this.nagibTerena = parseInt (event.target.value);
 }
dohvatiUcesceLiscara(event){
  this.ucesceLiscara = parseInt (event.target.value);
 }
dohvatiGustinuPodmlatka(event){
  this.gustinaPodmlatka = event.target.value;
 }
dohvatiDoznacenuMasu(event){
  this.doznacenaMasa = event.target.value;
 }
dohvatiNadmorskuVisinu(event){
  this.nadmorskaVisina = event.target.value;
 }
dohvatiSrednjuUdaljenostOdStale(event){
  this.udaljenostOdStaleBodovi = event.target.value;
 }
 dohvatiSrednjiPrecnikCetinari(event){
  this.srednjiPrecnikCetinariBodovi = event.target.value;
 }
dohvatiSrednjiPrecnikLiscari(event){
  this.srednjiPrecnikLiscariBodovi = event.target.value;
  }
unosUdaljenostOdCeste(event){
  this.udaljenostOdCeste = event.target.value;
  }
izracunajNorme(){
  //let b = this.nagibTerena+this.ucesceLiscara
  //console.log(b)
  this.bodoviCetinari = this.nagibTerena + this.ucesceLiscara+this.gustinaPodmlatka+this.doznacenaMasa+this.nadmorskaVisina+this.udaljenostOdStaleBodovi+this.srednjiPrecnikCetinariBodovi;
  this.bodoviLiscari = this.nagibTerena+this.ucesceLiscara+this.gustinaPodmlatka+this.doznacenaMasa+this.nadmorskaVisina+this.udaljenostOdStaleBodovi+this.srednjiPrecnikLiscariBodovi;
  if(18>this.bodoviCetinari){
    this.usloviRadaCet = 0;
  }else if(this.bodoviCetinari >= 19 && this.bodoviCetinari <= 25){
    this.usloviRadaCet = 1
  }else if(this.bodoviCetinari >= 26 && this.bodoviCetinari <= 32){
    this.usloviRadaCet = 2
  }else if(this.bodoviCetinari >= 33 && this.bodoviCetinari <= 41){
    this.usloviRadaCet = 3
  }else this.usloviRadaCet = 4

  if(18>this.bodoviLiscari){
    this.usloviRadaLis = 0;
  }else if(this.bodoviLiscari >= 19 && this.bodoviLiscari <= 25){
    this.usloviRadaLis = 1
  }else if(this.bodoviLiscari >= 26 && this.bodoviLiscari <= 32){
    this.usloviRadaLis = 2
  }else if(this.bodoviLiscari >= 33 && this.bodoviLiscari <= 41){
    this.usloviRadaLis = 3
  }else this.usloviRadaLis = 4

  this.normaCetAnimal = this.normeAnimalCetinari[this.usloviRadaCet][this.norme.podaci.udaljenostOdCeste];
  this.normaLisAnimal = this.normeAnimalLiscari[this.usloviRadaLis][this.norme.podaci.udaljenostOdCeste];

  //this.cijenaAnimalCetinari = this.cijenaRadnogDanaAnimal / this.normaCetAnimal;
  //this.cijenaAnimalLiscari = this.cijenaRadnogDanaAnimal / this.normaLisAnimal;
}


}
