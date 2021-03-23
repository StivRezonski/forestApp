import { Component, OnInit } from '@angular/core';
import { SortimentiComponent } from '../sortimenti/sortimenti.component';

@Component({
  selector: 'app-prihodi',
  templateUrl: './prihodi.component.html',
  styleUrls: ['./prihodi.component.css']
})
export class PrihodiComponent implements OnInit {
  jelaShowTable: boolean;
  smrcaShowTable: boolean;
  bukvaShowTable: boolean;
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
  ukupnoCetinari = this.sortimentiComponent.netoJelaSmrca;
  ukupnoLiscari = this.sortimentiComponent.netoLiscari;

  constructor(public sortimentiComponent: SortimentiComponent) {
  }

  bukvaHasInputValue(): void {
    this.jelaShowTable = false;
    this.smrcaShowTable = false;
    this.bukvaShowTable = true;
    this.ukupnoSortimenti = this.fTrupciBukva + this.lTrupciBukva + this.prvaKlasaBukva +
      this.drugaKlasaBukva + this.trecaKlasaBukva + this.ogrevBukva;

    this.ukupnoLiscari = this.ukupnoSortimenti;

    this.ukupnoValuta = this.ukupnoFBukva + this.ukupnoLBukva + this.ukupnoPrvaBukva + this.ukupnoDrugaBukva +
      this.ukupnoTrecaBukva + this.ukupnoOgrevBukva;
  }

  jelaHasInputValue(): void {
    this.jelaShowTable = true;
    this.smrcaShowTable = false;
    this.bukvaShowTable = false;
    this.ukupnoSortimenti = this.fTrupciJela + this.prvaKlasaJela + this.drugaKlasaJela + this.trecaKlasaJela +
      this.stuboviJela + this.rudnoJela + this.celulozaJela;

    this.ukupnoCetinari = this.ukupnoSortimenti;

    this.ukupnoValuta = this.ukupnoFJela + this.ukupnoPrvaJela + this.ukupnoDrugaJela + this.ukupnoTrecaJela + this.ukupnoStuboviJela +
      this.ukupnoRudnoJela + this.ukupnoCelulozaJela;
  }

  smrcaHasInputValue(): void {
    this.smrcaShowTable = true;
    this.jelaShowTable = false;
    this.bukvaShowTable = false;

    this.ukupnoSortimenti = this.fTrupciSmrca + this.prvaKlasaSmrca + this.drugaKlasaSmrca +
      this.trecaKlasaSmrca + this.stuboviSmrca + this.rudnoSmrca + this.celulozaSmrca;

    this.ukupnoCetinari = this.ukupnoSortimenti;

    this.ukupnoValuta = this.ukupnoFSmrca + this.ukupnoPrvaSmrca + this.ukupnoDrugaSmrca +
      this.ukupnoTrecaSmrca + this.ukupnoStuboviSmrca + this.ukupnoRudnoSmrca + this.ukupnoCelulozaSmrca;
  }

  jelaAndBukvaHasInputValue(): void {
    this.jelaShowTable = true;
    this.smrcaShowTable = false;
    this.bukvaShowTable = true;

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
  }

  smrcaAndBukvaHasInputValue(): void {
    this.jelaShowTable = false;
    this.smrcaShowTable = true;
    this.bukvaShowTable = true;

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
  }

  jelaAndSmrcaHasInputValue(): void {
    this.jelaShowTable = true;
    this.smrcaShowTable = true;
    this.bukvaShowTable = false;

    this.ukupnoSortimenti = this.fTrupciJela + this.prvaKlasaJela + this.drugaKlasaJela +
      this.trecaKlasaJela + this.stuboviJela + this.rudnoJela + this.celulozaJela +
      this.fTrupciSmrca + this.prvaKlasaSmrca + this.drugaKlasaSmrca +
      this.trecaKlasaSmrca + this.stuboviSmrca + this.rudnoSmrca + this.celulozaSmrca;

    this.ukupnoCetinari = this.ukupnoSortimenti;

    this.ukupnoValuta = this.ukupnoFJela + this.ukupnoPrvaJela + this.ukupnoDrugaJela +
      this.ukupnoTrecaJela + this.ukupnoStuboviJela + this.ukupnoRudnoJela + this.ukupnoCelulozaJela +
      this.ukupnoFSmrca + this.ukupnoPrvaSmrca + this.ukupnoDrugaSmrca +
      this.ukupnoTrecaSmrca + this.ukupnoStuboviSmrca + this.ukupnoRudnoSmrca + this.ukupnoCelulozaSmrca;

  }

  allIsInputed(): void {
    this.jelaShowTable = true;
    this.smrcaShowTable = true;
    this.bukvaShowTable = true;

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
  }

  // checkIfVrsteHasNoValue(): void {
  //   if (this.ukupnoJela <= 0 && this.ukupnoSmrca <= 0 && this.ukupnoBukva >= 0) {
  //     console.log('bukva ima value');
  //     this.bukvaHasInputValue();
  //   } else if (this.ukupnoJela >= 0 && this.ukupnoSmrca <= 0 && this.ukupnoBukva <= 0) {
  //     console.log('jela ima value');
  //     this.jelaHasInputValue();
  //   } else if (this.ukupnoJela <= 0 && this.ukupnoSmrca >= 0 && this.ukupnoBukva <= 0) {
  //     console.log('smrca ima value');
  //     this.smrcaHasInputValue();
  //   } else if (this.ukupnoJela >= 0 && this.ukupnoSmrca <= 0 && this.ukupnoBukva >= 0) {
  //     console.log('jela i bukva imaju value');
  //     this.jelaAndBukvaHasInputValue();
  //   } else if (this.ukupnoJela >= 0 && this.ukupnoSmrca >= 0 && this.ukupnoBukva <= 0) {
  //     console.log('jela i smrca imaju value');
  //     this.jelaAndSmrcaHasInputValue();
  //   } else if (this.ukupnoJela <= 0 && this.ukupnoSmrca >= 0 && this.ukupnoBukva >= 0) {
  //     console.log('smrca i bukva imaju value');
  //     this.smrcaAndBukvaHasInputValue();
  //   } else {
  //     this.allIsInputed();
  //   }
  // }

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
      console.log(this.ukupnoJela, this.ukupnoBukva, this.ukupnoSmrca);
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


  ngOnInit(): void {
    this.checkIfVrsteIsNaN();
    // console.log(this.ukupnoJela, this.ukupnoSmrca, this.ukupnoBukva);
    // if (isNaN(this.ukupnoJela) && (isNaN(this.ukupnoSmrca)) && (isNaN(this.ukupnoBukva))) {
    //   this.ukupnoSortimenti = 0;
    //   this.ukupnoBukva = 0;
    //   this.ukupnoJela = 0;
    //   this.ukupnoSmrca = 0;
    //   this.ukupnoValuta = 0;
    //   this.jelaShowTable = false;
    //   this.smrcaShowTable = false;
    //   this.bukvaShowTable = false;
    //   console.log(this.ukupnoJela, this.ukupnoSmrca, this.ukupnoBukva);
    //   if (this.ukupnoJela <= 0 && this.ukupnoSmrca <= 0 && this.ukupnoBukva >= 0) {
    //     console.log('bukva ima value');
    //     this.bukvaHasInputValue();
    //   } else if (this.ukupnoJela >= 0 && this.ukupnoSmrca <= 0 && this.ukupnoBukva <= 0) {
    //     console.log('jela ima value');
    //     this.jelaHasInputValue();
    //   } else if (this.ukupnoJela <= 0 && this.ukupnoSmrca >= 0 && this.ukupnoBukva <= 0) {
    //     console.log('smrca ima value');
    //     this.smrcaHasInputValue();
    //   } else if (this.ukupnoJela >= 0 && this.ukupnoSmrca <= 0 && this.ukupnoBukva >= 0) {
    //     console.log('jela i bukva imaju value');
    //     this.jelaAndBukvaHasInputValue();
    //   } else if (this.ukupnoJela >= 0 && this.ukupnoSmrca >= 0 && this.ukupnoBukva <= 0) {
    //     console.log('jela i smrca imaju value');
    //     this.jelaAndSmrcaHasInputValue();
    //   } else if (this.ukupnoJela <= 0 && this.ukupnoSmrca >= 0 && this.ukupnoBukva >= 0) {
    //     console.log('smrca i bukva imaju value');
    //     this.smrcaAndBukvaHasInputValue();
    //   } else {
    //   }


    // console.log('provjera init');
  }

  // this.allIsInputed();

  // }

  // console.log('provjera init 2');
  // this.checkIfVrsteHasNoValue();
}




