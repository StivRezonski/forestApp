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
  sumCetinari = [];
  sumLiscari = [];
  sumTrupciJela = [];
  sumTrupciSmrca = [];
  sumTrupciBukva = [];
  sumTrupciPlemeniti = [];
  netoJelaSmrca: number;
  netoBukvaPlemeniti: number;
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
  sumacetinariLiscariSveukupnaDrvnaMasa: number;
  sumaCetinariLiscariSrednjiPrecnik: number;

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

  onSelectVrsta(): void {
    const vrstaSlika =  this.sortimentiFormGroup.get('izabranaVrsta').value;
    if (vrstaSlika === '21' || vrstaSlika === '22'){
      this.vrstaSlika = 'cetinar';
      this.showVrstaImage = true;
    }else if (vrstaSlika === '41' || vrstaSlika === '50'){
      this.vrstaSlika = 'liscari';
      this.showVrstaImage = true;
    }
  }

  onSubmit(): void {

    const izabranaVrsta = this.sortimentiFormGroup.get('izabranaVrsta').value;

    if (izabranaVrsta === '21') {
      this.sumTrupciJela.push(this.sortimentiFormGroup.value);
      this.sumCetinari.push(this.sortimentiFormGroup.value);
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '22') {
      this.sumTrupciSmrca.push(this.sortimentiFormGroup.value);
      this.sumCetinari.push(this.sortimentiFormGroup.value);
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '41') {
      this.sumTrupciBukva.push(this.sortimentiFormGroup.value);
      this.sumLiscari.push(this.sortimentiFormGroup.value);
      this.sortimentiFormGroup.reset();
    } else {
      this.sumTrupciPlemeniti.push(this.sortimentiFormGroup.value);
      this.sumLiscari.push(this.sortimentiFormGroup.value);
      this.sortimentiFormGroup.reset();
    }




    // cetinari sabiranje i loop
    if (this.sumTrupciJela.length > 0 && this.sumTrupciSmrca.length > 0) {
      for (let i = 0; i < this.sumTrupciJela.length; i++) {
        this.sumaFTrupciCetinari = this.sumTrupciJela[i].fTrupci + this.sumTrupciSmrca[i].fTrupci;
        this.sumaLklaseCetinari = this.sumTrupciJela[i].lTrupci + this.sumTrupciSmrca[i].lTrupci;
        this.sumaPrvaKlasaCetinari = this.sumTrupciJela[i].prvaKlasa + this.sumTrupciSmrca[i].prvaKlasa;
        this.sumaDrugaKlasaCetinari = this.sumTrupciJela[i].drugaKlasa + this.sumTrupciSmrca[i].drugaKlasa;
        this.sumaTrecaKlasaCetinari = this.sumTrupciJela[i].trecaKlasa + this.sumTrupciSmrca[i].trecaKlasa;
        this.sumaStuboviCetinari = this.sumTrupciJela[i].stuboviZaVodove + this.sumTrupciSmrca[i].stuboviZaVodove;
        this.sumaJamskoDrvoCetinari = this.sumTrupciJela[i].jamskoDrvo + this.sumTrupciSmrca[i].jamskoDrvo;
        this.sumaKoljeZaVoceCetinari = this.sumTrupciJela[i].koljeZaVoce + this.sumTrupciSmrca[i].koljeZaVoce;
        this.sumaCeluloznoDrvoCetinari = this.sumTrupciJela[i].celuloznoDrvo + this.sumTrupciSmrca[i].celuloznoDrvo;
        this.sumaOgrevPrveKlaseCetinari = this.sumTrupciJela[i].ogrevPrveKlase + this.sumTrupciSmrca[i].ogrevPrveKlase;
        this.sumaOgrevDrugeKlaseCetinari = this.sumTrupciJela[i].ogrevDrugeKlase + this.sumTrupciSmrca[i].ogrevDrugeKlase;
        this.sveukupnaDrvnaMasaCetinari = this.sumTrupciJela[i].sveukupnaDrvnaMasa + this.sumTrupciSmrca[i].sveukupnaDrvnaMasa;
        this.srednjiPrecnikCetinari = this.sumTrupciJela[i].srednjiPrecnik + this.sumTrupciSmrca[i].srednjiPrecnik;
        this.netoJelaSmrca = this.sumaFTrupciCetinari + this.sumaLklaseCetinari + this.sumaPrvaKlasaCetinari +
          this.sumaDrugaKlasaCetinari + this.sumaTrecaKlasaCetinari + this.sumaStuboviCetinari + this.sumaJamskoDrvoCetinari +
          this.sumaKoljeZaVoceCetinari + this.sumaCeluloznoDrvoCetinari + this.sumaOgrevPrveKlaseCetinari +
          this.sumaOgrevDrugeKlaseCetinari;
      }
    }
    // liscari sabiranje i loop
    if (this.sumTrupciBukva.length > 0 && this.sumTrupciPlemeniti.length > 0) {
      for (let i = 0; i < this.sumTrupciBukva.length; i++) {
        this.sumaFTrupciLiscari = this.sumTrupciBukva[i].fTrupci + this.sumTrupciPlemeniti[i].fTrupci;
        this.sumaLklaseLiscari = this.sumTrupciBukva[i].lTrupci + this.sumTrupciPlemeniti[i].lTrupci;
        this.sumaPrvaKlasaLiscari = this.sumTrupciBukva[i].prvaKlasa + this.sumTrupciPlemeniti[i].prvaKlasa;
        this.sumaDrugaKlasaLiscari = this.sumTrupciBukva[i].drugaKlasa + this.sumTrupciPlemeniti[i].drugaKlasa;
        this.sumaTrecaKlasaLiscari = this.sumTrupciBukva[i].trecaKlasa + this.sumTrupciPlemeniti[i].trecaKlasa;
        this.sumaStuboviLiscari = this.sumTrupciBukva[i].stuboviZaVodove + this.sumTrupciPlemeniti[i].stuboviZaVodove;
        this.sumaJamskoDrvoLiscari = this.sumTrupciBukva[i].jamskoDrvo + this.sumTrupciPlemeniti[i].jamskoDrvo;
        this.sumaKoljeZaVoceLiscari = this.sumTrupciBukva[i].koljeZaVoce + this.sumTrupciPlemeniti[i].koljeZaVoce;
        this.sumaCeluloznoDrvoLiscari = this.sumTrupciBukva[i].celuloznoDrvo + this.sumTrupciPlemeniti[i].celuloznoDrvo;
        this.sumaOgrevPrveKlaseLiscari = this.sumTrupciBukva[i].ogrevPrveKlase + this.sumTrupciPlemeniti[i].ogrevPrveKlase;
        this.sumaOgrevDrugeKlaseLiscari = this.sumTrupciBukva[i].ogrevDrugeKlase + this.sumTrupciPlemeniti[i].ogrevDrugeKlase;
        this.sveukupnaDrvnaMasaLiscari = this.sumTrupciBukva[i].sveukupnaDrvnaMasa + this.sumTrupciBukva[i].sveukupnaDrvnaMasa;
        this.srednjiPrecnikLiscari = this.sumTrupciBukva[i].srednjiPrecnik + this.sumTrupciBukva[i].srednjiPrecnik;
        this.netoBukvaPlemeniti = this.sumaFTrupciLiscari + this.sumaLklaseLiscari + this.sumaPrvaKlasaLiscari +
          this.sumaDrugaKlasaLiscari + this.sumaTrecaKlasaLiscari + this.sumaStuboviLiscari + this.sumaJamskoDrvoLiscari +
          this.sumaKoljeZaVoceLiscari + this.sumaCeluloznoDrvoLiscari + this.sumaOgrevPrveKlaseLiscari +
          this.sumaOgrevDrugeKlaseLiscari;
      }
    }

    // ukupno sabiranje i loop
    if (this.sumTrupciBukva.length > 0 && this.sumTrupciPlemeniti.length > 0
      && this.sumTrupciBukva.length > 0 && this.sumTrupciPlemeniti.length > 0) {
      for (let i = 0; i < this.sumTrupciBukva.length; i++) {
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
        this.sumacetinariLiscariSveukupnaDrvnaMasa = this.sveukupnaDrvnaMasaCetinari + this.sveukupnaDrvnaMasaLiscari;
        this.netoCetinariLiscari = this.sumaCetinariLiscariFKlase + this.sumaCetinariLiscariLKlase + this.sumaCetinariLiscariPrvaKlasa +
          this.sumaCetinariLiscarDrugaKlasa + this.sumaCetinariLiscariTrecaKlasa + this.sumaCetinariLiscariStubovi +
          this.sumaCetinariLiscariJamskoDrvo + this.sumaCetinariLiscariKoljeZaVoce + this.sumaCetinariLiscariCeluloznoDrvo +
          this.sumaCetinariLiscariOgrevPrveKlase + this.sumaCetinariLiscariOgrevDrugeKlase;
      }
    }



    this.sumNormaTest = 5.10;
    this.sumTroskova = 30000;
    this.sumCjenaProjekta = this.sumTroskova / this.netoCetinariLiscari;

  }
}
