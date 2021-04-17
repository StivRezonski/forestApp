import { Component, OnInit } from '@angular/core';
import { TrupciService } from '../../services/trupci.service';
import { NormeService } from '../../services/norme.service';
import { OpstiPodaci } from '../../models/opsti-podaci.model';

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
  tabCet = false;
  tabLis = false;

  podaciNorma = this.norme.podaciZaIzracunCijene;

  usloviRadaCet = this.podaciNorma[5].usloviRadaCetSjeca;
  usloviRadaLis = this.podaciNorma[6].usloviRadaLisSjeca;

  usloviRadaAnimalCet = this.podaciNorma[9].usloviRadaCetAnimal;
  usloviRadaAnimalLis = this.podaciNorma[10].usloviRadaLisAnimal;

  bonitetCet = this.podaciNorma[1].bonitetCetinari;
  bonitetLis = this.podaciNorma[2].bonitetLiscari;

  srednjiPrecnikCet = this.podaciNorma[3].srPrCet;
  srednjiPrecnikLis = this.podaciNorma[4].srPrLis;

  normaSjecaCet = this.podaciNorma[7].normaCetSjeca;
  normaSjecaLis = this.podaciNorma[8].normaLisSjeca;

  normaTrupciCet = this.podaciNorma[11].normaCetAnimalTrupci;
  normaTankaCet = this.podaciNorma[12].normaCetAnimalTankaOblovina;

  normaTrupciLis = this.podaciNorma[13].normaLisAnimalTrupci;
  normaTankaLis = this.podaciNorma[14].normaLisAnimalTankaOblovina;

  distanca = this.podaciNorma[0].distanca;

  cetCijenaSj = this.norme.cijenaRadnogDanaSjeca / this.normaSjecaCet;
  lisCijenaSj = this.norme.cijenaRadnogDanaSjeca / this.normaSjecaLis;

  cijenaCetTrupacAnimal = (this.norme.cijenaRadnogDanaAnimal / this.normaTrupciCet) * this.trupci.debelaOblovinaCet[0];
  cijenaCetTankaAnimal = (this.norme.cijenaRadnogDanaAnimal / this.normaTankaCet) * this.trupci.tankaOblovinaCet[0];

  cijenaLisTrupacAnimal = (this.norme.cijenaRadnogDanaAnimal / this.normaTrupciLis) * this.trupci.debelaOblovinaLis[0];
  cijenaLisTankaAnimal = (this.norme.cijenaRadnogDanaAnimal / this.normaTankaLis) * this.trupci.tankaOblovinaLis[0];

  kolicinaCet = this.trupci.sumCet[13];
  kolicinaLis = this.trupci.sumLis[13];

  kolicinaCetTrupci = this.trupci.debelaOblovinaCet[0];
  kolicinaLisTrupci = this.trupci.debelaOblovinaLis[0];

  trupciKolicina = this.kolicinaCetTrupci + this.kolicinaLisTrupci;

  kolicinaCetTanka = this.trupci.tankaOblovinaCet[0];
  kolicinaLisTanka = this.trupci.tankaOblovinaLis[0];

  tankaKolicina = this.kolicinaCetTanka + this.kolicinaLisTanka;

  sjecaCetBrRadDana = Math.round(this.kolicinaCet / this.normaSjecaCet);
  sjecaLisBrRadDana = Math.round(this.kolicinaLis / this.normaSjecaLis);

  animalTrupciCetBrRadnihDana = Math.round(this.kolicinaCetTrupci / this.normaTrupciCet);
  animalLisBrRadnihDana = Math.round(this.kolicinaLisTrupci / this.normaTrupciLis);

  animalTankaCetBrRadnihDana = Math.round(this.kolicinaCetTanka / this.normaTankaCet);
  animalTankaLisBrRadnihDana = Math.round(this.kolicinaLisTanka / this.normaTankaLis);

  trosakCetSj = this.kolicinaCet * this.cetCijenaSj;
  trosakLisSj = this.kolicinaLis * this.lisCijenaSj;

  trosakCetTrupci = this.kolicinaCetTrupci * this.cijenaCetTrupacAnimal;
  trosakLisTrupci = this.kolicinaLisTrupci * this.cijenaLisTrupacAnimal;

  trosakCetTanka = this.kolicinaCetTanka * this.cijenaCetTankaAnimal;
  trosakLisTanka = this.kolicinaLisTanka * this.cijenaLisTankaAnimal;

  ukupniDirektniTrosak = this.trosakCetSj + this.trosakLisSj + this.trosakCetTrupci +
    this.trosakLisTrupci + this.trosakCetTanka + this.trosakLisTanka;

  ukupnaKolicina = this.kolicinaCet + this.kolicinaLis;

  prihodJela = this.trupci.vrijednostJela.reduce((a, b) => a + b, 0);
  prihodSmrca = this.trupci.vrijednostSmrca.reduce((a, b) => a + b, 0);
  prihodBijeliBor = this.trupci.vrijednostBijeliBor.reduce((a, b) => a + b, 0);
  prihodCrniBor = this.trupci.vrijednostCrniBor.reduce((a, b) => a + b, 0);
  prihodBukva = this.trupci.vrijednostBukva.reduce((a, b) => a + b, 0);
  prihodHrast = this.trupci.vrijednostHrast.reduce((a, b) => a + b, 0);
  prihodBrijest = this.trupci.vrijednostBrijest.reduce((a, b) => a + b, 0);
  prihodOstali = this.trupci.vrijednostOstali.reduce((a, b) => a + b, 0);
  sumPrihodiCet = this.prihodJela + this.prihodSmrca + this.prihodBijeliBor + this.prihodCrniBor;
  sumPrihodiLis = this.prihodBukva + this.prihodHrast + this.prihodBrijest + this.prihodOstali;
  sumPrihodiCetLis = this.sumPrihodiCet + this.sumPrihodiLis;
  dobit = this.sumPrihodiCetLis - this.ukupniDirektniTrosak;

  odjel = this.opstiPodaci.odjel;

  constructor(public trupci: TrupciService, public norme: NormeService, private opstiPodaci: OpstiPodaci) {
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
    if (this.trupci.sumCet[12] > 0) {
      this.tabCet = true;
    }
    if (this.trupci.sumLis[12] > 0) {
      this.tabLis = true;
    }

    if (this.kolicinaCet <= 0) {
      this.usloviRadaCet = null;
      this.usloviRadaAnimalCet = null;
      this.bonitetCet = null;
      this.srednjiPrecnikCet = 0;
      this.normaSjecaCet = 0;
      this.normaTrupciCet = 0;
      this.normaTankaCet = 0;
      this.cetCijenaSj = 0;
      this.cijenaCetTrupacAnimal = 0;
      this.cijenaCetTankaAnimal = 0;
      this.kolicinaCet = 0;
      this.kolicinaCetTrupci = 0;
      this.kolicinaCetTanka = 0;
      this.sjecaCetBrRadDana = 0;
      this.animalTrupciCetBrRadnihDana = 0;
      this.animalTankaCetBrRadnihDana = 0;
      this.trosakCetSj = 0;
      this.trosakCetTrupci = 0;
      this.trosakCetTanka = 0;
      this.ukupniDirektniTrosak = this.trosakLisSj + this.trosakLisTrupci + this.trosakLisTanka;
      this.sumPrihodiCetLis = this.sumPrihodiLis;
      this.dobit = this.sumPrihodiLis - this.ukupniDirektniTrosak;
    }

    if (this.kolicinaLis <= 0) {
      this.usloviRadaLis = null;
      this.usloviRadaAnimalLis = null;
      this.bonitetLis = null;
      this.srednjiPrecnikLis = 0;
      this.normaSjecaLis = 0;
      this.normaTrupciLis = 0;
      this.normaTankaLis = 0;
      this.lisCijenaSj = 0;
      this.cijenaLisTrupacAnimal = 0;
      this.cijenaLisTankaAnimal = 0;
      this.kolicinaLis = 0;
      this.kolicinaLisTrupci = 0;
      this.kolicinaLisTanka = 0;
      this.sjecaLisBrRadDana = 0;
      this.animalLisBrRadnihDana = 0;
      this.animalTankaLisBrRadnihDana = 0;
      this.trosakLisSj = 0;
      this.trosakLisTrupci = 0;
      this.trosakLisTanka = 0;
      this.ukupniDirektniTrosak = this.trosakCetSj + this.trosakCetTrupci + this.trosakCetTanka;
      this.sumPrihodiCetLis = this.sumPrihodiCet;
      this.dobit = this.sumPrihodiCet - this.ukupniDirektniTrosak;
    }

  }
}




