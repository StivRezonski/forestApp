import { Component, OnInit } from '@angular/core';
import { SortimentiComponent } from '../sortimenti/sortimenti.component';
import { NormeService } from '../../services/norme.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UnosNormi } from '../../models/unosNormi'

@Component({
  selector: 'app-unos-podataka-sjeca',
  templateUrl: './unos-podataka-sjeca.component.html',
  styleUrls: ['./unos-podataka-sjeca.component.css']
})
export class UnosPodatakaSjecaComponent implements OnInit {
 
  constructor(public sortimenti: SortimentiComponent, private unosNormi: NormeService) {
  }

  ngOnInit(): void {
  }

  //varijable
  /* bonitetCetinari;
  bonitetLiscari;
  usloviRadaCet;
  usloviRadaLis; */
 /*  bodoviCetinari;
  bodoviLiscari; */
  /* nagibTerena;
  gustinaPodmlatka;
  doznacenaMasa;
  nadmorskaVisina;
  udaljenostOdCeste;
  srednjiPrecnikCetinariBodovi;
  srednjiPrecnikLiscariBodovi;
  srednjiPrecnikCetinari;
  srednjiPrecnikLiscari;
  normaCetSjeca;
  normaLisSjeca; */
 
/*   sumCetinariNeto = this.sortimenti.netoCetinari;
  sumLiscariNeto = this.sortimenti.netoLiscari;
  srPr21;
  srPr22;
  srPr41;
  srPr43; */
/*   cijenaSjecaCetinari: number;
  cijenaSjecaLiscari;
  cijenaRadnogDanaSjeca = 89.37;
  cijenaRadnogDanaAnimal = 124.63;
  cijenaRadnogDanaTraktor = 696.26;
  cijenaRadnogDanaIznos = 110.06; */

//varijable
  bodoviCetinariSjeca;
  bodoviLiscariSjeca; 
  srednjiPrecniciCetinari;
  srednjiPrecniciLiscari;
  kljucCet;
  kljucLis;
  srednjiPrecnikCetinari;
  srednjiPrecnikLiscari;
  srednjiPrecnikSjecaCetinariBodovi;
  srednjiPrecnikSjecaLiscariBodovi;
  usloviRadaCetSjeca;
  usloviRadaLisSjeca;
  normaSjeceCetinari;
  normaSjeceLiscari;
  srednjiPrecnikCetinariBodoviAnimal;
  srednjiPrecnikLiscariBodoviAnimal;
  bodoviCetinariAnimal;
  bodoviLiscariAnimal;
  usloviRadaCetAnimal;
  usloviRadaLisAnimal;
  normaCetAnimalTrupci;
  normaCetAnimalTankaOblovina;
  normaLisAnimalTankaOblovina;
  normaLisAnimalTrupci;
  sviPrecnici=[];
  usloviRada=[];

//norme = this.unosNormi.podaci;


unosUslovaRada = new FormGroup({
  nagibSjeca: new FormControl(), 
  gustinaPodmlatkaSjeca: new FormControl(), 
  doznacenaMasaSjeca: new FormControl(),
  nadmorskaVisinaSjecaAnimal: new FormControl(),
  udaljenostOdCesteSjeca: new FormControl(),
  nagibAnimal: new FormControl(),
  ucesceLiscaraAnimal: new FormControl(),
  gustinaPodmlatkaAnimal: new FormControl(),
  doznacenaMasaAnimal: new FormControl(),
  udaljenostOdStale: new FormControl(),
  bonitetCetinari: new FormControl(), 
  bonitetLiscari: new FormControl(), 
  animalDistanca: new FormControl() 
  
}); 

unosPrecnika = new FormGroup({
  
  vrsta: new FormControl(),
  
  precnik: new FormControl('',[Validators.required, Validators.minLength(3)])
});

//Funcija unosa precnika po vrstama
unesiPrecnik(){
  this.sviPrecnici.push(this.unosPrecnika.value);
  this.unosPrecnika.reset();
  console.log(this.unosNormi.ljetoCet[0][1][30]);
  console.log(this.sviPrecnici);
 
} 
//Funkcija prikupljanja podataka potrebnih za izracun normi
potvrdi() {
  this.usloviRada.push(this.unosUslovaRada.value);
  console.log(this.unosUslovaRada.value.nagibAnimal)
  console.log(this.usloviRada);

  let cetVrste = [1,2,3,4];
  let lisVrste = [5,6,7,8];
  //Sveukupna masa cetinara po vrstama
  let mase1 = [1,2];
 //Sveukupna masa liscara po vrstama 
  let mase2 = [1,2];
  //Sveukupna masa cetinara
  let masaCet = mase1.reduce(function (m,n) { return m+n}, 0);
  //Sveukupna masa liscara
  let masaLis = mase2.reduce(function (m,n) { return m+n}, 0);
  //Sveukupna masa pomnozena sa precnikom cetinara
  this.srednjiPrecniciCetinari = this.sviPrecnici.
    filter(k => cetVrste.includes(k.vrsta)).map((a, i) => a.precnik*mase1[i]).
    reduce(function (g,f) {return (g + f)}, 0);
    //Srednji precnik cetinara
    this.srednjiPrecnikCetinari = (this.srednjiPrecniciCetinari / masaCet).toFixed(0);
    console.log(this.srednjiPrecnikCetinari)
  //Sveukupna masa pomnozena sa precnikom liscara 
  this.srednjiPrecniciLiscari = this.sviPrecnici.
    filter(k => lisVrste.includes(k.vrsta)).map((a, i) => a.precnik*mase2[i]).
    reduce(function (g,f) {return (g + f)}, 0);
    //Srednji precnik liscara
    this.srednjiPrecnikLiscari = (this.srednjiPrecniciLiscari / masaLis).toFixed(0);
    console.log(this.srednjiPrecnikLiscari)

    if(this.srednjiPrecnikCetinari == 0){
      this.srednjiPrecnikCetinariBodoviAnimal = "Nema unijetih srednjih precnika za cetinare!"  
    }else if(this.srednjiPrecnikCetinari > 45){
      this.srednjiPrecnikCetinariBodoviAnimal = 4
    }else if( 30 < this.srednjiPrecnikCetinari && this.srednjiPrecnikCetinari < 46 ){
      this.srednjiPrecnikCetinariBodoviAnimal = 6
    }else{
      this.srednjiPrecnikCetinariBodoviAnimal = 10
    }

    if(this.srednjiPrecnikCetinari == 0){
      this.srednjiPrecnikCetinariBodoviAnimal = "Nema unijetih srednjih precnika za liscare!"  
    }else if(this.srednjiPrecnikLiscari > 45){
      this.srednjiPrecnikLiscariBodoviAnimal = 4
    }else if( 30 < this.srednjiPrecnikLiscari && this.srednjiPrecnikLiscari < 46 ){
      this.srednjiPrecnikLiscariBodoviAnimal = 6
    }else{
      this.srednjiPrecnikLiscariBodoviAnimal = 10
    }
  
   //console.log(this.srednjiPrecnikCetinariBodoviAnimal);
   //console.log(this.srednjiPrecnikLiscariBodoviAnimal);
   //console.log(this.srednjiPrecniciCetinari);
   //console.log(this.norme.norme.srednjiPrecnikLiscariBodoviAnimal);
   //console.log( cetVrste); 
   //console.log(this.srednjiPrecniciLiscari);
   //console.log(this.v);
   //console.log(this.r); 

    // Animal norma
    this.bodoviCetinariAnimal = this.unosUslovaRada.value.nagibAnimal + this.unosUslovaRada.value.ucesceLiscaraAnimal
      + this.unosUslovaRada.value.gustinaPodmlatkaAnimal + this.unosUslovaRada.value.doznacenaMasaAnimal
      + this.unosUslovaRada.value.nadmorskaVisinaSjecaAnimal + this.unosUslovaRada.value.udaljenostOdStale
      + this.srednjiPrecnikCetinariBodoviAnimal; 
      //console.log(this.bodoviCetinariAnimal);

    this.bodoviLiscariAnimal = this.unosUslovaRada.value.nagibAnimal + this.unosUslovaRada.value.ucesceLiscaraAnimal
    + this.unosUslovaRada.value.gustinaPodmlatkaAnimal + this.unosUslovaRada.value.doznacenaMasaAnimal
    + this.unosUslovaRada.value.nadmorskaVisinaSjecaAnimal + this.unosUslovaRada.value.udaljenostOdStale
    + this.srednjiPrecnikCetinariBodoviAnimal;
      //console.log(this.norme.srednjiPrecnikCetinariBodoviAnimal);

    if (18 >= this.bodoviCetinariAnimal) {
      this.usloviRadaCetAnimal = 0;
    } else if (this.bodoviCetinariAnimal >= 19 && this.bodoviCetinariAnimal <= 25) {
      this.usloviRadaCetAnimal = 1;
    } else if (this.bodoviCetinariAnimal>= 26 && this.bodoviCetinariAnimal <= 32) {
      this.usloviRadaCetAnimal = 2;
    } else if (this.bodoviCetinariAnimal >= 33 && this.bodoviCetinariAnimal <= 41) {
      this.usloviRadaCetAnimal = 3;
    } else {
      this.usloviRadaCetAnimal = 4;
    }

    if (18 >= this.bodoviLiscariAnimal) {
      this.usloviRadaLisAnimal = 0;
    } else if (this.bodoviLiscariAnimal >= 19 && this.bodoviLiscariAnimal <= 25) {
      this.usloviRadaLisAnimal = 1;
    } else if (this.bodoviLiscariAnimal >= 26 && this.bodoviLiscariAnimal <= 32) {
      this.usloviRadaLisAnimal = 2;
    } else if (this.bodoviLiscariAnimal >= 33 && this.bodoviLiscariAnimal <= 41) {
      this.usloviRadaLisAnimal = 3;
    } else {
      this.usloviRadaLisAnimal = 4;
    }

    this.normaCetAnimalTrupci = this.unosNormi.animalCet[this.usloviRadaCetAnimal][0][this.unosUslovaRada.value.animalDistanca.toString()];
    this.normaCetAnimalTankaOblovina = this.unosNormi.animalCet[this.usloviRadaCetAnimal][1][this.unosUslovaRada.value.animalDistanca.toString()];
    this.normaLisAnimalTrupci = this.unosNormi.animalLis[this.usloviRadaLisAnimal][0][this.unosUslovaRada.value.animalDistanca.toString()];
    this.normaLisAnimalTankaOblovina = this.unosNormi.animalLis[this.usloviRadaLisAnimal][1][this.unosUslovaRada.value.animalDistanca.toString()];
    console.log(this.normaCetAnimalTrupci);
    console.log()
     console.log(this.normaCetAnimalTrupci);
     console.log(this.normaCetAnimalTankaOblovina);
    // console.log(this.norme.podaci.normaLisAnimalTrupci);
    // console.log(this.norme.podaci.normaLisAnimalTankaOblovina);
    //console.log(this.norme.animalCet[this.norme.podaci.usloviRadaCetAnimal.toString()][0][this.norme.podaci.distancaPrivlacenjaAnimal.toString()]);

// Sjeca norma

if(this.srednjiPrecnikCetinari == 0){
  this.srednjiPrecnikCetinariBodoviAnimal = "Nema unijetih srednjih precnika za cetinare!"  
}else if(this.srednjiPrecnikCetinari > 45){
  this.srednjiPrecnikSjecaCetinariBodovi = 3
}else if( 30 < this.srednjiPrecnikCetinari && this.srednjiPrecnikCetinari < 46 ){
  this.srednjiPrecnikSjecaCetinariBodovi = 5
}else{
  this.srednjiPrecnikSjecaCetinariBodovi = 12
}

if(this.srednjiPrecnikCetinari == 0){
  this.srednjiPrecnikSjecaLiscariBodovi = "Nema unijetih srednjih precnika za liscare!"  
}else if(this.srednjiPrecnikLiscari > 45){
  this.srednjiPrecnikSjecaLiscariBodovi = 3
}else if( 30 < this.srednjiPrecnikLiscari && this.srednjiPrecnikLiscari < 46 ){
  this.srednjiPrecnikSjecaLiscariBodovi = 5
}else{
  this.srednjiPrecnikSjecaLiscariBodovi = 12
}

 this.bodoviCetinariSjeca = this.unosUslovaRada.value.nagibSjeca + this.unosUslovaRada.value.gustinaPodmlatkaSjeca
      + this.unosUslovaRada.value.doznacenaMasaSjeca + this.unosUslovaRada.value.nadmorskaVisinaSjecaAnimal
      + this.unosUslovaRada.value.udaljenostOdCesteSjeca + this.srednjiPrecnikSjecaCetinariBodovi;
      console.log(this.bodoviCetinariSjeca);

this.bodoviLiscariSjeca = this.unosUslovaRada.value.nagibSjeca + this.unosUslovaRada.value.gustinaPodmlatkaSjeca
      + this.unosUslovaRada.value.doznacenaMasaSjeca + this.unosUslovaRada.value.nadmorskaVisinaSjecaAnimal
      + this.unosUslovaRada.value.udaljenostOdCesteSjeca + this.srednjiPrecnikSjecaLiscariBodovi;
      console.log(this.bodoviCetinariSjeca);

    //console.log(this.bodoviCetinariSjeca);

    if (18 >= this.bodoviCetinariSjeca) {
      this.usloviRadaCetSjeca = 0;
    } else if (this.bodoviCetinariSjeca >= 19 && this.bodoviCetinariSjeca <= 25) {
      this.usloviRadaCetSjeca = 1;
    } else if (this.bodoviCetinariSjeca >= 26 && this.bodoviCetinariSjeca <= 32) {
      this.usloviRadaCetSjeca = 2;
    } else if (this.bodoviCetinariSjeca >= 33 && this.bodoviCetinariSjeca <= 41) {
      this.usloviRadaCetSjeca = 3;
    } else {
      this.usloviRadaCetSjeca = 4;
    }

    if (18 >= this.bodoviLiscariSjeca) {
      this.usloviRadaLisSjeca = 0;
    } else if (this.bodoviLiscariSjeca >= 19 && this.bodoviLiscariSjeca <= 25) {
      this.usloviRadaLisSjeca = 1;
    } else if (this.bodoviLiscariSjeca >= 26 && this.bodoviLiscariSjeca <= 32) {
      this.usloviRadaLisSjeca = 2;
    } else if (this.bodoviLiscariSjeca >= 33 && this.bodoviLiscariSjeca <= 41) {
      this.usloviRadaLisSjeca = 3;
    } else {
      this.usloviRadaLisSjeca = 4;
    }

    //console.log(this.norme.podaci.usloviRadaCetSjeca);
    //Izracun viseg i nizeg precnika ako precnik nije dijeljiv sa 5
    let a = (Object.keys(this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1])).filter(k => k < this.srednjiPrecnikCetinari).pop();
    let b = (Object.keys(this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1])).filter(k => k > this.srednjiPrecnikCetinari)[0];
    let c = (Object.keys(this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1])).filter(k => k < this.srednjiPrecnikLiscari).pop();
    let d = (Object.keys(this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1])).filter(k => k > this.srednjiPrecnikLiscari)[0];
  
    let x = this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][b];
    let y = this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][a];
    let z = this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][d];
    let q = this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][c];

     if (this.srednjiPrecnikCetinari ! % 5) {
      this.normaSjeceCetinari = ((x - y) / 5) * (this.srednjiPrecnikCetinari - parseInt(a)) + parseFloat(y);
    } else { 
      this.kljucCet = (Object.keys(this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1])).filter(k => k == this.srednjiPrecnikCetinari)[0];
     /*  console.log(this.kljucCet);
      console.log(this.kljucCet.valueOf()); */
      this.normaSjeceCetinari = this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][this.kljucCet];
    }

    if (this.srednjiPrecnikLiscari ! % 5) {
      this.normaSjeceLiscari = ((z - q) / 5) * (this.srednjiPrecnikLiscari - parseInt(c)) + parseFloat(q);
    } else {
      this.kljucLis = (Object.keys(this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1])).filter(k => k == this.srednjiPrecnikLiscari)[0];
      this.normaSjeceLiscari = this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1][this.kljucLis];
    }
/*     console.log("Key za nizi precnik: " + parseInt(a));
    console.log(parseFloat(a));
    console.log(a)
    console.log("Key za visi precnik: " + parseInt(b));
    console.log(y);
    console.log(typeof(y)); */
    
 /*    console.log("Kljuc cetinari: " +this.kljucCet);
    console.log("Tip kljuca: "+ this.kljucCet.valueOf()); */ 
    console.log("Norma sjeca cetinari: "+this.normaSjeceCetinari);
    console.log("Norma sjeca liscari: "+this.normaSjeceLiscari);
    //console.log(this.usloviRadaCetSjeca);
    //this.unosUslovaRada.reset();
  } 
 
}
