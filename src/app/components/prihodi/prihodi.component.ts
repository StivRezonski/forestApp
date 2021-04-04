import { Component, OnInit } from '@angular/core';
import { SortimentiComponent } from '../sortimenti/sortimenti.component';
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

  cjenaSjeceCetinari = this.tabelaNormi.cijenaSjeceCetinari;
  cjenaSjeceLiscari = this.tabelaNormi.cijenaSjeceLiscari;

  cjenaDebelaOblovinaCet;
  cjenaTankaOblovinaCet;
  cjenaDebelaTankaCet;
  cjenaDebelaOblovinaLis;
  cjenaTankaOblovinaLis;
  cjenaDebelaTankaLis;

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

  srednjiPrecnikCet = this.sortimenti.cetinari.srednjiPrecnik;
  srednjiPrecnikLis = this.sortimenti.liscari.srednjiPrecnik;

  odjel = this.opstiPodaciComponent.opstiPodaci.izabraniOdjel;

  constructor(public sortimenti: SortimentiComponent,
              private opstiPodaciComponent: OpstiPodaciComponent,
              private tabelaNormi: TabelaNormiCijenaComponent) {
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
      this.ukupnoKoljeJela = 0;
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
      this.ukupnoKoljeSmrca = 0;
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
// test vjezba brisi
    // Ukupno Sortimenti svih vrsta
    this.ukupnoSortimenti = this.fTrupciJela + this.prvaKlasaJela + this.drugaKlasaJela + this.trecaKlasaJela +
      this.stuboviJela + this.rudnoJela + this.koljeJela + this.celulozaJela + this.fTrupciSmrca + this.prvaKlasaSmrca +
      this.drugaKlasaSmrca + this.trecaKlasaSmrca + this.stuboviSmrca + this.rudnoSmrca + this.koljeSmrca + this.celulozaSmrca +
      this.fTrupciBukva + this.lTrupciBukva + this.prvaKlasaBukva + this.drugaKlasaBukva + this.trecaKlasaBukva +
      this.celulozaBukva + this.ogrevPrveBukva + this.ogrevDrugeBukva;

    // Ukupno Cetinari
    this.ukupnoCetinari = this.fTrupciJela + this.prvaKlasaJela + this.drugaKlasaJela + this.trecaKlasaJela +
      this.stuboviJela + this.rudnoJela + this.koljeJela + this.celulozaJela + this.fTrupciSmrca + this.prvaKlasaSmrca +
      this.drugaKlasaSmrca + this.trecaKlasaSmrca + this.stuboviSmrca + this.rudnoSmrca + this.koljeSmrca + this.celulozaSmrca;

    // Ukupno Liscari
    this.ukupnoLiscari = this.fTrupciBukva + this.lTrupciBukva + this.prvaKlasaBukva + this.drugaKlasaBukva + this.trecaKlasaBukva +
      this.celulozaBukva + this.ogrevPrveBukva + this.ogrevDrugeBukva;

    // Ukupno debela, tanka i iznos cetinari
    this.debelaOblovinaCet = this.fTrupciJela + this.prvaKlasaJela + this.drugaKlasaJela + this.trecaKlasaJela +
      this.fTrupciSmrca + this.prvaKlasaSmrca + this.drugaKlasaSmrca + this.trecaKlasaSmrca;
    // this.debelaOblovinaCet.toFixed(2);

    this.tankaOblovinaCet = this.stuboviJela + this.rudnoJela + this.koljeJela + (0.7 * this.celulozaJela) +
      this.stuboviSmrca + this.rudnoSmrca + this.koljeSmrca + (0.7 * this.celulozaSmrca);
    this.iznosCet = (0.3 * this.celulozaJela) + (0.3 * this.celulozaSmrca);

    // Ukupno cjena cetinari sa normama
    this.cjenaDebelaOblovinaCet = this.tabelaNormi.cijenAnimalCetinariTrupci * this.debelaOblovinaCet;
    this.cjenaTankaOblovinaCet = this.tabelaNormi.cijenaAnimalCetinariTankaOblovina * this.tankaOblovinaCet;
    this.cjenaDebelaTankaCet = this.cjenaDebelaOblovinaCet + this.cjenaTankaOblovinaCet;

    // Ukupno debela, tanka i iznos liscari
    this.debelaOblovinaLis = this.fTrupciBukva + this.lTrupciBukva + this.prvaKlasaBukva + this.drugaKlasaBukva + this.trecaKlasaBukva;
    this.tankaOblovinaLis = this.celulozaBukva + this.ogrevPrveBukva;
    this.iznosLis = this.ogrevDrugeBukva;

    // Ukupno cjena liscara sa normama
    this.cjenaDebelaOblovinaLis = this.tabelaNormi.cijenaAnimalLiscariTrupci * this.debelaOblovinaLis;
    this.cjenaTankaOblovinaLis = this.tabelaNormi.cijenaAnimalCetinariTankaOblovina * this.debelaOblovinaLis;
    this.cjenaDebelaTankaLis = this.cjenaDebelaOblovinaLis + this.cjenaTankaOblovinaLis;

    // Ukupno prihoda za sve vrste
    this.ukupnoValuta = this.ukupnoFJela + this.ukupnoPrvaJela + this.ukupnoDrugaJela + this.ukupnoTrecaJela + this.ukupnoStuboviJela +
      this.ukupnoRudnoJela + this.ukupnoKoljeJela + this.ukupnoCelulozaJela + this.ukupnoFSmrca + this.ukupnoPrvaSmrca +
      this.ukupnoDrugaSmrca + this.ukupnoTrecaSmrca + this.ukupnoStuboviSmrca + this.ukupnoRudnoSmrca + this.ukupnoKoljeSmrca +
      this.ukupnoCelulozaSmrca + this.ukupnoFBukva + this.ukupnoLBukva + this.ukupnoPrvaBukva + this.ukupnoDrugaBukva +
      this.ukupnoTrecaBukva + this.ukupnoCelulozaBukva + this.ukupnoOgrevPrvaBukva + this.ukupnoOgrevDrugaBukva;

    this.izracunajTroskove();
  }


  izracunajTroskove(): void {
    this.trosakSjeceCetinari = this.ukupnoCetinari * this.cjenaSjeceCetinari;
    this.trosakSjeceLiscari = this.ukupnoLiscari * this.cjenaSjeceLiscari;
    this.trosakAnimalCetinari = this.ukupnoCetinari * this.cjenaDebelaTankaCet;
    this.trosakAnimalLiscari = this.ukupnoLiscari * this.cjenaDebelaTankaLis;
    this.trosakCetinariLiscari = this.trosakSjeceCetinari + this.trosakSjeceLiscari + this.trosakAnimalCetinari + this.trosakAnimalLiscari;
    this.cjenaKubik = this.trosakCetinariLiscari / this.ukupnoSortimenti;
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




