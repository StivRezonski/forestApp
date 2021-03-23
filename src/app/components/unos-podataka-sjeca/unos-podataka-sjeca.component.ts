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

//ljetoCetinari = this.norme.ljetoCet;
//ljetoLiscari = this.norme.ljetoLis;

constructor(public sortimenti: SortimentiComponent, private norme: NormeService) {}
ngOnInit(): void {}

//Funcije unosa podataka
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

  // Animal norma
  this.bodoviCetinariAnimal = this.norme.podaci.nagibTerena + this.norme.podaci.ucesceLiscara
    +this.norme.podaci.gustinaPodmlatka+this.norme.podaci.doznacenaMasa
    +this.norme.podaci.nadmorskaVisina+this.norme.podaci.udaljenostOdStale
    +this.norme.podaci.srednjiPrecnikCetinariBodovi;
  this.bodoviLiscariAnimal = this.norme.podaci.nagibTerena+this.norme.podaci.ucesceLiscara
    +this.norme.podaci.gustinaPodmlatka+this.norme.podaci.doznacenaMasa
    +this.norme.podaci.nadmorskaVisina+this.norme.podaci.udaljenostOdStale
    +this.norme.podaci.srednjiPrecnikLiscariBodovi;
  
  //console.log(this.bodoviCetinariAnimal);

  if(18>this.bodoviCetinariAnimal){
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

  //console.log(this.norme.podaci.usloviRadaCetAnimal);

  this.norme.podaci.normaCetAnimal = this.norme.normeAnimalCetinari[this.norme.podaci.usloviRadaCetAnimal][this.norme.podaci.distancaPrivlacenjaAnimal];
  this.norme.podaci.normaLisAnimal = this.norme.normeAnimalLiscari[this.norme.podaci.usloviRadaLisAnimal][this.norme.podaci.distancaPrivlacenjaAnimal]; 

  //console.log(this.norme.podaci.normaCetAnimal);
  //console.log(this.norme.podaci.normaLisAnimal);

// Sjeca norma
  this.bodoviCetinariSjeca = this.norme.podaci.nagibTerena+this.norme.podaci.gustinaPodmlatka
    +this.norme.podaci.doznacenaMasa+this.norme.podaci.nadmorskaVisina
    +this.norme.podaci.udaljenostOdCeste+this.norme.podaci.srednjiPrecnikCetinariBodovi;

  this.bodoviLiscariSjeca = this.norme.podaci.nagibTerena+this.norme.podaci.gustinaPodmlatka
    +this.norme.podaci.doznacenaMasa+this.norme.podaci.nadmorskaVisina
    +this.norme.podaci.udaljenostOdCeste+this.norme.podaci.srednjiPrecnikLiscariBodovi;

  //console.log(this.bodoviCetinariSjeca);

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

  let a = (Object.keys (this.norme.ljetoCet[this.norme.podaci.usloviRadaCetSjeca][this.norme.podaci.bonitetCetinari-1])).filter( k=> k<this.norme.podaci.srednjiPrecnikCetinari.toString()).pop();
  let b = (Object.keys (this.norme.ljetoCet[this.norme.podaci.usloviRadaCetSjeca][this.norme.podaci.bonitetCetinari-1])).filter( k=> k>this.norme.podaci.srednjiPrecnikCetinari.toString())[0];
  let c = (Object.keys (this.norme.ljetoLis[this.norme.podaci.usloviRadaLisSjeca][this.norme.podaci.bonitetLiscari-1])).filter( k=> k<this.norme.podaci.srednjiPrecnikLiscari.toString()).pop();
  let d = (Object.keys (this.norme.ljetoLis[this.norme.podaci.usloviRadaLisSjeca][this.norme.podaci.bonitetLiscari-1])).filter( k=> k>this.norme.podaci.srednjiPrecnikLiscari.toString())[0];
  let x = this.norme.ljetoCet[this.norme.podaci.usloviRadaCetSjeca][this.norme.podaci.bonitetCetinari-1][b];
  let y = this.norme.ljetoCet[this.norme.podaci.usloviRadaCetSjeca][this.norme.podaci.bonitetCetinari-1][a];
  let z = this.norme.ljetoLis[this.norme.podaci.usloviRadaLisSjeca][this.norme.podaci.bonitetLiscari-1][d];
  let q = this.norme.ljetoLis[this.norme.podaci.usloviRadaLisSjeca][this.norme.podaci.bonitetLiscari-1][c];

  if(this.norme.podaci.srednjiPrecnikCetinari !%5){
    this.norme.podaci.normaCetSjeca = ((x - y) / 5) * (this.norme.podaci.srednjiPrecnikCetinari - parseInt (a)) + parseFloat (y);
  }else {
    this.kljucCet = (Object.keys (this.norme.ljetoCet[this.norme.podaci.usloviRadaCetSjeca][this.norme.podaci.bonitetCetinari-1])).filter( k=> k==this.norme.podaci.srednjiPrecnikCetinari.toString());
    this.norme.podaci.normaCetSjeca = this.norme.ljetoCet[this.norme.podaci.usloviRadaCetSjeca][this.norme.podaci.bonitetCetinari-1][this.kljucCet]
  }

   if(this.norme.podaci.srednjiPrecnikLiscari !%5){
     this.norme.podaci.normaLisSjeca = ((z - q) / 5) * (this.norme.podaci.srednjiPrecnikCetinari - parseInt (c)) + parseFloat (q);
   }else {
     this.kljucLis = (Object.keys (this.norme.ljetoLis[this.norme.podaci.usloviRadaLisSjeca][this.norme.podaci.bonitetLiscari-1])).filter( k=> k==this.norme.podaci.srednjiPrecnikLiscari.toString());
     this.norme.podaci.normaLisSjeca = this.norme.ljetoLis[this.norme.podaci.usloviRadaLisSjeca][this.norme.podaci.bonitetLiscari-1][this.kljucLis]
   }
  console.log(this.norme.podaci);

}

}
