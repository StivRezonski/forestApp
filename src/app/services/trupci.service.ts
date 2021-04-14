import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrupciService {
  klase = ['R', 'F', 'L', 'I', 'II', 'III', 'TT', 'Rudno', 'Kolje za voce', 'Celuloza', 'Ogrev I', 'Ogrev II', 'Sveukupna', 'Neto', 'Prihod'];
  trupciJela = [];
  trupciSmrca = [];
  trupciBijeliBor = [];
  trupciCrniBor = [];

  trupciBukva = [];
  trupciHrast = [];
  trupciBrijest = [];
  trupciOstali = [];

  jelaSaNeto = [];
  smrcaSaNeto = [];
  bijeliBorSaNeto = [];
  crniBorSaNeto = [];

  bukvaSaNeto = [];
  hrastSaNeto = [];
  brijestSaNeto = [];
  ostaliSaNeto = [];

  vrijednostJela = [];
  vrijednostSmrca = [];
  vrijednostBijeliBor = [];
  vrijednostCrniBor = [];

  vrijednostBukva = [];
  vrijednostHrast = [];
  vrijednostBrijest = [];
  vrijednostOstali = [];

  sumCet = [];
  sumLis = [];
  sumCetLis = [];

  debelaOblovinaCet = [];
  tankaOblovinaCet = [];
  iznosCet = [];

  debelaOblovinaLis = [];
  tankaOblovinaLis = [];
  iznosLis = [];

  // za srednji precnik sveukupna masa
  sveukupnaCet = [];
  sveukupnaLis = [];

  // sume sortimenata bez Neto i sveukupne
  ukupnoSortimenti = [];

  // kod cetinari cijene celuloze dodati oblo i cjepano kasnije
  // cijenovnik cetinari
  cijenaJela = [0, 200, 147, 124, 106, 143, 72, 44, 50, 42, 0];
  cijenaSmrca = [552, 0, 202, 150, 127, 109, 143, 72, 50, 42, 0];
  // mozda bude bug zbog L u borovima
  cijenaBijeliBor = [0, 200, 170, 147, 124, 106, 110, 72, 44, 50, 42];
  cijenaCrniBor = [0, 166, 146, 126, 105, 88, 110, 72, 44, 50, 42];

  // cijenovnik liscari - provjeriti cijene
  cijenaBukva = [0, 282, 192, 127, 101, 79, 63, 55, 57.5, 50, 0];
  cijenaHrast = [505, 410, 265, 200, 165, 63, 55, 57.5, 50, 0, 0];
  // cijene dve klase za rezanje
  cijenaBrijest = [0, 364, 227, 184, 0, 63, 55, 57.5, 50, 0, 0];
  cijenaOstali = [0, 94, 84, 65, 54, 0, 55.5, 41.5, 38, 0, 0];


  constructor() {
  }
}
