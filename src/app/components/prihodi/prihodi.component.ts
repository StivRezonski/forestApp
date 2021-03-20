import { Component, OnInit } from '@angular/core';
import { SortimentiComponent } from '../sortimenti/sortimenti.component';

@Component({
  selector: 'app-prihodi',
  templateUrl: './prihodi.component.html',
  styleUrls: ['./prihodi.component.css']
})
export class PrihodiComponent implements OnInit {
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

  cjenaFBukva = 286.33;
  cjenaLBukva = 193.67;
  cjenaPrvaBukva = 128.67;
  cjenaDrugaBukva = 101.67;
  cjenaTrecaBukva = 79.67;
  cjenaOgrevBukva = 67.50;

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

  ukupnoFSmrca = this.fTrupciSmrca * this.cjenaFSmrca;
  ukupnoPrvaSmrca = this.prvaKlasaSmrca * this.cjenaPrvaSmrca;
  ukupnoDrugaSmrca = this.drugaKlasaSmrca * this.cjenaDrugaSmrca;
  ukupnoTrecaSmrca = this.trecaKlasaSmrca * this.cjenaTrecaSmrca;
  ukupnoStuboviSmrca = this.stuboviSmrca * this.cjenaStuboviSmrca;
  ukupnoRudnoSmrca = this.rudnoSmrca * this.cjenaRudnoSmrca;
  ukupnoCelulozaSmrca = this.celulozaSmrca * this.cjenaCelulozaSmrca;

  ukupnoFBukva = this.fTrupciBukva * this.cjenaFBukva;
  ukupnoLBukva = this.lTrupciBukva * this.cjenaLBukva;
  ukupnoPrvaBukva = this.prvaKlasaBukva * this.cjenaPrvaBukva;
  ukupnoDrugaBukva = this.drugaKlasaBukva * this.cjenaDrugaBukva;
  ukupnoTrecaBukva = this.trecaKlasaBukva * this.cjenaTrecaBukva;
  ukupnoOgrevBukva = this.ogrevBukva * this.cjenaOgrevBukva;

  ukupnoSortimenti = this.fTrupciJela + this.prvaKlasaJela + this.drugaKlasaJela + this.trecaKlasaJela +
    this.stuboviJela + this.rudnoJela + this.celulozaJela + this.fTrupciSmrca + this.prvaKlasaSmrca + this.drugaKlasaSmrca +
    this.trecaKlasaSmrca + this.stuboviSmrca + this.rudnoSmrca + this.celulozaSmrca + this.fTrupciBukva +
    this.lTrupciBukva + this.prvaKlasaBukva + this.drugaKlasaBukva + this.trecaKlasaBukva + this.ogrevBukva;
  ukupnoValuta = this.ukupnoFJela + this.ukupnoPrvaJela + this.ukupnoDrugaJela + this.ukupnoTrecaJela + this.ukupnoStuboviJela +
    this.ukupnoRudnoJela + this.ukupnoCelulozaJela + this.ukupnoFSmrca + this.ukupnoPrvaSmrca + this.ukupnoDrugaSmrca +
    this.ukupnoTrecaSmrca + this.ukupnoStuboviSmrca + this.ukupnoRudnoSmrca + this.ukupnoCelulozaSmrca +
    this.ukupnoFBukva + this.ukupnoLBukva + this.ukupnoPrvaBukva + this.ukupnoDrugaBukva + this.ukupnoTrecaBukva + this.ukupnoOgrevBukva;

  constructor(public sortimentiComponent: SortimentiComponent) {
  }

  ngOnInit(): void {
}

}
