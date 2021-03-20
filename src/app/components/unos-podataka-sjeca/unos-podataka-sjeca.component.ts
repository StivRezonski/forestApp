import { Component, OnInit } from '@angular/core';
import { SortimentiComponent } from '../sortimenti/sortimenti.component'



@Component({
  selector: 'app-unos-podataka-sjeca',
  templateUrl: './unos-podataka-sjeca.component.html',
  styleUrls: ['./unos-podataka-sjeca.component.css']
})
export class UnosPodatakaSjecaComponent implements OnInit {
  constructor(private sortimenti: SortimentiComponent) { }
  ngOnInit(): void {}

  //varijable
bonitetCetinari;
bonitetLiscari;
usloviRadaCet;
usloviRadaLis;
bodoviCetinari;
bodoviLiscari;
nagibTerena;
gustinaPodmlatka;
doznacenaMasa;
nadmorskaVisina;
udaljenostOdCeste;
srednjiPrecnikCetinariBodovi;
srednjiPrecnikLiscariBodovi;
srednjiPrecnikCetinari;
srednjiPrecnikLiscari;
normaCetSjeca;
normaLisSjeca;
p;
j;
sumCetinariNeto = this.sortimenti.netoJelaSmrca;
sumLiscariNeto = this.sortimenti.netoLiscari;
srPr21;
srPr22;
srPr41;
srPr43;
cijenaSjecaCetinari: number;
cijenaSjecaLiscari;
cijenaRadnogDanaSjeca = 89.37;
cijenaRadnogDanaAnimal = 124.63;
cijenaRadnogDanaTraktor = 696.26;
cijenaRadnogDanaIznos = 110.06;



unosSrednjiPrecnikCetinari(event: any) {
  this.srednjiPrecnikCetinari = parseInt (event.target.value);
}
unosSrednjiPrecnikLiscari(event: any) {
  this.srednjiPrecnikLiscari = parseInt (event.target.value);
}
dohvatiNagibTerena(event){
  this.nagibTerena = event.target.value;
  console.log(this.nagibTerena)
 }
dohvatiGustinuPodmlatka(event){
  this.gustinaPodmlatka = event.target.value;
  console.log(this.gustinaPodmlatka)
 }
dohvatiDoznacenuMasu(event){
  this.doznacenaMasa = event.target.value;
  console.log(this.doznacenaMasa)
 }
dohvatiNadmorskuVisinu(event){
  this.nadmorskaVisina = event.target.value;
  console.log(this.nadmorskaVisina)
 }
 dohvatiSrednjuUdaljenostOdCeste(event){
  this.udaljenostOdCeste = event.target.value;
  console.log(this.udaljenostOdCeste)
 }
dohvatiSrednjiPrecnikCetinari(event){
   this.srednjiPrecnikCetinariBodovi = event.target.value;
   console.log(this.srednjiPrecnikCetinariBodovi)
  }
dohvatiSrednjiPrecnikLiscari(event){
    this.srednjiPrecnikLiscariBodovi = event.target.value;
    console.log(this.srednjiPrecnikLiscariBodovi)
   }
dohvatiBonitetCetinari(event){
    this.bonitetCetinari = parseInt (event.target.value);
    console.log(this.bonitetCetinari)
   }
dohvatiBonitetLiscari(event){
    this.bonitetLiscari = parseInt (event.target.value);
    console.log(this.bonitetLiscari)
   }
izracunajNorme (){
  this.bodoviCetinari = parseInt(this.nagibTerena)+parseInt(this.gustinaPodmlatka)+parseInt(this.doznacenaMasa)+parseInt(this.nadmorskaVisina)+parseInt(this.udaljenostOdCeste)+parseInt(this.srednjiPrecnikCetinariBodovi);
  this.bodoviLiscari = parseInt(this.nagibTerena)+parseInt(this.gustinaPodmlatka)+parseInt(this.doznacenaMasa)+parseInt(this.nadmorskaVisina)+parseInt(this.udaljenostOdCeste)+parseInt(this.srednjiPrecnikLiscariBodovi);

  if(18>this.bodoviCetinari){
    this.usloviRadaCet = 0;
    console.log(this.usloviRadaCet)
  }else if(this.bodoviCetinari >= 19 && this.bodoviCetinari <= 25){
    this.usloviRadaCet = 1
    console.log(this.usloviRadaCet)
  }else if(this.bodoviCetinari >= 26 && this.bodoviCetinari <= 32){
    this.usloviRadaCet = 2
    console.log(this.usloviRadaCet)
  }else if(this.bodoviCetinari >= 33 && this.bodoviCetinari <= 41){
    this.usloviRadaCet = 3
    console.log(this.usloviRadaCet)
  }else this.usloviRadaCet = 4

  if(18>this.bodoviLiscari){
    this.usloviRadaLis = 0;
    console.log(this.usloviRadaLis)
  }else if(this.bodoviLiscari >= 19 && this.bodoviLiscari <= 25){
    this.usloviRadaLis = 1
    console.log(this.usloviRadaLis)
  }else if(this.bodoviLiscari >= 26 && this.bodoviLiscari <= 32){
    this.usloviRadaLis = 2
    console.log(this.usloviRadaLis)
  }else if(this.bodoviLiscari >= 33 && this.bodoviLiscari <= 41){
    this.usloviRadaLis = 3
    console.log(this.usloviRadaLis)
  }else this.usloviRadaLis = 4


  const ljetoUslovi1Cet = [{25:"1.0",30:"3.9",35:"5.79",40:"6.89",45:"8.03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"2",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"3",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"4",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"5",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];


  const ljetoUslovi2Cet = [{25:"6",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"7",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"8",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"9",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"10",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];


  const ljetoUslovi3Cet = [{25:"11",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"12",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"13",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"14",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"15",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

  const ljetoUslovi4Cet = [{25:"16",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"17",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"18",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"19",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"20",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

  const ljetoUslovi5Cet = [{25:"21",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"22",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"23",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"24",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
                        {25:"25",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

  const ljetoCet = [ljetoUslovi1Cet, ljetoUslovi2Cet, ljetoUslovi3Cet, ljetoUslovi4Cet, ljetoUslovi5Cet];

  const ljetoUslovi1Lis = [{25:"1.0",30:"3.9",35:"5.79",40:"6.89",45:"8.03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"2",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"3",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"4",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"5",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];


const ljetoUslovi2Lis = [{25:"6",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"7",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"8",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"9",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"10",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];


const ljetoUslovi3Lis = [{25:"11",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"12",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"13",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"14",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"15",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

const ljetoUslovi4Lis = [{25:"16",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"17",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"18",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"19",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"20",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

const ljetoUslovi5Lis = [{25:"21",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"22",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"23",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"24",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"25",30:"3.3",35:"5.79",40:"6.89",45:"8.03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

const ljetoLis = [ljetoUslovi1Lis, ljetoUslovi2Lis, ljetoUslovi3Lis, ljetoUslovi4Lis, ljetoUslovi5Lis];

  let a = (Object.keys (ljetoCet[this.usloviRadaCet][this.bonitetCetinari-1])).filter( k=> k<this.srednjiPrecnikCetinari).pop();
  let b = (Object.keys (ljetoCet[this.usloviRadaCet][this.bonitetCetinari-1])).filter( k=> k>this.srednjiPrecnikCetinari)[0];
  let c = (Object.keys (ljetoLis[this.usloviRadaLis][this.bonitetLiscari-1])).filter( k=> k<this.srednjiPrecnikLiscari).pop();
  let d = (Object.keys (ljetoLis[this.usloviRadaLis][this.bonitetLiscari-1])).filter( k=> k>this.srednjiPrecnikLiscari)[0];
  let x = ljetoCet[this.usloviRadaCet][this.bonitetCetinari-1][b];
  let y = ljetoCet[this.usloviRadaCet][this.bonitetCetinari-1][a];
  let z = ljetoLis[this.usloviRadaLis][this.bonitetLiscari-1][d];
  let q = ljetoLis[this.usloviRadaLis][this.bonitetLiscari-1][c];

  if(this.srednjiPrecnikCetinari !%5){
    this.normaCetSjeca = ((x - y) / 5) * (this.srednjiPrecnikCetinari - parseInt (a)) + parseFloat (y);
  }else {
    this.j = (Object.keys (ljetoCet[this.usloviRadaCet][this.bonitetCetinari-1])).filter( k=> k==this.srednjiPrecnikCetinari);
    this.normaCetSjeca = ljetoCet[this.usloviRadaCet][this.bonitetCetinari-1][this.j]
  }

  if(this.srednjiPrecnikLiscari !%5){
    this.normaLisSjeca = ((z - q) / 5) * (this.srednjiPrecnikLiscari - parseInt (c)) + parseFloat (q);
  }else {
    this.p = (Object.keys (ljetoLis[this.usloviRadaLis][this.bonitetLiscari-1])).filter( k=> k==this.srednjiPrecnikLiscari);
    this.normaLisSjeca = ljetoLis[this.usloviRadaLis][this.bonitetLiscari-1][this.p]
  }

  this.cijenaSjecaCetinari = this.cijenaRadnogDanaSjeca / parseFloat (this.normaCetSjeca);
  this.cijenaSjecaLiscari = this.cijenaRadnogDanaSjeca / parseFloat (this.normaLisSjeca);

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
 console.log(this.cijenaSjecaCetinari.toFixed(2));
 //console.log(this.normaLisSjeca);
 //console.log( typeof (this.normaLisSjeca));

}

}
