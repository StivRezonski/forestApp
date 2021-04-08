import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TrupciService {
  klase = ['F', 'L', 'I', 'II', 'III', 'TT', 'R', 'Kolje za voce', 'Celuloza', 'Ogrev I', 'ogrev II', 'Sveukupna', 'Neto'];
    trupciJela = [];
    trupciSmrca = [];
    trupciBukva = [];
    trupciHrast = [];

  jelaSaNeto = [];
  smrcaSaNeto = [];
  bukvaSaNeto = [];
  hrastSaNeto = [];

// push need
  vrijednostJela = [];
  vrijednostSmrca = [];
  vrijednostBukva = [];
  vrijednostHrast = [];

  sumCet = [];
  sumLis = [];
  sumCetLis = [];

  debelaOblovina = [];

  // sume sortimenata bez Neto i sveukupne
  ukupnoSortimenti = [];

  // kod cetinari cijene celuloze dodati oblo i cjepano kasnije
  // cijenovnik cetinari
  cijenaJela = [200, 0, 147, 124, 106, 143, 72, 44, 50, 0, 0];
  cijenaSmrca = [202, 0, 150, 127, 109, 143, 72, 44, 50, 0, 0];

  // cijenovnik liscari - provjeriti cijene
  cijenaBukva = [282, 192, 127, 101, 79, 52, 67, 67, 0, 0, 0];
  cijenaHrast = [505, 410, 265, 200, 165, 52, 67, 67, 0, 0, 0];


  constructor() { }
}
