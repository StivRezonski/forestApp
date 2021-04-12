import { Component, OnInit } from '@angular/core';
//import { TrupciService } from "../../services/trupci.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NormeService } from '../../services/norme.service';


@Component({
  selector: 'app-unos-podataka-sjeca',
  templateUrl: './unos-podataka-sjeca.component.html',
  styleUrls: ['./unos-podataka-sjeca.component.css']
})

export class UnosPodatakaSjecaComponent implements OnInit {
  
  constructor(/*public trupci: TrupciService*/private unosNormi: NormeService ) {
    
  }

  ngOnInit(): void {
    
  }

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
      gustinaPodmlatkaAnimal;
      doznacenaMasaAnimal;
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
      usloviRada = [];
      podaciZaIzracunCijene=this.unosNormi.podaciZaIzracunCijene=[];
      usloviCetAnimal;
      usloviLisAnimal;
      usloviCetSjeca;
      usloviLisSjeca;

//Forma uslova rada
unosUslovaRada = new FormGroup({

      nagibSjeca: new FormControl(), 
      gustinaPodmlatkaSjeca: new FormControl(), 
      doznacenaMasaSjeca: new FormControl(),
      nadmorskaVisinaSjecaAnimal: new FormControl(),
      udaljenostOdCesteSjeca: new FormControl(),
      nagibAnimal: new FormControl(),
      saKorom: new FormControl(),
      ucesceLiscaraAnimal: new FormControl(),
      udaljenostOdStale: new FormControl(),
      bonitetCetinari: new FormControl(), 
      bonitetLiscari: new FormControl(), 
      animalDistanca: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(4)])   
});

//Forma unosa precnika

unosPrecnika = new FormGroup({
  
  vrsta: new FormControl(),
  precnik: new FormControl('',[Validators.required, 
                              Validators.minLength(2),
                              Validators.maxLength(2)])
});


//Funcija unosa precnika po vrstama
unesiPrecnik(){
  this.sviPrecnici.push(this.unosPrecnika.value);
  this.unosPrecnika.reset();
  console.log(this.sviPrecnici); 
} 
//Funkcija prikupljanja podataka potrebnih za izracun normi
potvrdi() {
  let uslovi = this.unosUslovaRada.value;
  this.usloviRada.push(this.unosUslovaRada.value);
  console.log(this.usloviRada);
  //this.unosUslovaRada.reset();
  
//Sortiranje niza sa precnicima od manjeg ka većem 
//po vrstama iz select boxa-odabir vrste
  this.sviPrecnici.sort((a,b) => a.vrsta - b.vrsta);
  let cetVrste = [1,2,3,4];
  let lisVrste = [5,6,7,8];

//Sveukupna masa cetinara po vrstama čekam sa sortimenata
  let mase1 = [1,2]; //let mase1 = this.normaCetAnimalTrupci.sveukupnaCet;

//Sveukupna masa liscara po vrstama (čekam sa sortimenata)
  let mase2 = [1,2]; //let mase2 = this.normaCetAnimalTrupci.sveukupnaLis;

//Sveukupna masa cetinara
  let masaCet = mase1.reduce(function (m,n) { return m+n}, 0);

//Sveukupna masa liscara
  let masaLis = mase2.reduce(function (m,n) { return m+n}, 0);


 // Animal norma
if(this.unosUslovaRada.value.gustinaPodmlatkaSjeca == 1){
  this.gustinaPodmlatkaAnimal = 2
}else if (this.unosUslovaRada.value.gustinaPodmlatkaSjeca == 4){
  this.gustinaPodmlatkaAnimal = 4
}else {this.gustinaPodmlatkaAnimal = 9}

 if(this.unosUslovaRada.value.doznacenaMasaSjeca == 4){
  this.doznacenaMasaAnimal = 1
}else if (this.unosUslovaRada.value.doznacenaMasaSjeca == 6){
  this.doznacenaMasaAnimal = 3
}else {this.doznacenaMasaAnimal = 6}

//Zbir sveukupne masa pomnozena sa precnikom cetinara

  this.srednjiPrecniciCetinari = this.sviPrecnici.
    filter(k => cetVrste.includes(k.vrsta)).map((a, i) => a.precnik*mase1[i]).
    reduce(function (g,f) {return (g + f)}, 0);

   
  if(this.srednjiPrecniciCetinari !== 0){
      //Srednji precnik cetinara
      this.srednjiPrecnikCetinari = (this.srednjiPrecniciCetinari / masaCet).toFixed(0);

  if(this.srednjiPrecnikCetinari > 45){
      this.srednjiPrecnikCetinariBodoviAnimal = 4
  }else if( 30 < this.srednjiPrecnikCetinari && this.srednjiPrecnikCetinari < 46 ){
      this.srednjiPrecnikCetinariBodoviAnimal = 6
  }else{
      this.srednjiPrecnikCetinariBodoviAnimal = 10
  }


  this.bodoviCetinariAnimal = this.unosUslovaRada.value.nagibAnimal + this.unosUslovaRada.value.ucesceLiscaraAnimal
    + this.gustinaPodmlatkaAnimal + this.doznacenaMasaAnimal
    + this.unosUslovaRada.value.nadmorskaVisinaSjecaAnimal + this.unosUslovaRada.value.udaljenostOdStale
    + this.srednjiPrecnikCetinariBodoviAnimal;

    if (18 >= this.bodoviCetinariAnimal) {
      this.usloviRadaCetAnimal = 0;
      this.usloviCetAnimal = "1"
    } else if (this.bodoviCetinariAnimal >= 19 && this.bodoviCetinariAnimal <= 25) {
      this.usloviRadaCetAnimal = 1;
      this.usloviCetAnimal = "1/2"
    } else if (this.bodoviCetinariAnimal >= 26 && this.bodoviCetinariAnimal <= 32) {
      this.usloviRadaCetAnimal = 2;
      this.usloviCetAnimal = "2"
    } else if (this.bodoviCetinariAnimal >= 33 && this.bodoviCetinariAnimal <= 41) {
      this.usloviRadaCetAnimal = 3;
      this.usloviCetAnimal = "2/3"
    } else {
      this.usloviRadaCetAnimal = 4;
      this.usloviCetAnimal = "3"
    }  

  if(this.unosUslovaRada.get('saKorom').value == true){
    this.normaCetAnimalTrupci = (this.unosNormi.animalCet[this.usloviRadaCetAnimal][0][this.unosUslovaRada.value.animalDistanca.toString()])*0.8;
    this.normaCetAnimalTankaOblovina = (this.unosNormi.animalCet[this.usloviRadaCetAnimal][1][this.unosUslovaRada.value.animalDistanca.toString()])*0.8; 
  }else{
    this.normaCetAnimalTrupci = this.unosNormi.animalCet[this.usloviRadaCetAnimal][0][this.unosUslovaRada.value.animalDistanca.toString()];
    this.normaCetAnimalTankaOblovina = this.unosNormi.animalCet[this.usloviRadaCetAnimal][1][this.unosUslovaRada.value.animalDistanca.toString()];
  }


}else {
  this.srednjiPrecnikCetinari = 0;
  this.bodoviCetinariAnimal = 0
  this.srednjiPrecnikCetinariBodoviAnimal = "Nema unijetih srednjih precnika za cetinare!"
}

  //Zbir sveukupne masa pomnozena sa precnikom liscara 
  this.srednjiPrecniciLiscari = this.sviPrecnici.
    filter(k => lisVrste.includes(k.vrsta)).map((a, i) => a.precnik*mase2[i]).
    reduce(function (g,f) {return (g + f)}, 0);

  
  if(this.srednjiPrecniciLiscari !==0){
    //Srednji precnik lišćara
    this.srednjiPrecnikLiscari = (this.srednjiPrecniciLiscari / masaLis).toFixed(0);

  if(this.srednjiPrecnikLiscari > 45){
    this.srednjiPrecnikLiscariBodoviAnimal = 4
  }else if( 30 < this.srednjiPrecnikLiscari && this.srednjiPrecnikLiscari < 46 ){
    this.srednjiPrecnikLiscariBodoviAnimal = 6
  }else{
    this.srednjiPrecnikLiscariBodoviAnimal = 10
  }

  
  this.bodoviLiscariAnimal = this.unosUslovaRada.value.nagibAnimal + this.unosUslovaRada.value.ucesceLiscaraAnimal
    + this.gustinaPodmlatkaAnimal + this.doznacenaMasaAnimal
    + this.unosUslovaRada.value.nadmorskaVisinaSjecaAnimal + this.unosUslovaRada.value.udaljenostOdStale
    + this.srednjiPrecnikLiscariBodoviAnimal;

    if(18 >= this.bodoviLiscariAnimal) {
      this.usloviRadaLisAnimal = 0;
      this.usloviLisAnimal = "1"
    }else if(this.bodoviLiscariAnimal >= 19 && this.bodoviLiscariAnimal <= 25) {
      this.usloviRadaLisAnimal = 1;
      this.usloviLisAnimal = "1/2"
    }else if(this.bodoviLiscariAnimal >= 26 && this.bodoviLiscariAnimal <= 32) {
      this.usloviRadaLisAnimal = 2;
      this.usloviLisAnimal = "2"
    }else if(this.bodoviLiscariAnimal >= 33 && this.bodoviLiscariAnimal <= 41) {
      this.usloviRadaLisAnimal = 3;
      this.usloviLisAnimal = "2/3"
    }else{
      this.usloviRadaLisAnimal = 4;
      this.usloviLisAnimal = "3"
    }

  this.normaLisAnimalTrupci = this.unosNormi.animalLis[this.usloviRadaLisAnimal][0][this.unosUslovaRada.value.animalDistanca.toString()];
  this.normaLisAnimalTankaOblovina = this.unosNormi.animalLis[this.usloviRadaLisAnimal][1][this.unosUslovaRada.value.animalDistanca.toString()];

  }else{
    this.srednjiPrecnikLiscari = 0;
    this.bodoviLiscariAnimal = 0
    this.srednjiPrecnikLiscariBodoviAnimal = "Nema unijetih srednjih precnika za liscare!"
  }
  
// Sjeca norma

  if(this.srednjiPrecniciCetinari !==0){

  if(this.srednjiPrecnikCetinari > 45){
      this.srednjiPrecnikSjecaCetinariBodovi = 3
  }else if( 30 < this.srednjiPrecnikCetinari && this.srednjiPrecnikCetinari < 46 ){
      this.srednjiPrecnikSjecaCetinariBodovi = 5
  }else{
      this.srednjiPrecnikSjecaCetinariBodovi = 12
  }

  this.bodoviCetinariSjeca = this.unosUslovaRada.value.nagibSjeca + this.unosUslovaRada.value.gustinaPodmlatkaSjeca
    + this.unosUslovaRada.value.doznacenaMasaSjeca + this.unosUslovaRada.value.nadmorskaVisinaSjecaAnimal
    + this.unosUslovaRada.value.udaljenostOdCesteSjeca + this.srednjiPrecnikSjecaCetinariBodovi;

  if(18 >= this.bodoviCetinariSjeca) {
      this.usloviRadaCetSjeca = 0;
      this.usloviCetSjeca = "1"
  }else if(this.bodoviCetinariSjeca >= 19 && this.bodoviCetinariSjeca <= 25) {
      this.usloviRadaCetSjeca = 1;
      this.usloviCetSjeca = "1/2"
  }else if(this.bodoviCetinariSjeca >= 26 && this.bodoviCetinariSjeca <= 32) {
      this.usloviRadaCetSjeca = 2;
      this.usloviCetSjeca = "2"
  }else if(this.bodoviCetinariSjeca >= 33 && this.bodoviCetinariSjeca <= 41) {
      this.usloviRadaCetSjeca = 3;
      this.usloviCetSjeca = "2/3"
  }else{
      this.usloviRadaCetSjeca = 4;
      this.usloviCetSjeca = "3"
  }

      let a = (Object.keys(this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1])).filter(k => k < this.srednjiPrecnikCetinari).pop();
      let b = (Object.keys(this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1])).filter(k => k > this.srednjiPrecnikCetinari)[0];
      let x = this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][b];
      let y = this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][a];

  if(this.srednjiPrecnikCetinari ! % 5) {
      this.normaSjeceCetinari = (((x - y) / 5) * (this.srednjiPrecnikCetinari - parseInt(a))+
                                parseFloat(y)).toFixed(2);
  }else{this.kljucCet = (Object.keys(this.unosNormi.ljetoCet[this.usloviRadaCetSjeca]
        [this.unosUslovaRada.value.bonitetCetinari - 1])).
        filter(k => k == this.srednjiPrecnikCetinari)[0];

        this.normaSjeceCetinari = this.unosNormi.ljetoCet[this.usloviRadaCetSjeca]
              [this.unosUslovaRada.value.bonitetCetinari - 1][this.kljucCet];
  }
  }else{
      this.bodoviCetinariSjeca = 0
      this.srednjiPrecnikSjecaCetinariBodovi = "Nema unijetih srednjih precnika za cetinare!"
      this.unosUslovaRada.get('bonitetCetinari').patchValue('0')
      this.normaSjeceCetinari = 0
  }

  if(this.srednjiPrecniciLiscari !==0){

  if(this.srednjiPrecnikLiscari > 45){
    this.srednjiPrecnikSjecaLiscariBodovi = 3
  }else if( 30 < this.srednjiPrecnikLiscari && this.srednjiPrecnikLiscari < 46 ){
    this.srednjiPrecnikSjecaLiscariBodovi = 5
  }else{
    this.srednjiPrecnikSjecaLiscariBodovi = 12
  }

  this.bodoviLiscariSjeca = this.unosUslovaRada.value.nagibSjeca + this.unosUslovaRada.value.gustinaPodmlatkaSjeca
    + this.unosUslovaRada.value.doznacenaMasaSjeca + this.unosUslovaRada.value.nadmorskaVisinaSjecaAnimal
    + this.unosUslovaRada.value.udaljenostOdCesteSjeca + this.srednjiPrecnikSjecaLiscariBodovi;

  if(18 >= this.bodoviLiscariSjeca){
    this.usloviRadaLisSjeca = 0;
    this.usloviLisSjeca = "1"
  }else if(this.bodoviLiscariSjeca >= 19 && this.bodoviLiscariSjeca <= 25){
    this.usloviRadaLisSjeca = 1;
    this.usloviLisSjeca = "1/2"
  }else if(this.bodoviLiscariSjeca >= 26 && this.bodoviLiscariSjeca <= 32){
    this.usloviRadaLisSjeca = 2;
    this.usloviLisSjeca = "2"
  }else if (this.bodoviLiscariSjeca >= 33 && this.bodoviLiscariSjeca <= 41){
    this.usloviRadaLisSjeca = 3;
    this.usloviLisSjeca = "2/3"
  }else{
    this.usloviRadaLisSjeca = 4;
    this.usloviLisSjeca = "3"
  }

    let c = (Object.keys(this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1])).filter(k => k < this.srednjiPrecnikLiscari).pop();
    let d = (Object.keys(this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1])).filter(k => k > this.srednjiPrecnikLiscari)[0];
    let z = this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1][d];
    let q = this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1][c];

  if (this.srednjiPrecnikLiscari ! % 5) {
      this.normaSjeceLiscari = (((z - q) / 5) * (this.srednjiPrecnikLiscari - parseInt(c))+
                              parseFloat(q)).toFixed(2);
  }else{this.kljucLis = (Object.keys(this.unosNormi.ljetoLis[this.usloviRadaLisSjeca]
        [this.unosUslovaRada.value.bonitetLiscari - 1])).
        filter(k => k == this.srednjiPrecnikLiscari)[0];
        this.normaSjeceLiscari = this.unosNormi.ljetoLis[this.usloviRadaLisSjeca]
        [this.unosUslovaRada.value.bonitetLiscari - 1][this.kljucLis];
  }
  }else{
    this.bodoviLiscariSjeca = 0
    this.srednjiPrecnikSjecaLiscariBodovi = "Nema unijetih srednjih precnika za liscare!"
    this.unosUslovaRada.get('bonitetLiscari').patchValue('0')
     this.normaSjeceLiscari = 0
   }
    
  //Podaci za dalji izračun cijana i za potrebe tabele u html-u
  this.podaciZaIzracunCijene.push(        
      {"distanca": uslovi.animalDistanca},
      {"bonitetCetinari": parseInt(uslovi.bonitetCetinari)},
      {"bonitetLiscari": parseInt(uslovi.bonitetLiscari)},
      {"srPrCet": parseInt(this.srednjiPrecnikCetinari)},
      {"srPrLis": parseInt(this.srednjiPrecnikLiscari)},
      {"usloviRadaCetSjeca": this.usloviCetSjeca},
      {"usloviRadaLisSjeca": this.usloviLisSjeca},
      {"normaCetSjeca": parseFloat(this.normaSjeceCetinari)},
      {"normaLisSjeca": parseFloat(this.normaSjeceLiscari)},
      {"usloviRadaCetAnimal": this.usloviCetAnimal},
      {"usloviRadaLisAnimal": this.usloviLisAnimal},
      {"normaCetAnimalTrupci": parseFloat(this.normaCetAnimalTrupci)},
      {"normaCetAnimalTankaOblovina": parseFloat(this.normaCetAnimalTankaOblovina)},
      {"normaLisAnimalTrupci": parseFloat(this.normaLisAnimalTrupci)},
      {"normaLisAnimalTankaOblovina": parseFloat(this.normaLisAnimalTankaOblovina)},
    )
  console.log(this.unosNormi.podaciZaIzracunCijene);
  

    
  } 
 
}
