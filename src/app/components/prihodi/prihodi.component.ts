import { Component, OnInit } from '@angular/core';
import { SortimentiComponent } from '../sortimenti/sortimenti.component';
import { ValutaFixed } from '../../models/valuta-fixed.model';
import { OpstiPodaciComponent } from '../opsti-podaci/opsti-podaci.component';
import { TabelaNormiCijenaComponent } from '../tabela-normi-cijena/tabela-normi-cijena.component';

@Component({
  selector: 'app-prihodi',
  templateUrl: './prihodi.component.html',
  styleUrls: ['./prihodi.component.css']
})
export class PrihodiComponent implements OnInit {
  jelaShowTable: boolean;
  smrcaShowTable: boolean;
  bukvaShowTable: boolean;
  showSikiraImage = true;
  cjenaFJela = 200.00;
  cjenaPrvaJela = 149.00;
  cjenaDrugaJela = 126.00;
  cjenaTrecaJela = 107.00;
  cjenaStuboviJela = 143.00;
  cjenaRudnoJela = 72.00;
  cjenaKoljeJela = 42.00;
  cjenaCelulozaJela = 42.00;

  cjenaFSmrca = 202.00;
  cjenaPrvaSmrca = 152.00;
  cjenaDrugaSmrca = 129.00;
  cjenaTrecaSmrca = 110.00;
  cjenaStuboviSmrca = 143.00;
  cjenaRudnoSmrca = 72.00;
  cjenaKoljeSmrca = 42.00;
  cjenaCelulozaSmrca = 42.00;

  cjenaFBukva = 286.00;
  cjenaLBukva = 193.00;
  cjenaPrvaBukva = 128.00;
  cjenaDrugaBukva = 101.00;
  cjenaTrecaBukva = 79.00;
  cjenaCelulozaBukva = 52.00; // provjeriti cjene
  cjenaOgrevPrvaBukva = 67.00;
  cjenaOgrevDrugaBukva = 67.00;
  cjenaZajednoOgrev = 50.00;

  fTrupciJela = this.sortimenti.jela.fTrupci;
  prvaKlasaJela = this.sortimenti.jela.prvaKlasa;
  drugaKlasaJela = this.sortimenti.jela.drugaKlasa;
  trecaKlasaJela = this.sortimenti.jela.trecaKlasa;
  stuboviJela = this.sortimenti.jela.stubovi;
  rudnoJela = this.sortimenti.jela.jamskoDrvo;
  koljeJela = this.sortimenti.jela.koljeZaVoce;
  celulozaJela = this.sortimenti.jela.celuloznoDrvo;

  fTrupciSmrca = this.sortimenti.smrca.fTrupci;
  prvaKlasaSmrca = this.sortimenti.smrca.prvaKlasa;
  drugaKlasaSmrca = this.sortimenti.smrca.drugaKlasa;
  trecaKlasaSmrca = this.sortimenti.smrca.trecaKlasa;
  stuboviSmrca = this.sortimenti.smrca.stubovi;
  rudnoSmrca = this.sortimenti.smrca.jamskoDrvo;
  koljeSmrca = this.sortimenti.smrca.koljeZaVoce;
  celulozaSmrca = this.sortimenti.smrca.celuloznoDrvo;

  fTrupciBukva = this.sortimenti.bukva.fTrupci;
  lTrupciBukva = this.sortimenti.bukva.lKlase;
  prvaKlasaBukva = this.sortimenti.bukva.prvaKlasa;
  drugaKlasaBukva = this.sortimenti.bukva.drugaKlasa;
  trecaKlasaBukva = this.sortimenti.bukva.trecaKlasa;
  celulozaBukva = this.sortimenti.bukva.celuloznoDrvo;
  ogrevPrveBukva = this.sortimenti.bukva.ogrevPrveKlase;
  ogrevDrugeBukva = this.sortimenti.bukva.ogrevDrugeKlase;
  ogrevBukva = this.celulozaBukva + this.ogrevPrveBukva + this.ogrevDrugeBukva;

  ukupnoFJela = this.fTrupciJela * this.cjenaFJela;
  ukupnoPrvaJela = this.prvaKlasaJela * this.cjenaPrvaJela;
  ukupnoDrugaJela = this.drugaKlasaJela * this.cjenaDrugaJela;
  ukupnoTrecaJela = this.trecaKlasaJela * this.cjenaTrecaJela;
  ukupnoStuboviJela = this.stuboviJela * this.cjenaStuboviJela;
  ukupnoRudnoJela = this.rudnoJela * this.cjenaRudnoJela;
  ukupnoKoljeJela = this.koljeJela * this.cjenaKoljeJela;
  ukupnoCelulozaJela = this.celulozaJela * this.cjenaCelulozaJela;
  ukupnoJela = this.ukupnoFJela + this.ukupnoPrvaJela + this.ukupnoDrugaJela + this.ukupnoTrecaJela + this.ukupnoStuboviJela +
    this.ukupnoRudnoJela + this.ukupnoKoljeJela + this.ukupnoCelulozaJela;

  ukupnoFSmrca = this.fTrupciSmrca * this.cjenaFSmrca;
  ukupnoPrvaSmrca = this.prvaKlasaSmrca * this.cjenaPrvaSmrca;
  ukupnoDrugaSmrca = this.drugaKlasaSmrca * this.cjenaDrugaSmrca;
  ukupnoTrecaSmrca = this.trecaKlasaSmrca * this.cjenaTrecaSmrca;
  ukupnoStuboviSmrca = this.stuboviSmrca * this.cjenaStuboviSmrca;
  ukupnoRudnoSmrca = this.rudnoSmrca * this.cjenaRudnoSmrca;
  ukupnoKoljeSmrca = this.koljeSmrca * this.cjenaKoljeSmrca;
  ukupnoCelulozaSmrca = this.celulozaSmrca * this.cjenaCelulozaSmrca;
  ukupnoSmrca = this.ukupnoFSmrca + this.ukupnoPrvaSmrca + this.ukupnoDrugaSmrca + this.ukupnoTrecaSmrca +
    this.ukupnoStuboviSmrca + this.ukupnoRudnoSmrca + this.koljeSmrca + this.ukupnoCelulozaSmrca;

  ukupnoFBukva = this.fTrupciBukva * this.cjenaFBukva;
  ukupnoLBukva = this.lTrupciBukva * this.cjenaLBukva;
  ukupnoPrvaBukva = this.prvaKlasaBukva * this.cjenaPrvaBukva;
  ukupnoDrugaBukva = this.drugaKlasaBukva * this.cjenaDrugaBukva;
  ukupnoTrecaBukva = this.trecaKlasaBukva * this.cjenaTrecaBukva;
  ukupnoCelulozaBukva = this.celulozaBukva * this.cjenaCelulozaBukva;
  ukupnoOgrevPrvaBukva = this.ogrevPrveBukva * this.cjenaOgrevPrvaBukva;
  ukupnoOgrevDrugaBukva = this.ogrevDrugeBukva * this.cjenaOgrevDrugaBukva;
  ukupnoOgrevBukva = this.ukupnoOgrevPrvaBukva + this.ukupnoOgrevDrugaBukva;
  ukupnoBukva = this.ukupnoFBukva + this.ukupnoLBukva + this.ukupnoPrvaBukva +
    this.ukupnoDrugaBukva + this.ukupnoTrecaBukva + this.ukupnoCelulozaBukva + this.ukupnoOgrevPrvaBukva + this.ukupnoOgrevDrugaBukva;

  ukupnoSortimenti;
  ukupnoValuta;
  ukupnoCetinari = this.sortimenti.netoCetinari;
  ukupnoLiscari = this.sortimenti.netoLiscari;

  cjenaSjeceCetinari = this.tabelaNormiCijenaComponent.cijenaSjeceCetinari;
  cjenaSjeceLiscari = this.tabelaNormiCijenaComponent.cijenaSjeceLiscari;

  cjenaAnimalCetinari = this.tabelaNormiCijenaComponent.cijenAnimalCetinariTrupci + this.tabelaNormiCijenaComponent.cijenaAnimalCetinariTankaOblovina;
  cjenaAnimalLiscari = this.tabelaNormiCijenaComponent.cijenaAnimalLiscariTrupci + this.tabelaNormiCijenaComponent.cijenaAnimalLiscariTankaOblovina;

  trosakSjeceCetinari;
  trosakSjeceLiscari;

  trosakAnimalCetinari;
  trosakAnimalLiscari;

  debelaOblovinaCet;
  debelaOblovinaLis;


  tankaOblovinaCet;
  tankaOblovinaLis;

  iznosCet;
  iznosLis;

  cjenaKubik;
  trosakCetinariLiscari;
  dobit;
// evo ti ovde srednji precnik CETINARI I LIscari
  srednjiPrecnikCet = this.sortimenti.cetinari.srednjiPrecnik;
  srednjiPrecnikLis = this.sortimenti.liscari.srednjiPrecnik;

  odjel = this.opstiPodaciComponent.opstiPodaci.izabraniOdjel;

  constructor(public sortimenti: SortimentiComponent,
              public valuta: ValutaFixed,
              private opstiPodaciComponent: OpstiPodaciComponent,
              private tabelaNormiCijenaComponent: TabelaNormiCijenaComponent) {
  }


  allIsInputed(): void {
    this.jelaShowTable = true;
    this.smrcaShowTable = true;
    this.bukvaShowTable = true;
    this.showSikiraImage = false;

    if (this.ukupnoJela === 0) {
      this.ukupnoJela = 0;
      this.fTrupciJela = 0;
      this.prvaKlasaJela = 0;
      this.drugaKlasaJela = 0;
      this.trecaKlasaJela = 0;
      this.stuboviJela = 0;
      this.rudnoJela = 0;
      this.koljeJela = 0;
      this.celulozaJela = 0;
      this.ukupnoFJela = 0;
      this.ukupnoPrvaJela = 0;
      this.ukupnoDrugaJela = 0;
      this.ukupnoTrecaJela = 0;
      this.ukupnoStuboviJela = 0;
      this.ukupnoRudnoJela = 0;
      this.ukupnoCelulozaJela = 0;
      this.ukupnoJela = 0;
    }

    if (this.ukupnoSmrca === 0) {
      this.ukupnoSmrca = 0;
      this.fTrupciSmrca = 0;
      this.prvaKlasaSmrca = 0;
      this.drugaKlasaSmrca = 0;
      this.trecaKlasaSmrca = 0;
      this.stuboviSmrca = 0;
      this.rudnoSmrca = 0;
      this.koljeSmrca = 0;
      this.celulozaSmrca = 0;
      this.ukupnoFSmrca = 0;
      this.ukupnoPrvaSmrca = 0;
      this.ukupnoDrugaSmrca = 0;
      this.ukupnoTrecaSmrca = 0;
      this.ukupnoStuboviSmrca = 0;
      this.ukupnoRudnoSmrca = 0;
      this.ukupnoCelulozaSmrca = 0;
      this.ukupnoSmrca = 0;
    }

    if (this.ukupnoBukva === 0) {
      this.ukupnoBukva = 0;
      this.fTrupciBukva = 0;
      this.lTrupciBukva = 0;
      this.prvaKlasaBukva = 0;
      this.drugaKlasaBukva = 0;
      this.trecaKlasaBukva = 0;
      this.celulozaBukva = 0;
      this.ogrevPrveBukva = 0;
      this.ogrevDrugeBukva = 0;
      this.ogrevBukva = 0;
      this.ukupnoFBukva = 0;
      this.ukupnoLBukva = 0;
      this.ukupnoPrvaBukva = 0;
      this.ukupnoDrugaBukva = 0;
      this.ukupnoTrecaBukva = 0;
      this.ukupnoCelulozaBukva = 0;
      this.ukupnoOgrevPrvaBukva = 0;
      this.ukupnoOgrevDrugaBukva = 0;
      this.ukupnoOgrevBukva = 0;
      this.ukupnoBukva = 0;
    }


    this.ukupnoSortimenti = this.fTrupciJela + this.prvaKlasaJela + this.drugaKlasaJela + this.trecaKlasaJela +
      this.stuboviJela + this.rudnoJela + this.koljeJela + this.celulozaJela + this.fTrupciSmrca + this.prvaKlasaSmrca +
      this.drugaKlasaSmrca + this.trecaKlasaSmrca + this.stuboviSmrca + this.rudnoSmrca + this.koljeSmrca + this.celulozaSmrca +
      this.fTrupciBukva + this.lTrupciBukva + this.prvaKlasaBukva + this.drugaKlasaBukva + this.trecaKlasaBukva +
      this.celulozaBukva + this.ogrevPrveBukva + this.ogrevDrugeBukva;

    this.ukupnoCetinari = this.fTrupciJela + this.prvaKlasaJela + this.drugaKlasaJela + this.trecaKlasaJela +
      this.stuboviJela + this.rudnoJela + this.koljeJela + this.celulozaJela + this.fTrupciSmrca + this.prvaKlasaSmrca +
      this.drugaKlasaSmrca + this.trecaKlasaSmrca + this.stuboviSmrca + this.rudnoSmrca + this.koljeSmrca + this.celulozaSmrca;


    this.ukupnoLiscari = this.fTrupciBukva + this.lTrupciBukva + this.prvaKlasaBukva + this.drugaKlasaBukva + this.trecaKlasaBukva +
      this.celulozaBukva + this.ogrevPrveBukva + this.ogrevDrugeBukva;


    this.debelaOblovinaCet = this.fTrupciJela + this.prvaKlasaJela + this.drugaKlasaJela + this.trecaKlasaJela +
      this.fTrupciSmrca + this.prvaKlasaSmrca + this.drugaKlasaSmrca + this.trecaKlasaSmrca;

    this.tankaOblovinaCet = this.stuboviJela + this.rudnoJela + this.koljeJela + (0.7 * this.celulozaJela) +
      this.stuboviSmrca + this.rudnoSmrca + this.koljeSmrca + (0.7 * this.celulozaSmrca);

    this.iznosCet = (0.3 * this.celulozaJela) + (0.3 * this.celulozaSmrca);

    this.debelaOblovinaLis = this.fTrupciBukva + this.lTrupciBukva + this.prvaKlasaBukva + this.drugaKlasaBukva + this.trecaKlasaBukva;
    this.tankaOblovinaLis = this.celulozaBukva + this.ogrevPrveBukva;
    this.iznosLis = this.ogrevDrugeBukva;

    this.ukupnoValuta = this.ukupnoFJela + this.ukupnoPrvaJela + this.ukupnoDrugaJela + this.ukupnoTrecaJela + this.ukupnoStuboviJela +
      this.ukupnoRudnoJela + this.ukupnoKoljeJela + this.ukupnoCelulozaJela + this.ukupnoFSmrca + this.ukupnoPrvaSmrca +
      this.ukupnoDrugaSmrca + this.ukupnoTrecaSmrca + this.ukupnoStuboviSmrca + this.ukupnoRudnoSmrca + +this.ukupnoKoljeSmrca +
      this.ukupnoCelulozaSmrca + this.ukupnoFBukva + this.ukupnoLBukva + this.ukupnoPrvaBukva + this.ukupnoDrugaBukva +
      this.ukupnoTrecaBukva + this.ukupnoCelulozaBukva + this.ukupnoOgrevPrvaBukva + this.ukupnoOgrevDrugaBukva;
    this.izracunajTroskove();
    this.putValueToFixed();
  }


  putValueToFixed(): void {
    this.valuta.ukupnoValuta = this.ukupnoValuta.toFixed(2);
    this.valuta.ukupnoFJela = this.ukupnoFJela.toFixed(2);
    this.valuta.ukupnoPrvaJela = this.ukupnoPrvaJela.toFixed(2);
    this.valuta.ukupnoDrugaJela = this.ukupnoDrugaJela.toFixed(2);
    this.valuta.ukupnoTrecaJela = this.ukupnoTrecaJela.toFixed(2);
    this.valuta.ukupnoStuboviJela = this.ukupnoStuboviJela.toFixed(2);
    this.valuta.ukupnoRudnoJela = this.ukupnoRudnoJela.toFixed(2);
    this.valuta.ukupnoCelulozaJela = this.ukupnoCelulozaJela.toFixed(2);
    this.valuta.ukupnoJela = this.ukupnoJela.toFixed(2);
    this.valuta.ukupnoFSmrca = this.ukupnoFSmrca.toFixed(2);
    this.valuta.ukupnoPrvaSmrca = this.ukupnoPrvaSmrca.toFixed(2);
    this.valuta.ukupnoDrugaSmrca = this.ukupnoDrugaSmrca.toFixed(2);
    this.valuta.ukupnoTrecaSmrca = this.ukupnoTrecaSmrca.toFixed(2);
    this.valuta.ukupnoStuboviSmrca = this.ukupnoStuboviSmrca.toFixed(2);
    this.valuta.ukupnoRudnoSmrca = this.ukupnoRudnoSmrca.toFixed(2);
    this.valuta.ukupnoCelulozaSmrca = this.ukupnoCelulozaSmrca.toFixed(2);
    this.valuta.ukupnoSmrca = this.ukupnoSmrca.toFixed(2);
    this.valuta.ukupnoFBukva = this.ukupnoFBukva.toFixed(2);
    this.valuta.ukupnoLBukva = this.ukupnoLBukva.toFixed(2);
    this.valuta.ukupnoPrvaBukva = this.ukupnoPrvaBukva.toFixed(2);
    this.valuta.ukupnoDrugaBukva = this.ukupnoDrugaBukva.toFixed(2);
    this.valuta.ukupnoTrecaBukva = this.ukupnoTrecaBukva.toFixed(2);
    this.valuta.ukupnoCelulozaBukva = this.ukupnoCelulozaBukva.toFixed(2);
    this.valuta.ukupnoOgrevPrvaBukva = this.ukupnoOgrevPrvaBukva.toFixed(2);
    this.valuta.ukupnoOgrevDrugaBukva = this.ukupnoOgrevDrugaBukva.toFixed(2);
    this.valuta.ukupnoOgrevBukva = this.ukupnoOgrevBukva.toFixed(2);
    this.valuta.ukupnoBukva = this.ukupnoBukva.toFixed(2);
    this.valuta.ukupnoSortimenti = this.ukupnoSortimenti.toFixed(2);
    if (this.trosakCetinariLiscari === undefined) {
      this.trosakCetinariLiscari = 0;
    } else {
      this.valuta.trosakCetinariLiscari = this.trosakCetinariLiscari.toFixed(2);
    }
    if (this.cjenaKubik === undefined) {
      this.cjenaKubik = 0;
    } else {
      this.valuta.cjenaKubik = this.cjenaKubik.toFixed(2);
    }
    if (this.ukupnoCetinari === undefined) {
      this.ukupnoCetinari = 0;
    } else {
      this.valutaFixed.ukupnoCetinari = this.ukupnoCetinari.toFixed(2);
      this.valutaFixed.cjenaSjeceCetinari = this.cjenaSjeceCetinari.toFixed(2);
      this.valutaFixed.trosakSjeceCetinari = this.trosakSjeceCetinari.toFixed(2);
      this.valutaFixed.trosakAnimalCetinari = this.trosakAnimalCetinari.toFixed(2);
      this.valutaFixed.cjenaAnimalCetinari = this.cjenaAnimalCetinari.toFixed(2);
    }

    if (this.ukupnoLiscari === undefined) {
      this.ukupnoLiscari = 0;
    } else {
      this.valuta.ukupnoLiscari = this.ukupnoLiscari.toFixed(2);
      this.valuta.cjenaSjeceLiscari = this.cjenaSjeceLiscari.toFixed(2);
      if (this.trosakSjeceLiscari === undefined) {
        this.trosakSjeceLiscari = 0;
      } else {
        this.valuta.trosakSjeceLiscari = this.trosakSjeceLiscari.toFixed(2);
      }
      if (this.trosakAnimalLiscari === undefined) {
        this.trosakAnimalLiscari = 0;
      } else {
        this.valuta.trosakAnimalLiscari = this.trosakAnimalLiscari.toFixed(2);
      }
      this.valuta.cjenaAnimalLiscari = this.trosakAnimalLiscari.toFixed(2);
    }
    if (this.dobit === undefined) {
      this.dobit = 0;
    } else {
      this.valuta.dobit = this.dobit.toFixed(2);
    }
  }

  izracunajTroskove(): void {
    this.trosakSjeceCetinari = this.ukupnoCetinari * this.cjenaSjeceCetinari;
    this.trosakSjeceLiscari = this.ukupnoLiscari * this.cjenaSjeceLiscari;
    //this.trosakAnimalCetinari = this.ukupnoCetinari * this.cjenaAnimalCetinari;
    //this.trosakAnimalLiscari = this.ukupnoLiscari * this.cjenaAnimalLiscari;
    //this.trosakCetinariLiscari = this.trosakSjeceCetinari + this.trosakSjeceLiscari + this.trosakAnimalCetinari + this.trosakAnimalLiscari;
    this.cjenaKubik = this.trosakCetinariLiscari / this.ukupnoSortimenti; // takodje dodati mislim da je dodato
    this.dobit = this.ukupnoValuta - this.trosakCetinariLiscari;
  }


  printPage(): void {
    window.print();
  }

  checkIfVrsteIsNaN(): void {
    if (isNaN(this.ukupnoJela) && (isNaN(this.ukupnoSmrca)) && (isNaN(this.ukupnoBukva))) {
      this.ukupnoSortimenti = 0;
      this.ukupnoBukva = 0;
      this.ukupnoJela = 0;
      this.ukupnoSmrca = 0;
      this.ukupnoValuta = 0;
    }
    this.allIsInputed();
  }

  ngOnInit(): void {
    this.checkIfVrsteIsNaN();
  }
}




