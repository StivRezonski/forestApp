import { Component, OnInit } from '@angular/core';
import { TrupciService } from '../../services/trupci.service';
import { NormeService } from '../../services/norme.service';

@Component({
  selector: 'app-realizacija',
  templateUrl: './realizacija.component.html',
  styleUrls: ['./realizacija.component.css']
})
export class RealizacijaComponent implements OnInit {
  tabJela = false;
  tabSmrca = false;
  tabBijeliBor = false;
  tabCrniBor = false;
  tabBukva = false;
  tabHrast = false;
  tabBrijest = false;
  tabOstali = false;

  usloviRadaCet = this.norme.podaciZaIzracunCijene[5].usloviRadaCetSjeca;
  usloviRadaLis = this.norme.podaciZaIzracunCijene[6].usloviRadaLisSjeca;

  usloviRadaAnimalCet = this.norme.podaciZaIzracunCijene[9].usloviRadaCetAnimal;
  usloviRadaAnimalLis = this.norme.podaciZaIzracunCijene[10].usloviRadaLisAnimal;

  bonitetCet = this.norme.podaciZaIzracunCijene[1].bonitetCetinari;
  bonitetLis = this.norme.podaciZaIzracunCijene[2].bonitetLiscari;

  srednjiPrecnikCet = this.norme.podaciZaIzracunCijene[3].srPrCet;
  srednjiPrecnikLis = this.norme.podaciZaIzracunCijene[4].srPrLis;

  normaSjecaCet = this.norme.podaciZaIzracunCijene[7].normaCetSjeca;
  normaSjecaLis = this.norme.podaciZaIzracunCijene[8].normaLisSjeca;

  normaTrupciCet = this.norme.podaciZaIzracunCijene[11].normaCetAnimalTrupci;
  normaTankaCet = this.norme.podaciZaIzracunCijene[12].normaCetAnimalTankaOblovina;

  normaTrupciLis = this.norme.podaciZaIzracunCijene[13].normaLisAnimalTrupci;
  normaTankaLis = this.norme.podaciZaIzracunCijene[14].normaLisAnimalTankaOblovina;

  distanca = this.norme.podaciZaIzracunCijene[0].distanca;

  cijenaRadnogDanaSjeca = this.norme.cijenaRadnogDanaSjeca;
  cijenaRadnogDanaAnimal = this.norme.cijenaRadnogDanaAnimal;

  cetinarskaCijenaSj = this.cijenaRadnogDanaSjeca / this.normaSjecaCet;
  liscarskaCijenaSj = this.cijenaRadnogDanaSjeca / this.normaSjecaLis;

  cijenaCetTrupacAnimal = (this.cijenaRadnogDanaAnimal / this.normaTrupciCet) * this.trupci.debelaOblovinaCet[0];
  cijenaCetTankaAnimal = (this.cijenaRadnogDanaAnimal / this.normaTankaCet) * this.trupci.tankaOblovinaCet[0];

  cijenaLisTrupacAnimal = (this.cijenaRadnogDanaAnimal / this.normaTrupciLis) * this.trupci.debelaOblovinaLis[0];
  cijenaLisTankaAnimal = (this.cijenaRadnogDanaAnimal / this.normaTankaLis) * this.trupci.tankaOblovinaLis[0];

  kolicinaCet = this.trupci.sumCet[13];
  kolicinaLis = this.trupci.sumLis[13];

  kolicinaCetTrupci = this.trupci.debelaOblovinaCet[0];
  kolicinaLisTrupci = this.trupci.debelaOblovinaLis[0];

  kolicinaCetTanka = this.trupci.tankaOblovinaCet[0];
  kolicinaLisTanka = this.trupci.tankaOblovinaLis[0];

  sjecaCetBrRadnihDana = Math.round(this.kolicinaCet / this.normaSjecaCet);
  sjecaLisBrRadnihDana = Math.round(this.kolicinaLis / this.normaSjecaLis);

  animalTrupciCetBrRadnihDana = Math.round(this.kolicinaCetTrupci / this.normaTrupciCet);
  animalLisBrRadnihDana = Math.round(this.kolicinaLisTrupci / this.normaTrupciLis);

  animalTankaCetBrRadnihDana = Math.round(this.kolicinaCetTanka / this.normaTankaCet);
  animalTankaLisBrRadnihDana = Math.round(this.kolicinaLisTanka / this.normaTankaLis);

  trosakCetSj = this.kolicinaCet * this.cetinarskaCijenaSj;
  trosakLisSj = this.kolicinaLis * this.liscarskaCijenaSj;

  trosakCetTrupci = this.kolicinaCetTrupci * this.cijenaCetTrupacAnimal;
  trosakLisTrupci = this.kolicinaLisTrupci * this.cijenaLisTrupacAnimal;

  trosakCetTanka = this.kolicinaCetTanka * this.cijenaCetTankaAnimal;
  trosakLisTanka = this.kolicinaLisTanka * this.cijenaLisTankaAnimal;

  ukupniDirektniTrosak = this.trosakCetSj + this.trosakLisSj + this.trosakCetTrupci +
    this.trosakLisTrupci + this.trosakCetTanka + this.trosakLisTanka;

  ukupnaKolicina = this.kolicinaCet + this.kolicinaLis;


  constructor(public trupci: TrupciService, public norme: NormeService) {
  }


  ngOnInit(): void {
    if (this.trupci.jelaSaNeto[12] > 0) {
      this.tabJela = true;
    }
    if (this.trupci.smrcaSaNeto[12] > 0) {
      this.tabSmrca = true;
    }
    if (this.trupci.bijeliBorSaNeto[12] > 0) {
      this.tabBijeliBor = true;
    }
    if (this.trupci.crniBorSaNeto[12] > 0) {
      this.tabCrniBor = true;
    }
    if (this.trupci.bukvaSaNeto[12] > 0) {
      this.tabBukva = true;
    }
    if (this.trupci.hrastSaNeto[12] > 0) {
      this.tabHrast = true;
    }
    if (this.trupci.brijestSaNeto[12] > 0) {
      this.tabBrijest = true;
    }
    if (this.trupci.ostaliSaNeto[12] > 0) {
      this.tabOstali = true;
    }

    // console.log(
    //   this.usloviRadaCet,
    //   this.usloviRadaLis,
    //   this.usloviRadaAnimalCet,
    //   this.usloviRadaAnimalLis,
    //   this.bonitetCet,
    //   this.bonitetLis,
    //   this.srednjiPrecnikCet,
    //   this.srednjiPrecnikLis,
    //   this.normaSjecaCet,
    //   this.normaSjecaLis,
    //   this.normaPrivlacenjeCet,
    //   this.normaPrivlacenjeLis,
    //   this.distanca,
    //   this.kolicinaCet,
    //   this.kolicinaLis
    // );


    // console.log(this.trupci.bukvaSaNeto[12]);
    // console.log(this.norme.podaciZaIzracunCijene[0].distanca);

    // console.log('debela cet', this.trupci.debelaOblovinaCet);
    // console.log('tanka cet', this.trupci.tankaOblovinaCet);
    // console.log('iznos cet', this.trupci.iznosCet);
    // console.log('debela lis', this.trupci.debelaOblovinaLis);
    // console.log('tanka lis', this.trupci.tankaOblovinaLis);
    // console.log('iznos lis', this.trupci.iznosLis);
    //
    // console.log(this.trupci.vrijednostJela);
    // console.log(this.trupci.vrijednostSmrca);
    // console.log(this.trupci.vrijednostBijeliBor);
    // console.log(this.trupci.vrijednostCrniBor);
    // console.log(this.trupci.vrijednostBukva);
    // console.log(this.trupci.vrijednostHrast);
    // console.log(this.trupci.vrijednostBrijest);
    // console.log(this.trupci.vrijednostOstali);
    // console.log(this.trupci.sumCet);
    // console.log(this.trupci.sumLis);
    // console.log(this.trupci.sumCetLis);
    // console.log(this.trupci.debelaOblovinaCet);
    // console.log(this.trupci.tankaOblovinaCet);
    // console.log(this.trupci.iznosCet);
    // console.log(this.trupci.debelaOblovinaLis);
    // console.log(this.trupci.tankaOblovinaLis);
    // console.log(this.trupci.iznosLis);
    // console.log(this.trupci.sveukupnaCet);
    // console.log(this.trupci.sveukupnaLis);
    // console.log(this.trupci.ukupnoSortimenti);

  }
}




