import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unos-podataka',
  templateUrl: './unos-podataka.component.html',
  styleUrls: ['./unos-podataka.component.css']
})
export class UnosPodatakaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  norme = {usloviRada1:{bonitet1: {prvaNorma:"1", drugaNorma:"2"},
  bonitet2: {prvaNorma:"3", drugaNorma:"4"},
  bonitet3: {prvaNorma:"5", drugaNorma:"6"},
  bonitet4: {prvaNorma:"7", drugaNorma:"8"}
},
usloviRada2:{bonitet1: {prvaNorma:"1", drugaNorma:"2"},
  bonitet2: {prvaNorma:"3", drugaNorma:"4"},
  bonitet3: {prvaNorma:"5", drugaNorma:"6"},
  bonitet4: {prvaNorma:"7", drugaNorma:"8"}
},
usloviRada3:{bonitet1: {prvaNorma:"1", drugaNorma:"2"},
  bonitet2: {prvaNorma:"3", drugaNorma:"4"},
  bonitet3: {prvaNorma:"5", drugaNorma:"6"},
  bonitet4: {prvaNorma:"7", drugaNorma:"8"}
},  
}

nadmorskaVisina: number;
srednjiPrecnikCetinara: number;

onChangeValue1(event){
  this.nadmorskaVisina = event.target.value;
 }
onChangeValue2(event){
   this.srednjiPrecnikCetinara = event.target.value;
  }
izracunajNorme (){
  console.log(this.norme.usloviRada3.bonitet1.prvaNorma);
  
}

}
