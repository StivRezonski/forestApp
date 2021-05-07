import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrupciService {
  klase = ['R', 'F', 'L', 'I', 'II', 'III', 'TT', 'Rudno', 'Kolje za voce',
    'Celuloza', 'OgrevI', 'OgrevII', 'Sveukupna', 'Neto', 'Prihod'];
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
  cijenaJela = [null, 200, null, 147, 124, 106, 143, 72, 44, 50, null, null];
  cijenaSmrca = [552, 202, null, 150, 127, 109, 143, 72, 44, 50, null, null];
  // mozda bude bug zbog L u borovima
  cijenaBijeliBor = [null, 200, 170, 147, 124, 106, 110, 72, 44, 50, null, null];
  cijenaCrniBor = [null, 166, 146, 126, 105, 88, 110, 72, 44, 50, null, null];

  // cijenovnik liscari - provjeriti cijene
  cijenaBukva = [null, 282, 192, 127, 101, 79, null, 63, 44, 63, 63, 55];
  cijenaHrast = [null, 505, 410, 265, 200, 165, 136, 80, 44, 63, 63, 55];
  // cijene dve klase za rezanje
  cijenaBrijest = [null, 364, null, 227, 184, null, null, 63, 44, 63, 63, 54];
  cijenaOstali = [null, 94, 84, 65, 54, null, null, null, 44, 58, 46, 42];


  constructor() {
  }
}
