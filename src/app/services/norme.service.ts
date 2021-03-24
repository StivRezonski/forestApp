import { Injectable } from '@angular/core';
import { Sjeca } from '../models/sjeca';

@Injectable({
  providedIn: 'root'
})
export class NormeService {

  podaci = new Sjeca();
  cijenaRadnogDanaSjeca = 89.37;
  cijenaRadnogDanaAnimal = 124.63;
  cijenaRadnogDanaTraktor = 696.26;
  cijenaRadnogDanaIznos = 110.06;
 
  constructor() {}
  
  //Norme sjeca ljeto
  ljetoUslovi1Cet = [{25:"1.0",30:"3.9",35:"5.79",40:"6.89",45:"8.03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"2",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"3",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"4",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"5",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

  ljetoUslovi2Cet = [{25:"6",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"7",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"8",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"9",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"10",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

  ljetoUslovi3Cet = [{25:"11",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"12",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"13",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"14",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"15",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

  ljetoUslovi4Cet = [{25:"16",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"17",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"18",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"19",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"20",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

  ljetoUslovi5Cet = [{25:"21",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"22",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"23",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"24",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"25",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

ljetoCet = [this.ljetoUslovi1Cet, this.ljetoUslovi2Cet, this.ljetoUslovi3Cet, this.ljetoUslovi4Cet, this.ljetoUslovi5Cet];

ljetoUslovi1Lis = [{25:"1.0",30:"3.9",35:"5.79",40:"6.89",45:"8.03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"2",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"3",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"4",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"5",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

ljetoUslovi2Lis = [{25:"6",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"7",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"8",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"9",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"10",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

ljetoUslovi3Lis = [{25:"11",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"12",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"13",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"14",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"15",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

ljetoUslovi4Lis = [{25:"16",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"17",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"18",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"19",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"20",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

ljetoUslovi5Lis = [{25:"21",30:"3,9",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"22",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"23",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"24",30:"3,3",35:"5,79",40:"6,89",45:"8,03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"},
  {25:"25",30:"3.3",35:"5.79",40:"6.89",45:"8.03",50:"9,16",55:"10,3",60:"11,42",65:"12,49",70:"13,54"}];

ljetoLis = [this.ljetoUslovi1Lis, this.ljetoUslovi2Lis, this.ljetoUslovi3Lis, this.ljetoUslovi4Lis, this.ljetoUslovi5Lis];


// Norme animal
normeAnimalCetinari = [
    {100:"1",200:"2",300:"3",400:"4",500:"5",600:"6",700:"7",800:"8",900:"9",1000:"10",1200:"11",1400:"12",1600:"13",1800:"14",2000:"15"},
    {100:"2",200:"2",300:"3",400:"4",500:"5",600:"6",700:"7",800:"8",900:"9",1000:"10",1200:"11",1400:"12",1600:"13",1800:"14",2000:"15"},
    {100:"3",200:"2",300:"3",400:"4",500:"5",600:"6",700:"7",800:"8",900:"9",1000:"10",1200:"11",1400:"12",1600:"13",1800:"14",2000:"15"},
    {100:"4",200:"2",300:"3",400:"4",500:"5",600:"6",700:"7",800:"8",900:"9",1000:"10",1200:"11",1400:"12",1600:"13",1800:"14",2000:"15"},
    {100:"5",200:"2",300:"3",400:"4",500:"5",600:"6",700:"7",800:"8",900:"9",1000:"10",1200:"11",1400:"12",1600:"13",1800:"14",2000:"15"}
  ];
normeAnimalLiscari = [
    {100:"1",200:"2",300:"3",400:"4",500:"5",600:"6",700:"7",800:"8",900:"9",1000:"10",1200:"11",1400:"12",1600:"13",1800:"14",2000:"15"},
    {100:"2",200:"2",300:"3",400:"4",500:"5",600:"6",700:"7",800:"8",900:"9",1000:"10",1200:"11",1400:"12",1600:"13",1800:"14",2000:"15"},
    {100:"3",200:"2",300:"3",400:"4",500:"5",600:"6",700:"7",800:"8",900:"9",1000:"10",1200:"11",1400:"12",1600:"13",1800:"14",2000:"15"},
    {100:"4",200:"2",300:"3",400:"4",500:"5",600:"6",700:"7",800:"8",900:"9",1000:"10",1200:"11",1400:"12",1600:"13",1800:"14",2000:"15"},
    {100:"5",200:"2",300:"3",400:"4",500:"5",600:"6",700:"7",800:"8",900:"9",1000:"10",1200:"11",1400:"12",1600:"13",1800:"14",2000:"15"}
  ];

}

