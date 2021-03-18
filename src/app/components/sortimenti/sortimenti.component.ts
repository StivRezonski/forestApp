import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sortimenti',
  templateUrl: './sortimenti.component.html',
  styleUrls: ['./sortimenti.component.css']
})
export class SortimentiComponent implements OnInit {
  vrstaSlika;
  showVrstaImage = false;
  sumTrupciJela = [];
  sumTrupciSmrca = [];
  sumTrupciBukva = [];
  sumTrupciPlemeniti = [];
  netoJela: number;
  netoSmrca: number;
  netoJelaSmrca: number;
  netoBukva: number;
  netoPlemeniti: number;
  netoLiscari: number;
  netoCetinariLiscari: number;
  sumNormaTest: number; // samo za test
  sumTroskova: number; // samo za test
  sumCjenaProjekta: number; // samo za test
  sortimentiFormGroup = new FormGroup({
      izabranaVrsta: new FormControl(),
      fTrupci: new FormControl(),
      lTrupci: new FormControl(),
      prvaKlasa: new FormControl(),
      drugaKlasa: new FormControl(),
      trecaKlasa: new FormControl(),
      stuboviZaVodove: new FormControl(),
      jamskoDrvo: new FormControl(),
      koljeZaVoce: new FormControl(),
      celuloznoDrvo: new FormControl(),
      ogrevPrveKlase: new FormControl(),
      ogrevDrugeKlase: new FormControl(),
      sveukupnaDrvnaMasa: new FormControl(),
      srednjiPrecnik: new FormControl(),
    }
  );

  sumaFTrupciJela: number;
  sumaLklaseJela: number;
  sumaPrvaKlasaJela: number;
  sumaDrugaKlasaJela: number;
  sumaTrecaKlasaJela: number;
  sumaStuboviJela: number;
  sumaJamskoDrvoJela: number;
  sumaKoljeZaVoceJela: number;
  sumaCeluloznoDrvoJela: number;
  sumaOgrevPrveKlaseJela: number;
  sumaOgrevDrugeKlaseJela: number;
  sveukupnaDrvnaMasaJela: number;
  srednjiPrecnikJela: number;

  sumaFTrupciSmrca: number;
  sumaLklaseSmrca: number;
  sumaPrvaKlasaSmrca: number;
  sumaDrugaKlasaSmrca: number;
  sumaTrecaKlasaSmrca: number;
  sumaStuboviSmrca: number;
  sumaJamskoDrvoSmrca: number;
  sumaKoljeZaVoceSmrca: number;
  sumaCeluloznoDrvoSmrca: number;
  sumaOgrevPrveKlaseSmrca: number;
  sumaOgrevDrugeKlaseSmrca: number;
  sveukupnaDrvnaMasaSmrca: number;
  srednjiPrecnikSmrca: number;

  sumaCetinariLiscariFKlase: number;
  sumaCetinariLiscariLKlase: number;
  sumaCetinariLiscariPrvaKlasa: number;
  sumaCetinariLiscarDrugaKlasa: number;
  sumaCetinariLiscariTrecaKlasa: number;
  sumaCetinariLiscariStubovi: number;
  sumaCetinariLiscariJamskoDrvo: number;
  sumaCetinariLiscariKoljeZaVoce: number;
  sumaCetinariLiscariCeluloznoDrvo: number;
  sumaCetinariLiscariOgrevPrveKlase: number;
  sumaCetinariLiscariOgrevDrugeKlase: number;
  sumaCetinariLiscariSveukupnaDrvnaMasa: number;
  sumaCetinariLiscariSrednjiPrecnik: number;

  sumaFTrupciBukva: number;
  sumaLklaseBukva: number;
  sumaPrvaKlasaBukva: number;
  sumaDrugaKlasaBukva: number;
  sumaTrecaKlasaBukva: number;
  sumaStuboviBukva: number;
  sumaJamskoDrvoBukva: number;
  sumaKoljeZaVoceBukva: number;
  sumaCeluloznoDrvoBukva: number;
  sumaOgrevPrveKlaseBukva: number;
  sumaOgrevDrugeKlaseBukva: number;
  sveukupnaDrvnaMasaBukva: number;
  srednjiPrecnikBukva: number;

  sumaFTrupciPlemeniti: number;
  sumaLklasePlemeniti: number;
  sumaPrvaKlasaPlemeniti: number;
  sumaDrugaKlasaPlemeniti: number;
  sumaTrecaKlasaPlemeniti: number;
  sumaStuboviPlemeniti: number;
  sumaJamskoDrvoPlemeniti: number;
  sumaKoljeZaVocePlemeniti: number;
  sumaCeluloznoDrvoPlemeniti: number;
  sumaOgrevPrveKlasePlemeniti: number;
  sumaOgrevDrugeKlasePlemeniti: number;
  sveukupnaDrvnaMasaPlemeniti: number;
  srednjiPrecnikPlemeniti: number;

  sumaFTrupciCetinari: number;
  sumaLklaseCetinari: number;
  sumaPrvaKlasaCetinari: number;
  sumaDrugaKlasaCetinari: number;
  sumaTrecaKlasaCetinari: number;
  sumaStuboviCetinari: number;
  sumaJamskoDrvoCetinari: number;
  sumaKoljeZaVoceCetinari: number;
  sumaCeluloznoDrvoCetinari: number;
  sumaOgrevPrveKlaseCetinari: number;
  sumaOgrevDrugeKlaseCetinari: number;
  sveukupnaDrvnaMasaCetinari: number;
  srednjiPrecnikCetinari: number;

  sumaFTrupciLiscari: number;
  sumaLklaseLiscari: number;
  sumaPrvaKlasaLiscari: number;
  sumaDrugaKlasaLiscari: number;
  sumaTrecaKlasaLiscari: number;
  sumaStuboviLiscari: number;
  sumaJamskoDrvoLiscari: number;
  sumaKoljeZaVoceLiscari: number;
  sumaCeluloznoDrvoLiscari: number;
  sumaOgrevPrveKlaseLiscari: number;
  sumaOgrevDrugeKlaseLiscari: number;
  sveukupnaDrvnaMasaLiscari: number;
  srednjiPrecnikLiscari: number;


  constructor() {
  }

  ngOnInit(): void {


  }

  onSubmit(): void {

    const izabranaVrsta = this.sortimentiFormGroup.get('izabranaVrsta').value;

    if (izabranaVrsta === '21') {
      this.sumTrupciJela.push(this.sortimentiFormGroup.value);
      this.onJelaSelect();
      this.sumaSvihCetinara();
      this.sumaLiscaraCetinara();
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '22') {
      this.sumTrupciSmrca.push(this.sortimentiFormGroup.value);
      this.onSmrcaSelect();
      this.sumaSvihCetinara();
      this.sumaLiscaraCetinara();
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '41') {
      this.sumTrupciBukva.push(this.sortimentiFormGroup.value);
      this.onBukvaSelect();
      this.sumaSvihLiscara();
      this.sumaLiscaraCetinara();
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '50') {
      this.sumTrupciPlemeniti.push(this.sortimentiFormGroup.value);
      this.onPlemenitiSelect();
      this.sumaSvihLiscara();
      this.sumaLiscaraCetinara();
      this.sortimentiFormGroup.reset();
    }


    this.sumNormaTest = 5.10;
    this.sumTroskova = 30000;
    this.sumCjenaProjekta = this.sumTroskova / this.netoCetinariLiscari;

  }

  onSelectVrsta(): void {
    const vrstaSlika = this.sortimentiFormGroup.get('izabranaVrsta').value;
    if (vrstaSlika === '21' || vrstaSlika === '22') {
      this.vrstaSlika = 'cetinar';
      this.showVrstaImage = true;
    } else if (vrstaSlika === '41' || vrstaSlika === '50') {
      this.vrstaSlika = 'liscari';
      this.showVrstaImage = true;
    }
  }

  onJelaSelect(): void {
    for (let i = 0; i < this.sumTrupciJela.length; i++) {
      this.sumaFTrupciJela = this.sumTrupciJela[i].fTrupci;
      this.sumaLklaseJela = this.sumTrupciJela[i].lTrupci;
      this.sumaPrvaKlasaJela = this.sumTrupciJela[i].prvaKlasa;
      this.sumaDrugaKlasaJela = this.sumTrupciJela[i].drugaKlasa;
      this.sumaTrecaKlasaJela = this.sumTrupciJela[i].trecaKlasa;
      this.sumaStuboviJela = this.sumTrupciJela[i].stuboviZaVodove;
      this.sumaJamskoDrvoJela = this.sumTrupciJela[i].jamskoDrvo;
      this.sumaKoljeZaVoceJela = this.sumTrupciJela[i].koljeZaVoce;
      this.sumaCeluloznoDrvoJela = this.sumTrupciJela[i].celuloznoDrvo;
      this.sumaOgrevPrveKlaseJela = this.sumTrupciJela[i].ogrevPrveKlase;
      this.sumaOgrevDrugeKlaseJela = this.sumTrupciJela[i].ogrevDrugeKlase;
      this.sveukupnaDrvnaMasaJela = this.sumTrupciJela[i].sveukupnaDrvnaMasa;
      this.srednjiPrecnikJela = this.sumTrupciJela[i].srednjiPrecnik;
      this.netoJela = this.sumaFTrupciJela + this.sumaLklaseJela + this.sumaPrvaKlasaJela + this.sumaDrugaKlasaJela +
        this.sumaTrecaKlasaJela + this.sumaStuboviJela + this.sumaJamskoDrvoJela + this.sumaKoljeZaVoceJela +
        this.sumaCeluloznoDrvoJela + this.sumaOgrevPrveKlaseJela + this.sumaOgrevDrugeKlaseJela;
    }
  }

  onSmrcaSelect(): void {
    for (let i = 0; i < this.sumTrupciSmrca.length; i++) {
      this.sumaFTrupciSmrca = this.sumTrupciSmrca[i].fTrupci;
      this.sumaLklaseSmrca = this.sumTrupciSmrca[i].lTrupci;
      this.sumaPrvaKlasaSmrca = this.sumTrupciSmrca[i].prvaKlasa;
      this.sumaDrugaKlasaSmrca = this.sumTrupciSmrca[i].drugaKlasa;
      this.sumaTrecaKlasaSmrca = this.sumTrupciSmrca[i].trecaKlasa;
      this.sumaStuboviSmrca = this.sumTrupciSmrca[i].stuboviZaVodove;
      this.sumaJamskoDrvoSmrca = this.sumTrupciSmrca[i].jamskoDrvo;
      this.sumaKoljeZaVoceSmrca = this.sumTrupciSmrca[i].koljeZaVoce;
      this.sumaCeluloznoDrvoSmrca = this.sumTrupciSmrca[i].celuloznoDrvo;
      this.sumaOgrevPrveKlaseSmrca = this.sumTrupciSmrca[i].ogrevPrveKlase;
      this.sumaOgrevDrugeKlaseSmrca = this.sumTrupciSmrca[i].ogrevDrugeKlase;
      this.sveukupnaDrvnaMasaSmrca = this.sumTrupciSmrca[i].sveukupnaDrvnaMasa;
      this.srednjiPrecnikSmrca = this.sumTrupciSmrca[i].srednjiPrecnik;
      this.netoSmrca = this.sumaFTrupciSmrca + this.sumaLklaseSmrca + this.sumaPrvaKlasaSmrca + this.sumaDrugaKlasaSmrca +
        this.sumaTrecaKlasaSmrca + this.sumaStuboviSmrca + this.sumaJamskoDrvoSmrca + this.sumaKoljeZaVoceSmrca +
        this.sumaCeluloznoDrvoSmrca + this.sumaOgrevPrveKlaseSmrca + this.sumaOgrevDrugeKlaseSmrca;
    }
  }

  sumaSvihCetinara(): void {
    if (this.sumTrupciSmrca.length <= 0) { // ako value smrce nije unesen dodjeli 0
      this.sumaFTrupciSmrca = 0;
      this.sumaLklaseSmrca = 0;
      this.sumaPrvaKlasaSmrca = 0;
      this.sumaDrugaKlasaSmrca = 0;
      this.sumaTrecaKlasaSmrca = 0;
      this.sumaStuboviSmrca = 0;
      this.sumaJamskoDrvoSmrca = 0;
      this.sumaKoljeZaVoceSmrca = 0;
      this.sumaCeluloznoDrvoSmrca = 0;
      this.sumaOgrevPrveKlaseSmrca = 0;
      this.sumaOgrevDrugeKlaseSmrca = 0;
      this.sveukupnaDrvnaMasaSmrca = 0;
      this.srednjiPrecnikSmrca = 0;
      this.netoSmrca = 0;
    }
    if (this.sumTrupciJela.length <= 0) { // ako value jele nije unesen dodjeli 0
      this.sumaFTrupciJela = 0;
      this.sumaLklaseJela = 0;
      this.sumaPrvaKlasaJela = 0;
      this.sumaDrugaKlasaJela = 0;
      this.sumaTrecaKlasaJela = 0;
      this.sumaStuboviJela = 0;
      this.sumaJamskoDrvoJela = 0;
      this.sumaKoljeZaVoceJela = 0;
      this.sumaCeluloznoDrvoJela = 0;
      this.sumaOgrevPrveKlaseJela = 0;
      this.sumaOgrevDrugeKlaseJela = 0;
      this.sveukupnaDrvnaMasaJela = 0;
      this.srednjiPrecnikJela = 0;
      this.netoJela = 0;
    }


    this.sumaFTrupciCetinari = this.sumaFTrupciJela + this.sumaFTrupciSmrca;
    this.sumaLklaseCetinari = this.sumaLklaseJela + this.sumaLklaseSmrca;
    this.sumaPrvaKlasaCetinari = this.sumaPrvaKlasaJela + this.sumaPrvaKlasaSmrca;
    this.sumaDrugaKlasaCetinari = this.sumaDrugaKlasaJela + this.sumaDrugaKlasaSmrca;
    this.sumaTrecaKlasaCetinari = this.sumaTrecaKlasaJela + this.sumaTrecaKlasaSmrca;
    this.sumaStuboviCetinari = this.sumaStuboviJela + this.sumaStuboviSmrca;
    this.sumaJamskoDrvoCetinari = this.sumaJamskoDrvoJela + this.sumaJamskoDrvoSmrca;
    this.sumaKoljeZaVoceCetinari = this.sumaKoljeZaVoceJela + this.sumaKoljeZaVoceSmrca;
    this.sumaCeluloznoDrvoCetinari = this.sumaCeluloznoDrvoJela + this.sumaCeluloznoDrvoSmrca;
    this.sumaOgrevPrveKlaseCetinari = this.sumaOgrevPrveKlaseJela + this.sumaOgrevPrveKlaseSmrca;
    this.sumaOgrevDrugeKlaseCetinari = this.sumaOgrevDrugeKlaseJela + this.sumaOgrevDrugeKlaseSmrca;
    this.sveukupnaDrvnaMasaCetinari = this.sveukupnaDrvnaMasaJela + this.sveukupnaDrvnaMasaSmrca;
    this.srednjiPrecnikCetinari = this.srednjiPrecnikJela + this.srednjiPrecnikSmrca;
    this.netoJelaSmrca = this.sumaFTrupciCetinari + this.sumaLklaseCetinari + this.sumaPrvaKlasaCetinari + this.sumaDrugaKlasaCetinari +
      this.sumaTrecaKlasaCetinari + this.sumaStuboviCetinari + this.sumaJamskoDrvoCetinari + this.sumaKoljeZaVoceCetinari +
      this.sumaCeluloznoDrvoCetinari + this.sumaOgrevPrveKlaseCetinari + this.sumaOgrevDrugeKlaseCetinari;
  }

  onBukvaSelect(): void {
    for (let i = 0; i < this.sumTrupciBukva.length; i++) {
      this.sumaFTrupciBukva = this.sumTrupciBukva[i].fTrupci;
      this.sumaLklaseBukva = this.sumTrupciBukva[i].lTrupci;
      this.sumaPrvaKlasaBukva = this.sumTrupciBukva[i].prvaKlasa;
      this.sumaDrugaKlasaBukva = this.sumTrupciBukva[i].drugaKlasa;
      this.sumaTrecaKlasaBukva = this.sumTrupciBukva[i].trecaKlasa;
      this.sumaStuboviBukva = this.sumTrupciBukva[i].stuboviZaVodove;
      this.sumaJamskoDrvoBukva = this.sumTrupciBukva[i].jamskoDrvo;
      this.sumaKoljeZaVoceBukva = this.sumTrupciBukva[i].koljeZaVoce;
      this.sumaCeluloznoDrvoBukva = this.sumTrupciBukva[i].celuloznoDrvo;
      this.sumaOgrevPrveKlaseBukva = this.sumTrupciBukva[i].ogrevPrveKlase;
      this.sumaOgrevDrugeKlaseBukva = this.sumTrupciBukva[i].ogrevDrugeKlase;
      this.sveukupnaDrvnaMasaBukva = this.sumTrupciBukva[i].sveukupnaDrvnaMasa;
      this.srednjiPrecnikBukva = this.sumTrupciBukva[i].srednjiPrecnik;
      this.netoBukva = this.sumaFTrupciBukva + this.sumaLklaseBukva + this.sumaPrvaKlasaBukva + this.sumaDrugaKlasaBukva +
        this.sumaTrecaKlasaBukva + this.sumaStuboviBukva + this.sumaJamskoDrvoBukva + this.sumaKoljeZaVoceBukva +
        this.sumaCeluloznoDrvoBukva + this.sumaOgrevPrveKlaseBukva + this.sumaOgrevDrugeKlaseBukva;
    }
  }

  onPlemenitiSelect(): void {
    for (let i = 0; i < this.sumTrupciPlemeniti.length; i++) {
      this.sumaFTrupciPlemeniti = this.sumTrupciPlemeniti[i].fTrupci;
      this.sumaLklasePlemeniti = this.sumTrupciPlemeniti[i].lTrupci;
      this.sumaPrvaKlasaPlemeniti = this.sumTrupciPlemeniti[i].prvaKlasa;
      this.sumaDrugaKlasaPlemeniti = this.sumTrupciPlemeniti[i].drugaKlasa;
      this.sumaTrecaKlasaPlemeniti = this.sumTrupciPlemeniti[i].trecaKlasa;
      this.sumaStuboviPlemeniti = this.sumTrupciPlemeniti[i].stuboviZaVodove;
      this.sumaJamskoDrvoPlemeniti = this.sumTrupciPlemeniti[i].jamskoDrvo;
      this.sumaKoljeZaVocePlemeniti = this.sumTrupciPlemeniti[i].koljeZaVoce;
      this.sumaCeluloznoDrvoPlemeniti = this.sumTrupciPlemeniti[i].celuloznoDrvo;
      this.sumaOgrevPrveKlasePlemeniti = this.sumTrupciPlemeniti[i].ogrevPrveKlase;
      this.sumaOgrevDrugeKlasePlemeniti = this.sumTrupciPlemeniti[i].ogrevDrugeKlase;
      this.sveukupnaDrvnaMasaPlemeniti = this.sumTrupciPlemeniti[i].sveukupnaDrvnaMasa;
      this.srednjiPrecnikPlemeniti = this.sumTrupciPlemeniti[i].srednjiPrecnik;
      this.netoPlemeniti = this.sumaFTrupciPlemeniti + this.sumaLklasePlemeniti + this.sumaPrvaKlasaPlemeniti +
        this.sumaDrugaKlasaPlemeniti + this.sumaTrecaKlasaPlemeniti + this.sumaStuboviPlemeniti +
        this.sumaJamskoDrvoPlemeniti + this.sumaKoljeZaVocePlemeniti + this.sumaCeluloznoDrvoPlemeniti +
        this.sumaOgrevPrveKlasePlemeniti + this.sumaOgrevDrugeKlasePlemeniti;
    }
  }

  sumaSvihLiscara(): void {
    if (this.sumTrupciBukva.length <= 0) {
      this.sumaFTrupciBukva = 0;
      this.sumaLklaseBukva = 0;
      this.sumaPrvaKlasaBukva = 0;
      this.sumaDrugaKlasaBukva = 0;
      this.sumaTrecaKlasaBukva = 0;
      this.sumaStuboviBukva = 0;
      this.sumaJamskoDrvoBukva = 0;
      this.sumaKoljeZaVoceBukva = 0;
      this.sumaCeluloznoDrvoBukva = 0;
      this.sumaOgrevPrveKlaseBukva = 0;
      this.sumaOgrevDrugeKlaseBukva = 0;
      this.sveukupnaDrvnaMasaBukva = 0;
      this.srednjiPrecnikBukva = 0;
      this.netoBukva = 0;
    }
    if (this.sumTrupciPlemeniti.length <= 0) {
      this.sumaFTrupciPlemeniti = 0;
      this.sumaLklasePlemeniti = 0;
      this.sumaPrvaKlasaPlemeniti = 0;
      this.sumaDrugaKlasaPlemeniti = 0;
      this.sumaTrecaKlasaPlemeniti = 0;
      this.sumaStuboviPlemeniti = 0;
      this.sumaJamskoDrvoPlemeniti = 0;
      this.sumaKoljeZaVocePlemeniti = 0;
      this.sumaCeluloznoDrvoPlemeniti = 0;
      this.sumaOgrevPrveKlasePlemeniti = 0;
      this.sumaOgrevDrugeKlasePlemeniti = 0;
      this.sveukupnaDrvnaMasaPlemeniti = 0;
      this.srednjiPrecnikPlemeniti = 0;
      this.netoPlemeniti = 0;
    }


    this.sumaFTrupciLiscari = this.sumaFTrupciBukva + this.sumaFTrupciPlemeniti;
    this.sumaLklaseLiscari = this.sumaLklaseBukva + this.sumaLklasePlemeniti;
    this.sumaPrvaKlasaLiscari = this.sumaPrvaKlasaBukva + this.sumaPrvaKlasaPlemeniti;
    this.sumaDrugaKlasaLiscari = this.sumaDrugaKlasaBukva + this.sumaDrugaKlasaPlemeniti;
    this.sumaTrecaKlasaLiscari = this.sumaTrecaKlasaBukva + this.sumaTrecaKlasaPlemeniti;
    this.sumaStuboviLiscari = this.sumaStuboviBukva + this.sumaStuboviPlemeniti;
    this.sumaJamskoDrvoLiscari = this.sumaJamskoDrvoBukva + this.sumaJamskoDrvoPlemeniti;
    this.sumaKoljeZaVoceLiscari = this.sumaKoljeZaVoceBukva + this.sumaKoljeZaVocePlemeniti;
    this.sumaCeluloznoDrvoLiscari = this.sumaCeluloznoDrvoBukva + this.sumaCeluloznoDrvoPlemeniti;
    this.sumaOgrevPrveKlaseLiscari = this.sumaOgrevPrveKlaseBukva + this.sumaOgrevPrveKlasePlemeniti;
    this.sumaOgrevDrugeKlaseLiscari = this.sumaOgrevDrugeKlaseBukva + this.sumaOgrevDrugeKlasePlemeniti;
    this.sveukupnaDrvnaMasaLiscari = this.sveukupnaDrvnaMasaBukva + this.sveukupnaDrvnaMasaPlemeniti;
    this.srednjiPrecnikLiscari = this.srednjiPrecnikBukva + this.srednjiPrecnikPlemeniti;
    this.netoLiscari = this.sumaFTrupciLiscari + this.sumaLklaseLiscari + this.sumaPrvaKlasaLiscari + this.sumaDrugaKlasaLiscari +
      this.sumaTrecaKlasaLiscari + this.sumaStuboviLiscari + this.sumaJamskoDrvoLiscari + this.sumaKoljeZaVoceLiscari +
      this.sumaCeluloznoDrvoLiscari + this.sumaOgrevPrveKlaseLiscari + this.sumaOgrevDrugeKlaseLiscari;
  }

  sumaLiscaraCetinara(): void {
    this.sumaSvihCetinara();
    this.sumaSvihLiscara();


    this.sumaCetinariLiscariFKlase = this.sumaFTrupciCetinari + this.sumaFTrupciLiscari;
    this.sumaCetinariLiscariLKlase = this.sumaLklaseCetinari + this.sumaLklaseLiscari;
    this.sumaCetinariLiscariPrvaKlasa = this.sumaPrvaKlasaCetinari + this.sumaPrvaKlasaLiscari;
    this.sumaCetinariLiscarDrugaKlasa = this.sumaDrugaKlasaCetinari + this.sumaDrugaKlasaLiscari;
    this.sumaCetinariLiscariTrecaKlasa = this.sumaTrecaKlasaCetinari + this.sumaTrecaKlasaLiscari;
    this.sumaCetinariLiscariStubovi = this.sumaStuboviCetinari + this.sumaStuboviLiscari;
    this.sumaCetinariLiscariJamskoDrvo = this.sumaJamskoDrvoCetinari + this.sumaJamskoDrvoLiscari;
    this.sumaCetinariLiscariKoljeZaVoce = this.sumaKoljeZaVoceCetinari + this.sumaKoljeZaVoceLiscari;
    this.sumaCetinariLiscariCeluloznoDrvo = this.sumaCeluloznoDrvoCetinari + this.sumaCeluloznoDrvoLiscari;
    this.sumaCetinariLiscariOgrevPrveKlase = this.sumaOgrevPrveKlaseCetinari + this.sumaOgrevPrveKlaseLiscari;
    this.sumaCetinariLiscariOgrevDrugeKlase = this.sumaOgrevDrugeKlaseCetinari + this.sumaOgrevDrugeKlaseLiscari;
    this.sumaCetinariLiscariSveukupnaDrvnaMasa = this.sveukupnaDrvnaMasaCetinari + this.sveukupnaDrvnaMasaLiscari;
    this.sumaCetinariLiscariSrednjiPrecnik = this.srednjiPrecnikCetinari + this.srednjiPrecnikLiscari;
    this.netoCetinariLiscari = this.sumaCetinariLiscariFKlase + this.sumaCetinariLiscariLKlase + this.sumaCetinariLiscariPrvaKlasa +
      this.sumaCetinariLiscarDrugaKlasa + this.sumaCetinariLiscariTrecaKlasa + this.sumaCetinariLiscariStubovi +
      this.sumaCetinariLiscariJamskoDrvo + this.sumaCetinariLiscariKoljeZaVoce + this.sumaCetinariLiscariCeluloznoDrvo +
      this.sumaCetinariLiscariOgrevPrveKlase + this.sumaCetinariLiscariOgrevDrugeKlase;
  }
}
