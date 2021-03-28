import { Component, OnInit } from '@angular/core';
import { SortimentiComponent } from '../sortimenti/sortimenti.component';
import { ValutaFixed } from '../../models/valuta-fixed.model';
import { OpstiPodaciComponent } from '../opsti-podaci/opsti-podaci.component';
import { TabelaNormiCijenaComponent } from '../tabela-normi-cijena/tabela-normi-cijena.component';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-prihodi',
  templateUrl: './prihodi.component.html',
  styleUrls: ['./prihodi.component.css']
})
export class PrihodiComponent implements OnInit {
  // vrati na boolean
  jelaShowTable: boolean;
  smrcaShowTable: boolean;
  bukvaShowTable: boolean;
  // vrati na true sikira
  showSikiraImage = false;
  notForPrint = true;
  cjenaFJela = 200.00;
  cjenaPrvaJela = 149.00;
  cjenaDrugaJela = 126.00;
  cjenaTrecaJela = 107.00;
  cjenaStuboviJela = 143.00;
  cjenaRudnoJela = 72.00;
  cjenaCelulozaJela = 42.00;

  cjenaFSmrca = 202.00;
  cjenaPrvaSmrca = 152.00;
  cjenaDrugaSmrca = 129.00;
  cjenaTrecaSmrca = 110.00;
  cjenaStuboviSmrca = 143.00;
  cjenaRudnoSmrca = 72.00;
  cjenaCelulozaSmrca = 42.00;

  cjenaFBukva = 286.00;
  cjenaLBukva = 193.00;
  cjenaPrvaBukva = 128.00;
  cjenaDrugaBukva = 101.00;
  cjenaTrecaBukva = 79.00;
  cjenaOgrevBukva = 67.00;

  fTrupciJela = this.sortimentiComponent.sumaJela.fTrupci;
  prvaKlasaJela = this.sortimentiComponent.sumaJela.prvaKlasa;
  drugaKlasaJela = this.sortimentiComponent.sumaJela.drugaKlasa;
  trecaKlasaJela = this.sortimentiComponent.sumaJela.trecaKlasa;
  stuboviJela = this.sortimentiComponent.sumaJela.stubovi;
  rudnoJela = this.sortimentiComponent.sumaJela.jamskoDrvo;
  celulozaJela = this.sortimentiComponent.sumaJela.sumaCeluloze;

  fTrupciSmrca = this.sortimentiComponent.sumaSmrca.fTrupci;
  prvaKlasaSmrca = this.sortimentiComponent.sumaSmrca.prvaKlasa;
  drugaKlasaSmrca = this.sortimentiComponent.sumaSmrca.drugaKlasa;
  trecaKlasaSmrca = this.sortimentiComponent.sumaSmrca.trecaKlasa;
  stuboviSmrca = this.sortimentiComponent.sumaSmrca.stubovi;
  rudnoSmrca = this.sortimentiComponent.sumaSmrca.jamskoDrvo;
  celulozaSmrca = this.sortimentiComponent.sumaSmrca.sumaCeluloze;

  fTrupciBukva = this.sortimentiComponent.sumaBukva.fTrupci;
  lTrupciBukva = this.sortimentiComponent.sumaBukva.lKlase;
  prvaKlasaBukva = this.sortimentiComponent.sumaBukva.prvaKlasa;
  drugaKlasaBukva = this.sortimentiComponent.sumaBukva.drugaKlasa;
  trecaKlasaBukva = this.sortimentiComponent.sumaBukva.trecaKlasa;
  ogrevBukva = this.sortimentiComponent.sumaBukva.netoOgrev;

  ukupnoFJela = this.fTrupciJela * this.cjenaFJela;
  ukupnoPrvaJela = this.prvaKlasaJela * this.cjenaPrvaJela;
  ukupnoDrugaJela = this.drugaKlasaJela * this.cjenaDrugaJela;
  ukupnoTrecaJela = this.trecaKlasaJela * this.cjenaTrecaJela;
  ukupnoStuboviJela = this.stuboviJela * this.cjenaStuboviJela;
  ukupnoRudnoJela = this.rudnoJela * this.cjenaRudnoJela;
  ukupnoCelulozaJela = this.celulozaJela * this.cjenaCelulozaJela;
  ukupnoJela = this.ukupnoFJela + this.ukupnoPrvaJela + this.ukupnoDrugaJela + this.ukupnoTrecaJela + this.ukupnoStuboviJela +
    this.ukupnoRudnoJela + this.ukupnoCelulozaJela;

  ukupnoFSmrca = this.fTrupciSmrca * this.cjenaFSmrca;
  ukupnoPrvaSmrca = this.prvaKlasaSmrca * this.cjenaPrvaSmrca;
  ukupnoDrugaSmrca = this.drugaKlasaSmrca * this.cjenaDrugaSmrca;
  ukupnoTrecaSmrca = this.trecaKlasaSmrca * this.cjenaTrecaSmrca;
  ukupnoStuboviSmrca = this.stuboviSmrca * this.cjenaStuboviSmrca;
  ukupnoRudnoSmrca = this.rudnoSmrca * this.cjenaRudnoSmrca;
  ukupnoCelulozaSmrca = this.celulozaSmrca * this.cjenaCelulozaSmrca;
  ukupnoSmrca = this.ukupnoFSmrca + this.ukupnoPrvaSmrca + this.ukupnoDrugaSmrca + this.ukupnoTrecaSmrca +
    this.ukupnoStuboviSmrca + this.ukupnoRudnoSmrca + this.ukupnoCelulozaSmrca;

  ukupnoFBukva = this.fTrupciBukva * this.cjenaFBukva;
  ukupnoLBukva = this.lTrupciBukva * this.cjenaLBukva;
  ukupnoPrvaBukva = this.prvaKlasaBukva * this.cjenaPrvaBukva;
  ukupnoDrugaBukva = this.drugaKlasaBukva * this.cjenaDrugaBukva;
  ukupnoTrecaBukva = this.trecaKlasaBukva * this.cjenaTrecaBukva;
  ukupnoOgrevBukva = this.ogrevBukva * this.cjenaOgrevBukva;
  ukupnoBukva = this.ukupnoFBukva + this.ukupnoLBukva + this.ukupnoPrvaBukva +
    this.ukupnoDrugaBukva + this.ukupnoTrecaBukva + this.ukupnoOgrevBukva;

  ukupnoSortimenti;
  ukupnoValuta;
  ukupnoCetinari = this.sortimentiComponent.netoCetinari;
  ukupnoLiscari = this.sortimentiComponent.netoLiscari;

  cjenaSjeceCetinari = this.tabelaNormiCijenaComponent.cijenaSjeceCetinari;
  cjenaSjeceLiscari = this.tabelaNormiCijenaComponent.cijenaSjeceLiscari;

  cjenaAnimalCetinari = this.tabelaNormiCijenaComponent.cijenaAnimalCetinari;
  cjenaAnimalLiscari = this.tabelaNormiCijenaComponent.cijenaAnimalLiscari;

  trosakSjeceCetinari;
  trosakSjeceLiscari;

  trosakAnimalCetinari;
  trosakAnimalLiscari;

  cjenaKubik;
  trosakCetinariLiscari;
  dobit;

  gazdinstvo = this.opstiPodaciComponent.opstiPodaci.gazdinstvo; // samo za testiranje
  odjel = this.opstiPodaciComponent.opstiPodaci.izabraniOdjel;
  privrednaJedinica = this.opstiPodaciComponent.opstiPodaci.privrednaJedinica;
  projektant = this.opstiPodaciComponent.opstiPodaci.projektant;
  vrstaSjece = this.opstiPodaciComponent.opstiPodaci.vrstaSjece;

  constructor(public sortimentiComponent: SortimentiComponent,
              public valutaFixed: ValutaFixed,
              private opstiPodaciComponent: OpstiPodaciComponent,
              private tabelaNormiCijenaComponent: TabelaNormiCijenaComponent,
              private sharedService: SharedService) {
  }

  bukvaHasInputValue(): void {
    this.jelaShowTable = false;
    this.smrcaShowTable = false;
    this.bukvaShowTable = true;
    this.showSikiraImage = false;

    this.ukupnoSortimenti = this.fTrupciBukva + this.lTrupciBukva + this.prvaKlasaBukva +
      this.drugaKlasaBukva + this.trecaKlasaBukva + this.ogrevBukva;

    this.ukupnoLiscari = this.ukupnoSortimenti;

    this.ukupnoValuta = this.ukupnoFBukva + this.ukupnoLBukva + this.ukupnoPrvaBukva + this.ukupnoDrugaBukva +
      this.ukupnoTrecaBukva + this.ukupnoOgrevBukva;
    this.putValueToFixed();
  }

  jelaHasInputValue(): void {
    this.jelaShowTable = true;
    this.smrcaShowTable = false;
    this.bukvaShowTable = false;
    this.showSikiraImage = false;

    this.ukupnoSortimenti = this.fTrupciJela + this.prvaKlasaJela + this.drugaKlasaJela + this.trecaKlasaJela +
      this.stuboviJela + this.rudnoJela + this.celulozaJela;

    this.ukupnoCetinari = this.ukupnoSortimenti;

    this.ukupnoValuta = this.ukupnoFJela + this.ukupnoPrvaJela + this.ukupnoDrugaJela + this.ukupnoTrecaJela + this.ukupnoStuboviJela +
      this.ukupnoRudnoJela + this.ukupnoCelulozaJela;

    this.izracunajTroskove();
    this.putValueToFixed();
  }

  smrcaHasInputValue(): void {
    this.smrcaShowTable = true;
    this.jelaShowTable = false;
    this.bukvaShowTable = false;
    this.showSikiraImage = false;

    this.ukupnoSortimenti = this.fTrupciSmrca + this.prvaKlasaSmrca + this.drugaKlasaSmrca +
      this.trecaKlasaSmrca + this.stuboviSmrca + this.rudnoSmrca + this.celulozaSmrca;

    this.ukupnoCetinari = this.ukupnoSortimenti;

    this.ukupnoValuta = this.ukupnoFSmrca + this.ukupnoPrvaSmrca + this.ukupnoDrugaSmrca +
      this.ukupnoTrecaSmrca + this.ukupnoStuboviSmrca + this.ukupnoRudnoSmrca + this.ukupnoCelulozaSmrca;
    this.izracunajTroskove();
    this.putValueToFixed();
  }

  jelaAndBukvaHasInputValue(): void {
    this.jelaShowTable = true;
    this.smrcaShowTable = false;
    this.bukvaShowTable = true;
    this.showSikiraImage = false;

    this.ukupnoSortimenti = this.fTrupciJela + this.prvaKlasaJela + this.drugaKlasaJela +
      this.trecaKlasaJela + this.stuboviJela + this.rudnoJela + this.celulozaJela +
      this.fTrupciBukva + this.lTrupciBukva + this.prvaKlasaBukva +
      this.drugaKlasaBukva + this.trecaKlasaBukva + this.ogrevBukva;

    this.ukupnoCetinari = this.fTrupciJela + this.prvaKlasaJela + this.drugaKlasaJela +
      this.trecaKlasaJela + this.stuboviJela + this.rudnoJela + this.celulozaJela;

    this.ukupnoLiscari = this.fTrupciBukva + this.lTrupciBukva + this.prvaKlasaBukva +
      this.drugaKlasaBukva + this.trecaKlasaBukva + this.ogrevBukva;

    this.ukupnoValuta = this.ukupnoFJela + this.ukupnoPrvaJela + this.ukupnoDrugaJela +
      this.ukupnoTrecaJela + this.ukupnoStuboviJela + this.ukupnoRudnoJela + this.ukupnoCelulozaJela +
      this.ukupnoFBukva + this.ukupnoLBukva + this.ukupnoPrvaBukva + this.ukupnoDrugaBukva +
      this.ukupnoTrecaBukva + this.ukupnoOgrevBukva;
    this.izracunajTroskove();
    this.putValueToFixed();
  }

  smrcaAndBukvaHasInputValue(): void {
    this.jelaShowTable = false;
    this.smrcaShowTable = true;
    this.bukvaShowTable = true;
    this.showSikiraImage = false;

    this.ukupnoSortimenti = this.fTrupciSmrca + this.prvaKlasaSmrca + this.drugaKlasaSmrca +
      this.trecaKlasaSmrca + this.stuboviSmrca + this.rudnoSmrca + this.celulozaSmrca +
      this.fTrupciBukva + this.lTrupciBukva + this.prvaKlasaBukva +
      this.drugaKlasaBukva + this.trecaKlasaBukva + this.ogrevBukva;

    this.ukupnoCetinari = this.fTrupciSmrca + this.prvaKlasaSmrca + this.drugaKlasaSmrca +
      this.trecaKlasaSmrca + this.stuboviSmrca + this.rudnoSmrca + this.celulozaSmrca;

    this.ukupnoLiscari = this.fTrupciBukva + this.lTrupciBukva + this.prvaKlasaBukva +
      this.drugaKlasaBukva + this.trecaKlasaBukva + this.ogrevBukva;

    this.ukupnoValuta = this.ukupnoFSmrca + this.ukupnoPrvaSmrca + this.ukupnoDrugaSmrca +
      this.ukupnoTrecaSmrca + this.ukupnoStuboviSmrca + this.ukupnoRudnoSmrca + this.ukupnoCelulozaSmrca +
      this.ukupnoFBukva + this.ukupnoLBukva + this.ukupnoPrvaBukva + this.ukupnoDrugaBukva +
      this.ukupnoTrecaBukva + this.ukupnoOgrevBukva;
    this.izracunajTroskove();
    this.putValueToFixed();
  }

  jelaAndSmrcaHasInputValue(): void {
    this.jelaShowTable = true;
    this.smrcaShowTable = true;
    this.bukvaShowTable = false;
    this.showSikiraImage = false;

    this.ukupnoSortimenti = this.fTrupciJela + this.prvaKlasaJela + this.drugaKlasaJela +
      this.trecaKlasaJela + this.stuboviJela + this.rudnoJela + this.celulozaJela +
      this.fTrupciSmrca + this.prvaKlasaSmrca + this.drugaKlasaSmrca +
      this.trecaKlasaSmrca + this.stuboviSmrca + this.rudnoSmrca + this.celulozaSmrca;

    this.ukupnoCetinari = this.ukupnoSortimenti;

    this.ukupnoValuta = this.ukupnoFJela + this.ukupnoPrvaJela + this.ukupnoDrugaJela +
      this.ukupnoTrecaJela + this.ukupnoStuboviJela + this.ukupnoRudnoJela + this.ukupnoCelulozaJela +
      this.ukupnoFSmrca + this.ukupnoPrvaSmrca + this.ukupnoDrugaSmrca +
      this.ukupnoTrecaSmrca + this.ukupnoStuboviSmrca + this.ukupnoRudnoSmrca + this.ukupnoCelulozaSmrca;
    this.izracunajTroskove();
    this.putValueToFixed();

  }

  allIsInputed(): void {
    this.jelaShowTable = true;
    this.smrcaShowTable = true;
    this.bukvaShowTable = true;
    this.showSikiraImage = false;

    this.ukupnoSortimenti = this.fTrupciJela + this.prvaKlasaJela + this.drugaKlasaJela + this.trecaKlasaJela +
      this.stuboviJela + this.rudnoJela + this.celulozaJela + this.fTrupciSmrca + this.prvaKlasaSmrca + this.drugaKlasaSmrca +
      this.trecaKlasaSmrca + this.stuboviSmrca + this.rudnoSmrca + this.celulozaSmrca + this.fTrupciBukva +
      this.lTrupciBukva + this.prvaKlasaBukva + this.drugaKlasaBukva + this.trecaKlasaBukva + this.ogrevBukva;

    this.ukupnoCetinari = this.fTrupciJela + this.prvaKlasaJela + this.drugaKlasaJela + this.trecaKlasaJela +
      this.stuboviJela + this.rudnoJela + this.celulozaJela + this.fTrupciSmrca + this.prvaKlasaSmrca + this.drugaKlasaSmrca +
      this.trecaKlasaSmrca + this.stuboviSmrca + this.rudnoSmrca + this.celulozaSmrca;


    this.ukupnoLiscari = this.fTrupciBukva +
      this.lTrupciBukva + this.prvaKlasaBukva + this.drugaKlasaBukva + this.trecaKlasaBukva + this.ogrevBukva;


    this.ukupnoValuta = this.ukupnoFJela + this.ukupnoPrvaJela + this.ukupnoDrugaJela + this.ukupnoTrecaJela + this.ukupnoStuboviJela +
      this.ukupnoRudnoJela + this.ukupnoCelulozaJela + this.ukupnoFSmrca + this.ukupnoPrvaSmrca + this.ukupnoDrugaSmrca +
      this.ukupnoTrecaSmrca + this.ukupnoStuboviSmrca + this.ukupnoRudnoSmrca + this.ukupnoCelulozaSmrca +
      this.ukupnoFBukva + this.ukupnoLBukva + this.ukupnoPrvaBukva + this.ukupnoDrugaBukva + this.ukupnoTrecaBukva + this.ukupnoOgrevBukva;
    this.izracunajTroskove();
    this.putValueToFixed();
  }


  checkIfVrsteIsNaN(): void {
    if (isNaN(this.ukupnoJela) && (isNaN(this.ukupnoSmrca)) && (isNaN(this.ukupnoBukva))) {
      this.ukupnoSortimenti = 0;
      this.ukupnoBukva = 0;
      this.ukupnoJela = 0;
      this.ukupnoSmrca = 0;
      this.ukupnoValuta = 0;
      this.jelaShowTable = false;
      this.smrcaShowTable = false;
      this.bukvaShowTable = false;
    } else if (isNaN(this.ukupnoSmrca) && (isNaN(this.ukupnoBukva)) && this.ukupnoJela >= 0) {
      this.jelaHasInputValue();
    } else if (isNaN(this.ukupnoJela) && (isNaN(this.ukupnoSmrca)) && this.ukupnoBukva >= 0) {
      this.bukvaHasInputValue();
    } else if (isNaN(this.ukupnoJela) && (isNaN(this.ukupnoBukva)) && this.ukupnoSmrca >= 0) {
      this.smrcaHasInputValue();
    } else if (isNaN(this.ukupnoJela) && this.ukupnoBukva >= 0 && this.ukupnoSmrca >= 0) {
      this.smrcaAndBukvaHasInputValue();
    } else if (isNaN(this.ukupnoSmrca) && this.ukupnoBukva >= 0 && this.ukupnoJela >= 0) {
      this.jelaAndBukvaHasInputValue();
    } else if (isNaN(this.ukupnoBukva) && this.ukupnoSmrca >= 0 && this.ukupnoJela >= 0) {
      this.jelaAndSmrcaHasInputValue();
    } else {
      this.allIsInputed();
    }
  }

  putValueToFixed(): void {
    this.valutaFixed.ukupnoValuta = this.ukupnoValuta.toFixed(2);
    this.valutaFixed.ukupnoFJela = this.ukupnoFJela.toFixed(2);
    this.valutaFixed.ukupnoPrvaJela = this.ukupnoPrvaJela.toFixed(2);
    this.valutaFixed.ukupnoDrugaJela = this.ukupnoDrugaJela.toFixed(2);
    this.valutaFixed.ukupnoTrecaJela = this.ukupnoTrecaJela.toFixed(2);
    this.valutaFixed.ukupnoStuboviJela = this.ukupnoStuboviJela.toFixed(2);
    this.valutaFixed.ukupnoRudnoJela = this.ukupnoRudnoJela.toFixed(2);
    this.valutaFixed.ukupnoCelulozaJela = this.ukupnoCelulozaJela.toFixed(2);
    this.valutaFixed.ukupnoJela = this.ukupnoJela.toFixed(2);
    this.valutaFixed.ukupnoFSmrca = this.ukupnoFSmrca.toFixed(2);
    this.valutaFixed.ukupnoPrvaSmrca = this.ukupnoPrvaSmrca.toFixed(2);
    this.valutaFixed.ukupnoDrugaSmrca = this.ukupnoDrugaSmrca.toFixed(2);
    this.valutaFixed.ukupnoTrecaSmrca = this.ukupnoTrecaSmrca.toFixed(2);
    this.valutaFixed.ukupnoStuboviSmrca = this.ukupnoStuboviSmrca.toFixed(2);
    this.valutaFixed.ukupnoRudnoSmrca = this.ukupnoRudnoSmrca.toFixed(2);
    this.valutaFixed.ukupnoCelulozaSmrca = this.ukupnoCelulozaSmrca.toFixed(2);
    this.valutaFixed.ukupnoSmrca = this.ukupnoSmrca.toFixed(2);
    this.valutaFixed.ukupnoFBukva = this.ukupnoFBukva.toFixed(2);
    this.valutaFixed.ukupnoLBukva = this.ukupnoLBukva.toFixed(2);
    this.valutaFixed.ukupnoPrvaBukva = this.ukupnoPrvaBukva.toFixed(2);
    this.valutaFixed.ukupnoDrugaBukva = this.ukupnoDrugaBukva.toFixed(2);
    this.valutaFixed.ukupnoTrecaBukva = this.ukupnoTrecaBukva.toFixed(2);
    this.valutaFixed.ukupnoOgrevBukva = this.ukupnoOgrevBukva.toFixed(2);
    this.valutaFixed.ukupnoBukva = this.ukupnoBukva.toFixed(2);
    this.valutaFixed.ukupnoSortimenti = this.ukupnoSortimenti.toFixed(2);
    this.valutaFixed.trosakCetinariLiscari = this.trosakCetinariLiscari.toFixed(2);
    this.valutaFixed.cjenaKubik = this.cjenaKubik.toFixed(2);
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
      this.valutaFixed.ukupnoLiscari = this.ukupnoLiscari.toFixed(2);
      this.valutaFixed.cjenaSjeceLiscari = this.cjenaSjeceLiscari.toFixed(2);
      this.valutaFixed.trosakSjeceLiscari = this.trosakSjeceLiscari.toFixed(2);
      this.valutaFixed.trosakAnimalLiscari = this.trosakAnimalLiscari.toFixed(2);
      this.valutaFixed.cjenaAnimalLiscari = this.trosakAnimalLiscari.toFixed(2);
    }
    this.valutaFixed.dobit = this.dobit.toFixed(2);
  }

  izracunajTroskove(): void {
    this.trosakSjeceCetinari = this.ukupnoCetinari * this.cjenaSjeceCetinari;
    this.trosakSjeceLiscari = this.ukupnoLiscari * this.cjenaSjeceLiscari;
    this.trosakAnimalCetinari = this.ukupnoCetinari * this.cjenaAnimalCetinari;
    this.trosakAnimalLiscari = this.ukupnoLiscari * this.cjenaAnimalLiscari;
    this.trosakCetinariLiscari = this.trosakSjeceCetinari + this.trosakSjeceLiscari + this.trosakAnimalCetinari + this.trosakAnimalLiscari;
    this.cjenaKubik = this.trosakCetinariLiscari / this.ukupnoSortimenti; // takodje dodati mislim da je dodato
    this.dobit = this.ukupnoValuta - this.trosakCetinariLiscari;
  }

  // za print
  printPage(): void {
    this.hideNavbarAndFooter();
  }

  //
  hideNavbarAndFooter(): any {
    //   // this.sharedService.emitChange(false);
    //   // this.notForPrint = false;
    //   // setTimeout(this.printPageDelay, 1000);
    this.printPageDelay();
  }

  //
  printPageDelay(): any {
    window.print();
  }

  // za print


  ngOnInit(): void {
    this.checkIfVrsteIsNaN();

  }
}




