import { Component, OnInit } from '@angular/core';
import { TrupciService } from '../../services/trupci.service';
import { NormeService } from '../../services/norme.service';
import { OpstiPodaci } from '../../models/opsti-podaci.model';
import { Router } from '@angular/router';

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

  usloviRadaCetSj = this.podaciNorma[5].usloviRadaCetSjeca;
  usloviRadaLisSj = this.podaciNorma[6].usloviRadaLisSjeca;

  usloviRadaAnimalCet = this.podaciNorma[9].usloviRadaCetAnimal;
  usloviRadaAnimalLis = this.podaciNorma[10].usloviRadaLisAnimal;

  usloviRadaIznosCet = this.podaciNorma[15].usloviCetIznos;
  usloviRadaIznosLis = this.podaciNorma[16].usloviLisIznos;

  usloviRadaTraktorCet = this.podaciNorma[21].usloviCetTraktor;
  usloviRadaTraktorLis = this.podaciNorma[22].usloviLisTraktor;

  bonitetCet = this.podaciNorma[1].bonitetCetinari;
  bonitetLis = this.podaciNorma[2].bonitetLiscari;

  srednjiPrecnikCet = this.podaciNorma[3].srPrCet;
  srednjiPrecnikLis = this.podaciNorma[4].srPrLis;

  normaSjecaCet = this.podaciNorma[7].normaCetSjeca;
  normaSjecaLis = this.podaciNorma[8].normaLisSjeca;

  normaCetTraktor = this.podaciNorma[25].normaCetinariTraktor;
  normaLisTraktor = this.podaciNorma[26].normaLiscariTraktor;
  // normaTrupciCetTraktor = this.podaciNorma[];
  normaTrupciLisTraktor;

  normaTankaCetTraktor;
  normaTankaLisTraktor;

  normaTrupciCet = this.podaciNorma[11].normaCetAnimalTrupci;
  normaTankaCet = this.podaciNorma[12].normaCetAnimalTankaOblovina;

  normaTrupciLis = this.podaciNorma[13].normaLisAnimalTrupci;
  normaTankaLis = this.podaciNorma[14].normaLisAnimalTankaOblovina;

  normaIznosCet = this.podaciNorma[17].normaCetinariIznos;
  normaIznosLis = this.podaciNorma[18].normaLiscariIznos;

  distancaTraktor = this.podaciNorma[24].distancaTraktor;
  distancaAnimal = this.podaciNorma[0].distanca;
  distancaIznos = this.podaciNorma[20].distancaIznos;

  ucesceAnimala = this.podaciNorma[19].ucesceAnimala;
  procenatAnimal = this.podaciNorma[23].procenatAnimal;

  cetCijenaSj = this.norme.cijenaRadnogDanaSjeca / this.normaSjecaCet;
  lisCijenaSj = this.norme.cijenaRadnogDanaSjeca / this.normaSjecaLis;


  cijenaCetTraktor = this.norme.cijenaRadnogDanaTraktor / this.normaTrupciCet; // normu za traktor podjeliti
  cijenaCetTrupacAnimal = this.norme.cijenaRadnogDanaAnimal / this.normaTrupciCet;
  cijenaCetTankaAnimal = this.norme.cijenaRadnogDanaAnimal / this.normaTankaCet;
  cijenaCetIznos = this.norme.cijenaRadnogDanaIznos / this.normaIznosCet;

  cijenaLisTraktor = this.norme.cijenaRadnogDanaTraktor / this.normaTrupciLis; // normu za traktor podjeliti
  cijenaLisTrupacAnimal = this.norme.cijenaRadnogDanaAnimal / this.normaTrupciLis;
  cijenaLisTankaAnimal = this.norme.cijenaRadnogDanaAnimal / this.normaTankaLis;
  cijenaLisIznos = this.norme.cijenaRadnogDanaIznos / this.normaIznosLis;

  kolicinaCet = this.trupci.sumCet[13];
  kolicinaLis = this.trupci.sumLis[13];

  kolicinaCetTrupci = this.trupci.debelaOblovinaCet[0];
  kolicinaLisTrupci = this.trupci.debelaOblovinaLis[0];

  kolicinaIznosCet = this.trupci.iznosCet[0];
  kolicinaIznosLis = this.trupci.iznosLis[0];

  iznosKolicina = this.kolicinaIznosCet + this.kolicinaIznosLis;

  trupciKolicina = this.kolicinaCetTrupci + this.kolicinaLisTrupci;

  kolicinaCetTanka = this.trupci.tankaOblovinaCet[0];
  kolicinaLisTanka = this.trupci.tankaOblovinaLis[0];

  tankaKolicina;

  trupacCetAnimal = this.kolicinaCetTrupci * this.procenatAnimal;
  trupacLisAnimal = this.kolicinaLisTrupci * this.procenatAnimal;
  tankaCetAnimal = this.kolicinaCetTanka * this.procenatAnimal;
  tankaLisAnimal = this.kolicinaLisTanka * this.procenatAnimal;

  trupciTraktorKolicina;
  tankaTraktorKolicina;
  trupciTankaTraktorKolicina;
  trupciTankaCetTraktor;
  trupciTankaLisTraktor;
  trupciCetTraktor;
  trupciLisTraktor;
  tankaCetTraktor;
  tankaLisTraktor;

  sjecaCetBrRadDana = Math.round(this.kolicinaCet / this.normaSjecaCet);
  sjecaLisBrRadDana = Math.round(this.kolicinaLis / this.normaSjecaLis);

  // traktor broj radnih dana provjera
  traktorCetBrRadnihDana = Math.round(this.kolicinaCetTrupci / this.normaTrupciCet);
  traktorLisBrRadnihDana = Math.round(this.kolicinaLisTrupci / this.normaTrupciLis);

  animalTrupciCetBrRadnihDana = Math.round(this.kolicinaCetTrupci / this.normaTrupciCet);
  animalLisBrRadnihDana = Math.round(this.kolicinaLisTrupci / this.normaTrupciLis);

  animalTankaCetBrRadnihDana = Math.round(this.kolicinaCetTanka / this.normaTankaCet);
  animalTankaLisBrRadnihDana = Math.round(this.kolicinaLisTanka / this.normaTankaLis);

  iznosCetBrRadnihDana = Math.round(this.kolicinaIznosCet / this.normaIznosCet);
  iznosLisBrRadnihDana = Math.round(this.kolicinaIznosLis / this.normaIznosLis);

  trosakCetSj = this.kolicinaCet * parseFloat(this.cetCijenaSj.toFixed(2));
  trosakLisSj = this.kolicinaLis * parseFloat(this.lisCijenaSj.toFixed(2));

  // trosak za traktor provjera
  trosakCetTraktor = this.kolicinaCetTrupci * parseFloat(this.cijenaCetTraktor.toFixed(2));
  trosakLisTraktor = this.kolicinaLisTrupci * parseFloat(this.cijenaLisTraktor.toFixed(2));

  trosakCetTrupci = this.kolicinaCetTrupci * parseFloat(this.cijenaCetTrupacAnimal.toFixed(2));
  trosakLisTrupci = this.kolicinaLisTrupci * parseFloat(this.cijenaLisTrupacAnimal.toFixed(2));

  trosakCetTanka = this.kolicinaCetTanka * parseFloat(this.cijenaCetTankaAnimal.toFixed(2));
  trosakLisTanka = this.kolicinaLisTanka * parseFloat(this.cijenaLisTankaAnimal.toFixed(2));

  trosakCetIznos = this.kolicinaIznosCet * parseFloat(this.cijenaCetIznos.toFixed(2));
  trosakLisIznos = this.kolicinaIznosLis * parseFloat(this.cijenaLisIznos.toFixed(2));

  ukupniDirektniTrosak = this.trosakCetSj + this.trosakLisSj + this.trosakCetTraktor + this.trosakCetTrupci +
    this.trosakLisTraktor + this.trosakLisTrupci + this.trosakCetTanka + this.trosakLisTanka;

  ukupnaKolicina = this.kolicinaCet + this.kolicinaLis;

  cjenaUkupnoKubik = this.ukupniDirektniTrosak / this.ukupnaKolicina;

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

  constructor(public trupci: TrupciService, public norme: NormeService, private opstiPodaci: OpstiPodaci, private router: Router) {
  }


  ngOnInit(): void {
    console.log(this.normaIznosCet);
    console.log(this.normaIznosLis);
    if (this.procenatAnimal === 1) {
      this.trupciCetTraktor = 0;
      this.trupciLisTraktor = 0;
      this.tankaCetTraktor = 0;
      this.tankaLisTraktor = 0;
      this.trupciKolicina = this.trupacCetAnimal + this.trupacLisAnimal;
      this.tankaKolicina = this.tankaCetAnimal + this.tankaLisAnimal;
      this.tankaTraktorKolicina = 0;
      this.cijenaCetTraktor = 0;
      this.cijenaLisTraktor = 0;
      this.traktorCetBrRadnihDana = 0;
      this.traktorLisBrRadnihDana = 0;
    } else {
      this.trupciCetTraktor = this.kolicinaCetTrupci;
      this.trupciLisTraktor = this.kolicinaLisTrupci;
      this.tankaCetTraktor = this.kolicinaCetTanka;
      this.tankaLisTraktor = this.kolicinaLisTanka;
      this.trupciKolicina = this.trupacCetAnimal + this.trupacLisAnimal;
      this.tankaKolicina = this.tankaCetAnimal + this.tankaLisAnimal;
      this.trupciTraktorKolicina = this.trupciCetTraktor + this.trupciLisTraktor;
      this.tankaTraktorKolicina = this.tankaCetTraktor + this.tankaLisTraktor;
      this.trupciTankaTraktorKolicina = this.trupciTraktorKolicina + this.tankaTraktorKolicina;
      this.trupciTankaCetTraktor = this.trupciCetTraktor + this.tankaCetTraktor;
      this.trupciTankaLisTraktor = this.trupciLisTraktor + this.tankaLisTraktor;
    }



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
      this.usloviRadaCetSj = null;
      this.usloviRadaAnimalCet = null;
      this.bonitetCet = null;
      this.srednjiPrecnikCet = 0;
      this.normaSjecaCet = 0;
      this.normaCetTraktor = 0;
      this.trupacCetAnimal = 0;
      this.normaTrupciCet = 0;
      this.normaTankaCet = 0;
      this.normaIznosCet = 0;
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
      this.cijenaCetTraktor = 0;
      this.traktorCetBrRadnihDana = 0;
      this.cijenaCetIznos = 0;
      this.iznosCetBrRadnihDana = 0;
      this.trosakCetIznos = 0;
      this.trosakCetTraktor = 0;
      this.ukupniDirektniTrosak = this.trosakLisSj + this.trosakLisTrupci + this.trosakLisTanka;
      this.sumPrihodiCetLis = this.sumPrihodiLis;
      this.dobit = this.sumPrihodiLis - this.ukupniDirektniTrosak;
      this.cjenaUkupnoKubik = this.ukupniDirektniTrosak / this.ukupnaKolicina;
    }

    if (this.kolicinaLis <= 0) {
      this.usloviRadaLisSj = null;
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
      this.cijenaLisTraktor = 0;
      this.traktorLisBrRadnihDana = 0;
      this.cijenaLisIznos = 0;
      this.iznosLisBrRadnihDana = 0;
      this.trosakLisIznos = 0;
      this.trosakLisTraktor = 0;
      this.ukupniDirektniTrosak = this.trosakCetSj + this.trosakCetTrupci + this.trosakCetTanka;
      this.sumPrihodiCetLis = this.sumPrihodiCet;
      this.dobit = this.sumPrihodiCet - this.ukupniDirektniTrosak;
      this.cjenaUkupnoKubik = this.ukupniDirektniTrosak / this.ukupnaKolicina;
    }

  }

  goToDokumentacija(): void {
    this.router.navigate(['/dokumentacija']);
  }
}




