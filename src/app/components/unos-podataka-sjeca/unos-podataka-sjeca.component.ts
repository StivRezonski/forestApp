import { Component, OnInit } from '@angular/core';
import { SortimentiComponent } from '../sortimenti/sortimenti.component';
import { NormeService } from '../../services/norme.service';
//import { Sjeca } from '../../models/sjeca';




@Component({
  selector: 'app-unos-podataka-sjeca',
  templateUrl: './unos-podataka-sjeca.component.html',
  styleUrls: ['./unos-podataka-sjeca.component.css']
})
export class UnosPodatakaSjecaComponent implements OnInit {

//varijable
bodoviCetinariSjeca;
bodoviLiscariSjeca;
kljucCet;
kljucLis;
ucesceLiscara;
udaljenostOdStaleBodovi;
bodoviCetinariAnimal;
bodoviLiscariAnimal;

ljetoCetinari = this.norme.ljetoCet;
ljetoLiscari = this.norme.ljetoLis;

normeAnimalCetinari = this.norme.normeAnimalCetinari;

constructor(public sortimenti: SortimentiComponent, private norme: NormeService) {}
ngOnInit(): void {}




//funcije unosa podataka
dohvatiNagibTerena(event){
  this.norme.podaci.nagibTerena = parseInt (event.target.value);
  //console.log("Nagib terena: " + this.norme.podaci.nagibTerena);
  //console.log(typeof(this.norme.podaci.nagibTerena));
}
dohvatiGustinuPodmlatka(event){
  this.norme.podaci.gustinaPodmlatka = parseInt (event.target.value);
  //console.log("Gustina podmlatka: " + this.norme.podaci.gustinaPodmlatka);
  //console.log(typeof(this.norme.podaci.gustinaPodmlatka));
}
dohvatiDoznacenuMasu(event){
  this.norme.podaci.doznacenaMasa = parseInt (event.target.value);
  //console.log("Doznacena masa: " + this.norme.podaci.doznacenaMasa);
  //console.log(typeof(this.norme.podaci.doznacenaMasa));
}
dohvatiNadmorskuVisinu(event){
  this.norme.podaci.nadmorskaVisina = parseInt (event.target.value);
  //console.log("Nadmorska visina: " + this.norme.podaci.nadmorskaVisina);
  //console.log(typeof(this.norme.podaci.nadmorskaVisina));
}
dohvatiSrednjuUdaljenostOdCeste(event){
  this.norme.podaci.udaljenostOdCeste = parseInt (event.target.value);
  //console.log("Udaljenost od ceste: " + this.norme.podaci.udaljenostOdCeste);
  //console.log(typeof(this.norme.podaci.udaljenostOdCeste));
}
dohvatiUcesceLiscara(event){
  this.norme.podaci.ucesceLiscara = parseInt (event.target.value);
  //console.log("Ucesce liscara: " + this.norme.podaci.ucesceLiscara);
  //console.log(typeof(this.norme.podaci.ucesceLiscara));
}
dohvatiSrednjuUdaljenostOdStale(event){
  this.norme.podaci.udaljenostOdStale = parseInt (event.target.value);
  //console.log("Udaljenost od stale: " + this.norme.podaci.udaljenostOdStale);
  //console.log(typeof(this.norme.podaci.udaljenostOdStale));
}
dohvatiSrednjiPrecnikCetinari(event){
  this.norme.podaci.srednjiPrecnikCetinariBodovi = parseInt (event.target.value);
  //console.log("Sr. precnik cetinari bodovi: " + this.norme.podaci.srednjiPrecnikCetinariBodovi);
  //console.log(typeof(this.norme.podaci.srednjiPrecnikCetinariBodovi));
}
dohvatiSrednjiPrecnikLiscari(event){
  this.norme.podaci.srednjiPrecnikLiscariBodovi = parseInt (event.target.value);
  //console.log("Sr. precnik liscari bodovi: " + this.norme.podaci.srednjiPrecnikLiscariBodovi);
  //console.log(typeof(this.norme.podaci.srednjiPrecnikLiscariBodovi));
}
dohvatiBonitetCetinari(event){
  this.norme.podaci.bonitetCetinari = parseInt (event.target.value);
  //console.log("Bonitet cetinari: " + this.norme.podaci.bonitetCetinari);
  //console.log(typeof(this.norme.podaci.bonitetCetinari));
}
dohvatiBonitetLiscari(event){
   this.norme.podaci.bonitetLiscari = parseInt (event.target.value);
   //console.log("Bonitet liscari: " + this.norme.podaci.bonitetLiscari);
   //console.log(typeof(this.norme.podaci.bonitetLiscari));
}
unosSrednjiPrecnikCetinari(event: any) {
  this.norme.podaci.srednjiPrecnikCetinari = parseInt (event.target.value);
  //console.log("Sr. precnik cetinari: " + this.norme.podaci.srednjiPrecnikCetinari);
  //console.log(typeof(this.norme.podaci.srednjiPrecnikCetinari));  
}
unosSrednjiPrecnikLiscari(event: any) {
  this.norme.podaci.srednjiPrecnikLiscari = parseInt (event.target.value);
  //console.log("Sr. precnik liscari: " + this.norme.podaci.srednjiPrecnikLiscari);
  //console.log(typeof(this.norme.podaci.srednjiPrecnikLiscari));
}
unosUdaljenostOdCeste(event){
  this.norme.podaci.distancaPrivlacenjaAnimal = parseInt (event.target.value);
  //console.log("Distanca animal: " + this.norme.podaci.distancaPrivlacenjaAnimal);
  //console.log(typeof(this.norme.podaci.distancaPrivlacenjaAnimal));
}

izracunajNorme (){ 

  //this.bodoviCetinariAnimal = parseInt (this.nagibTerena + this.ucesceLiscara+this.gustinaPodmlatka+this.doznacenaMasa+this.nadmorskaVisina+this.udaljenostOdStaleBodovi+this.srednjiPrecnikCetinariBodovi);
  //this.bodoviLiscariAnimal = this.norme.podaci.nagibTerena+this.ucesceLiscara+this.gustinaPodmlatka+this.doznacenaMasa+this.nadmorskaVisina+this.udaljenostOdStaleBodovi+this.srednjiPrecnikLiscariBodovi;
  //console.log(typeof (this.bodoviCetinariAnimal))
  //console.log(this.bodoviCetinariAnimal)

  /*if(18>this.bodoviCetinariAnimal){
    this.norme.podaci.usloviRadaCetAnimal = 0;
  }else if(this.bodoviCetinariAnimal >= 19 && this.bodoviCetinariAnimal <= 25){
    this.norme.podaci.usloviRadaCetAnimal = 1
  }else if(this.bodoviCetinariAnimal >= 26 && this.bodoviCetinariAnimal <= 32){
    this.norme.podaci.usloviRadaCetAnimal = 2
  }else if(this.bodoviCetinariAnimal >= 33 && this.bodoviCetinariAnimal <= 41){
    this.norme.podaci.usloviRadaCetAnimal = 3
  }else this.bodoviCetinariAnimal = 4

  if(18>this.bodoviLiscariAnimal){
    this.norme.podaci.usloviRadaLisAnimal = 0;
  }else if(this.bodoviLiscariAnimal >= 19 && this.bodoviLiscariAnimal <= 25){
    this.norme.podaci.usloviRadaLisAnimal = 1
  }else if(this.bodoviLiscariAnimal >= 26 && this.bodoviLiscariAnimal <= 32){
    this.norme.podaci.usloviRadaLisAnimal = 2
  }else if(this.bodoviLiscariAnimal >= 33 && this.bodoviLiscariAnimal <= 41){
    this.norme.podaci.usloviRadaLisAnimal = 3
  }else this.norme.podaci.usloviRadaLisAnimal = 4

  console.log(this.norme.podaci.usloviRadaCetAnimal)

  this.norme.podaci.normaCetAnimal = this.norme.normeAnimalCetinari[this.norme.podaci.usloviRadaCetAnimal][this.norme.podaci.udaljenostOdCeste];
  this.norme.podaci.normaLisAnimal = this.norme.normeAnimalLiscari[this.norme.podaci.usloviRadaLisAnimal][this.norme.podaci.udaljenostOdCeste]; */

//console.log(this.norme.podaci.normaCetAnimal)
//console.log(this.norme.normeAnimalCetinari)
//console.log(this.norme.podaci.usloviRadaCetAnimal)
//console.log(this.norme.podaci.udaljenostOdCeste)

  this.bodoviCetinariSjeca = this.norme.podaci.nagibTerena+this.norme.podaci.gustinaPodmlatka
    +this.norme.podaci.doznacenaMasa+this.norme.podaci.nadmorskaVisina
    +this.norme.podaci.udaljenostOdCeste+this.norme.podaci.srednjiPrecnikCetinariBodovi;

  this.bodoviLiscariSjeca = this.norme.podaci.nagibTerena+this.norme.podaci.gustinaPodmlatka
    +this.norme.podaci.doznacenaMasa+this.norme.podaci.nadmorskaVisina
    +this.norme.podaci.udaljenostOdCeste+this.norme.podaci.srednjiPrecnikLiscariBodovi;

  //console.log(this.bodoviCetinariSjeca);
  //console.log(typeof(this.bodoviCetinariSjeca));

  if(18>this.bodoviCetinariSjeca){
    this.norme.podaci.usloviRadaCetSjeca = 0;
  }else if(this.bodoviCetinariSjeca >= 19 && this.bodoviCetinariSjeca <= 25){
    this.norme.podaci.usloviRadaCetSjeca = 1;
  }else if(this.bodoviCetinariSjeca >= 26 && this.bodoviCetinariSjeca <= 32){
    this.norme.podaci.usloviRadaCetSjeca = 2;
  }else if(this.bodoviCetinariSjeca >= 33 && this.bodoviCetinariSjeca <= 41){
    this.norme.podaci.usloviRadaCetSjeca = 3;
  }else this.norme.podaci.usloviRadaCetSjeca = 4;

  if(18>this.bodoviLiscariSjeca){
    this.norme.podaci.usloviRadaLisSjeca = 0;
  }else if(this.bodoviLiscariSjeca >= 19 && this.bodoviLiscariSjeca <= 25){
    this.norme.podaci.usloviRadaLisSjeca = 1;
  }else if(this.bodoviLiscariSjeca >= 26 && this.bodoviLiscariSjeca <= 32){
    this.norme.podaci.usloviRadaLisSjeca = 2;
  }else if(this.bodoviLiscariSjeca >= 33 && this.bodoviLiscariSjeca <= 41){
    this.norme.podaci.usloviRadaLisSjeca = 3;
  }else this.norme.podaci.usloviRadaLisSjeca = 4;

  //console.log(this.norme.podaci.usloviRadaCetSjeca);
  //console.log(typeof (this.norme.podaci.usloviRadaCetSjeca));

// const ljetoUslovi1Cet = [{25:"1.0",30:"3.9",35:"5.79",40:"6.89",45:"8.03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"2",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"3",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"4",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"5",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];


//   const ljetoUslovi2Cet = [{25:"6",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"7",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"8",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"9",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"10",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];


//   const ljetoUslovi3Cet = [{25:"11",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"12",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"13",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"14",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"15",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

//   const ljetoUslovi4Cet = [{25:"16",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"17",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"18",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"19",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"20",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

//   const ljetoUslovi5Cet = [{25:"21",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"22",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"23",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"24",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//                         {25:"25",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

// const ljetoCet = [ljetoUslovi1Cet, ljetoUslovi2Cet, ljetoUslovi3Cet, ljetoUslovi4Cet, ljetoUslovi5Cet];

// const ljetoUslovi1Lis = [{25:"1.0",30:"3.9",35:"5.79",40:"6.89",45:"8.03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"2",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"3",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"4",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"5",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];


// const ljetoUslovi2Lis = [{25:"6",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"7",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"8",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"9",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"10",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];


// const ljetoUslovi3Lis = [{25:"11",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"12",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"13",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"14",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"15",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

// const ljetoUslovi4Lis = [{25:"16",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"17",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"18",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"19",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"20",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

// const ljetoUslovi5Lis = [{25:"21",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"22",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"23",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"24",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
//   {25:"25",30:"3.3",35:"5.79",40:"6.89",45:"8.03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

// const ljetoLis = [ljetoUslovi1Lis, ljetoUslovi2Lis, ljetoUslovi3Lis, ljetoUslovi4Lis, ljetoUslovi5Lis];
//ok
  let a = (Object.keys (this.ljetoCetinari[this.norme.podaci.usloviRadaCetSjeca][this.norme.podaci.bonitetCetinari-1])).filter( k=> k<this.norme.podaci.srednjiPrecnikCetinari.toString()).pop();
  let b = (Object.keys (this.ljetoCetinari[this.norme.podaci.usloviRadaCetSjeca][this.norme.podaci.bonitetCetinari-1])).filter( k=> k>this.norme.podaci.srednjiPrecnikCetinari.toString())[0];
  let c = (Object.keys (this.ljetoLiscari[this.norme.podaci.usloviRadaLisSjeca][this.norme.podaci.bonitetLiscari-1])).filter( k=> k<this.norme.podaci.srednjiPrecnikLiscari.toString()).pop();
  let d = (Object.keys (this.ljetoLiscari[this.norme.podaci.usloviRadaLisSjeca][this.norme.podaci.bonitetLiscari-1])).filter( k=> k>this.norme.podaci.srednjiPrecnikLiscari.toString())[0];
  let x = this.ljetoCetinari[this.norme.podaci.usloviRadaCetSjeca][this.norme.podaci.bonitetCetinari-1][b];
  let y = this.ljetoCetinari[this.norme.podaci.usloviRadaCetSjeca][this.norme.podaci.bonitetCetinari-1][a];
  let z = this.ljetoLiscari[this.norme.podaci.usloviRadaLisSjeca][this.norme.podaci.bonitetLiscari-1][d];
  let q = this.ljetoLiscari[this.norme.podaci.usloviRadaLisSjeca][this.norme.podaci.bonitetLiscari-1][c];

  if(this.norme.podaci.srednjiPrecnikCetinari !%5){
    this.norme.podaci.normaCetSjeca = ((x - y) / 5) * (this.norme.podaci.srednjiPrecnikCetinari - parseInt (a)) + parseFloat (y);
  }else {
    this.kljucCet = (Object.keys (this.ljetoCetinari[this.norme.podaci.usloviRadaCetSjeca][this.norme.podaci.bonitetCetinari-1])).filter( k=> k==this.norme.podaci.srednjiPrecnikCetinari.toString());
    this.norme.podaci.normaCetSjeca = this.ljetoCetinari[this.norme.podaci.usloviRadaCetSjeca][this.norme.podaci.bonitetCetinari-1][this.kljucCet]
  }

  if(this.norme.podaci.srednjiPrecnikLiscari !%5){
    this.norme.podaci.normaLisSjeca = ((z - q) / 5) * (this.norme.podaci.srednjiPrecnikCetinari - parseInt (c)) + parseFloat (q);
  }else {
    this.kljucLis = (Object.keys (this.ljetoLiscari[this.norme.podaci.usloviRadaLisSjeca][this.norme.podaci.bonitetLiscari-1])).filter( k=> k==this.norme.podaci.srednjiPrecnikLiscari.toString());
    this.norme.podaci.normaLisSjeca = this.ljetoLiscari[this.norme.podaci.usloviRadaLisSjeca][this.norme.podaci.bonitetLiscari-1][this.kljucLis]
  }



  //this.cijenaSjecaCetinari = this.cijenaRadnogDanaSjeca / parseFloat (this.norme.podaci.normaCetSjeca.toString());
  //this.cijenaSjecaLiscari = this.cijenaRadnogDanaSjeca / parseFloat (this.norme.podaci.normaLisSjeca.toString());

  
  //else{
    //this.i = [ljetoCet[this.usloviRadaCet][this.bonitetCetinari-1]].indexOf(this.srednjiPrecnikCetinari.toString());
    //this.normaCetSjeca = ljetoLis[this.usloviRadaCet][this.bonitetCetinari][this.i.toString()];
    //this.l = [ljetoLis[this.usloviRadaLis][this.bonitetLiscari-1]].indexOf(this.srednjiPrecnikLiscari.toString());
    //this.normaLisSjeca = ljetoLis[this.usloviRadaLis][this.bonitetLiscari-1][this.l.toString()];
  //}


 




  //console.log(a)
  //console.log(b);
  //console.log(x);
  //console.log(y);
  //console.log( typeof ljeto[this.usloviRada][this.bonitetCetinari])
  //console.log( a.indexOf(this.srednjiPrecnikCetinari.toString()) )
  //console.log( ljeto[this.usloviRada][this.bonitetCetinari])
  //console.log( typeof this.norma)
 //console.log(this.i);
 //console.log(this.l)
 //console.log(this.norme.podaci)
 //console.log(this.normaLisSjeca);
 //console.log( typeof (this.normaLisSjeca));

}

}
