import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SumaJela } from '../../models/suma-jela.model';
import { SumaSmrca } from '../../models/suma-smrca.model';
import { SumaCetinariLiscari } from '../../models/suma-cetinari-liscari.model';
import { SumaBukva } from '../../models/suma-bukva.model';
import { SumaPlemeniti } from '../../models/suma-plemeniti.model';
import { SumaCetinari } from '../../models/suma-cetinari.model';
import { SumaLiscari } from '../../models/suma-liscari.model';

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
  netoCetinari: number;
  netoLiscari: number;

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


  constructor(public sumaJela: SumaJela, public sumaSmrca: SumaSmrca, public sumaCetinariLiscari: SumaCetinariLiscari,
              public sumaBukva: SumaBukva, public sumaPlemeniti: SumaPlemeniti, public sumaCetinari: SumaCetinari,
              public sumaLiscari: SumaLiscari) {
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


    // this.sumNormaTest = 5.10;
    // this.sumTroskova = 30000;
    // this.sumCjenaProjekta = this.sumTroskova / this.netoCetinariLiscari;
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
      this.sumaJela.fTrupci = this.sumTrupciJela[i].fTrupci;
      this.sumaJela.lKlase = this.sumTrupciJela[i].lTrupci;
      this.sumaJela.prvaKlasa = this.sumTrupciJela[i].prvaKlasa;
      this.sumaJela.drugaKlasa = this.sumTrupciJela[i].drugaKlasa;
      this.sumaJela.trecaKlasa = this.sumTrupciJela[i].trecaKlasa;
      this.sumaJela.stubovi = this.sumTrupciJela[i].stuboviZaVodove;
      this.sumaJela.jamskoDrvo = this.sumTrupciJela[i].jamskoDrvo;
      this.sumaJela.koljeZaVoce = this.sumTrupciJela[i].koljeZaVoce;
      this.sumaJela.celuloznoDrvo = this.sumTrupciJela[i].celuloznoDrvo;
      this.sumaJela.ogrevPrveKlase = this.sumTrupciJela[i].ogrevPrveKlase;
      this.sumaJela.ogrevDrugeKlase = this.sumTrupciJela[i].ogrevDrugeKlase;
      this.sumaJela.sveukupnaDrvnaMasa = this.sumTrupciJela[i].sveukupnaDrvnaMasa;
      this.sumaJela.srednjiPrecnik = this.sumTrupciJela[i].srednjiPrecnik;
      this.sumaJela.netoJela = this.sumaJela.fTrupci + this.sumaJela.lKlase + this.sumaJela.prvaKlasa +
        this.sumaJela.drugaKlasa + this.sumaJela.trecaKlasa + this.sumaJela.stubovi +
        this.sumaJela.jamskoDrvo + this.sumaJela.koljeZaVoce +
        this.sumaJela.celuloznoDrvo + this.sumaJela.ogrevPrveKlase + this.sumaJela.ogrevDrugeKlase;
      this.sumaJela.sumaCeluloze = this.sumaJela.celuloznoDrvo + this.sumaJela.koljeZaVoce;
    }
  }

  onSmrcaSelect(): void {
    for (let i = 0; i < this.sumTrupciSmrca.length; i++) {
      this.sumaSmrca.fTrupci = this.sumTrupciSmrca[i].fTrupci;
      this.sumaSmrca.lKlase = this.sumTrupciSmrca[i].lTrupci;
      this.sumaSmrca.prvaKlasa = this.sumTrupciSmrca[i].prvaKlasa;
      this.sumaSmrca.drugaKlasa = this.sumTrupciSmrca[i].drugaKlasa;
      this.sumaSmrca.trecaKlasa = this.sumTrupciSmrca[i].trecaKlasa;
      this.sumaSmrca.stubovi = this.sumTrupciSmrca[i].stuboviZaVodove;
      this.sumaSmrca.jamskoDrvo = this.sumTrupciSmrca[i].jamskoDrvo;
      this.sumaSmrca.koljeZaVoce = this.sumTrupciSmrca[i].koljeZaVoce;
      this.sumaSmrca.celuloznoDrvo = this.sumTrupciSmrca[i].celuloznoDrvo;
      this.sumaSmrca.ogrevPrveKlase = this.sumTrupciSmrca[i].ogrevPrveKlase;
      this.sumaSmrca.ogrevDrugeKlase = this.sumTrupciSmrca[i].ogrevDrugeKlase;
      this.sumaSmrca.sveukupnaDrvnaMasa = this.sumTrupciSmrca[i].sveukupnaDrvnaMasa;
      this.sumaSmrca.srednjiPrecnik = this.sumTrupciSmrca[i].srednjiPrecnik;
      this.sumaSmrca.netoSmrca = this.sumaSmrca.fTrupci + this.sumaSmrca.lKlase + this.sumaSmrca.prvaKlasa +
        this.sumaSmrca.drugaKlasa + this.sumaSmrca.trecaKlasa + this.sumaSmrca.stubovi +
        this.sumaSmrca.jamskoDrvo + this.sumaSmrca.koljeZaVoce + this.sumaSmrca.celuloznoDrvo +
        this.sumaSmrca.ogrevPrveKlase + this.sumaSmrca.ogrevDrugeKlase;
      this.sumaSmrca.sumaCeluloze = this.sumaSmrca.celuloznoDrvo + this.sumaSmrca.koljeZaVoce;
    }
  }

  sumaSvihCetinara(): void {
    if (this.sumTrupciSmrca.length <= 0) { // ako value smrce nije unesen dodjeli 0
      this.sumaSmrca.fTrupci = 0;
      this.sumaSmrca.lKlase = 0;
      this.sumaSmrca.prvaKlasa = 0;
      this.sumaSmrca.drugaKlasa = 0;
      this.sumaSmrca.trecaKlasa = 0;
      this.sumaSmrca.stubovi = 0;
      this.sumaSmrca.jamskoDrvo = 0;
      this.sumaSmrca.koljeZaVoce = 0;
      this.sumaSmrca.celuloznoDrvo = 0;
      this.sumaSmrca.ogrevPrveKlase = 0;
      this.sumaSmrca.ogrevDrugeKlase = 0;
      this.sumaSmrca.sveukupnaDrvnaMasa = 0;
      this.sumaSmrca.srednjiPrecnik = 0;
      this.sumaSmrca.netoSmrca = 0;
    }
    if (this.sumTrupciJela.length <= 0) { // ako value jele nije unesen dodjeli 0
      this.sumaJela.fTrupci = 0;
      this.sumaJela.lKlase = 0;
      this.sumaJela.prvaKlasa = 0;
      this.sumaJela.drugaKlasa = 0;
      this.sumaJela.trecaKlasa = 0;
      this.sumaJela.stubovi = 0;
      this.sumaJela.jamskoDrvo = 0;
      this.sumaJela.koljeZaVoce = 0;
      this.sumaJela.celuloznoDrvo = 0;
      this.sumaJela.ogrevPrveKlase = 0;
      this.sumaJela.ogrevDrugeKlase = 0;
      this.sumaJela.sveukupnaDrvnaMasa = 0;
      this.sumaJela.srednjiPrecnik = 0;
      this.sumaJela.netoJela = 0;
    }


    this.sumaCetinari.fKlase = this.sumaJela.fTrupci + this.sumaSmrca.fTrupci;
    this.sumaCetinari.lKlase = this.sumaJela.lKlase + this.sumaSmrca.lKlase;
    this.sumaCetinari.prvaKlasa = this.sumaJela.prvaKlasa + this.sumaSmrca.prvaKlasa;
    this.sumaCetinari.drugaKlasa = this.sumaJela.drugaKlasa + this.sumaSmrca.drugaKlasa;
    this.sumaCetinari.trecaKlasa = this.sumaJela.trecaKlasa + this.sumaSmrca.trecaKlasa;
    this.sumaCetinari.stubovi = this.sumaJela.stubovi + this.sumaSmrca.stubovi;
    this.sumaCetinari.jamskoDrvo = this.sumaJela.jamskoDrvo + this.sumaSmrca.jamskoDrvo;
    this.sumaCetinari.koljeZaVoce = this.sumaJela.koljeZaVoce + this.sumaSmrca.koljeZaVoce;
    this.sumaCetinari.celuloznoDrvo = this.sumaJela.celuloznoDrvo + this.sumaSmrca.celuloznoDrvo;
    this.sumaCetinari.ogrevPrveKlase = this.sumaJela.ogrevPrveKlase + this.sumaSmrca.ogrevPrveKlase;
    this.sumaCetinari.ogrevDrugeKlase = this.sumaJela.ogrevDrugeKlase + this.sumaSmrca.ogrevDrugeKlase;
    this.sumaCetinari.sveukupnaDrvnaMasa = this.sumaJela.sveukupnaDrvnaMasa + this.sumaSmrca.sveukupnaDrvnaMasa;
    this.sumaCetinari.srednjiPrecnik = this.sumaJela.srednjiPrecnik + this.sumaSmrca.srednjiPrecnik;
    this.sumaCetinari.netoCetinara = this.sumaCetinari.fKlase + this.sumaCetinari.lKlase + this.sumaCetinari.prvaKlasa +
      this.sumaCetinari.drugaKlasa + this.sumaCetinari.trecaKlasa + this.sumaCetinari.stubovi + this.sumaCetinari.jamskoDrvo +
      this.sumaCetinari.koljeZaVoce + this.sumaCetinari.celuloznoDrvo + this.sumaCetinari.ogrevPrveKlase +
      this.sumaCetinari.ogrevDrugeKlase;
  }

  onBukvaSelect(): void {
    for (let i = 0; i < this.sumTrupciBukva.length; i++) {
      this.sumaBukva.fTrupci = this.sumTrupciBukva[i].fTrupci;
      this.sumaBukva.lKlase = this.sumTrupciBukva[i].lTrupci;
      this.sumaBukva.prvaKlasa = this.sumTrupciBukva[i].prvaKlasa;
      this.sumaBukva.drugaKlasa = this.sumTrupciBukva[i].drugaKlasa;
      this.sumaBukva.trecaKlasa = this.sumTrupciBukva[i].trecaKlasa;
      this.sumaBukva.stubovi = this.sumTrupciBukva[i].stuboviZaVodove;
      this.sumaBukva.jamskoDrvo = this.sumTrupciBukva[i].jamskoDrvo;
      this.sumaBukva.koljeZaVoce = this.sumTrupciBukva[i].koljeZaVoce;
      this.sumaBukva.celuloznoDrvo = this.sumTrupciBukva[i].celuloznoDrvo;
      this.sumaBukva.ogrevPrveKlase = this.sumTrupciBukva[i].ogrevPrveKlase;
      this.sumaBukva.ogrevDrugeKlase = this.sumTrupciBukva[i].ogrevDrugeKlase;
      this.sumaBukva.sveukupnaDrvnaMasa = this.sumTrupciBukva[i].sveukupnaDrvnaMasa;
      this.sumaBukva.srednjiPrecnik = this.sumTrupciBukva[i].srednjiPrecnik;
      this.sumaBukva.netoBukva = this.sumaBukva.fTrupci + this.sumaBukva.lKlase + this.sumaBukva.prvaKlasa + this.sumaBukva.drugaKlasa +
        this.sumaBukva.trecaKlasa + this.sumaBukva.stubovi + this.sumaBukva.jamskoDrvo + this.sumaBukva.koljeZaVoce +
        this.sumaBukva.celuloznoDrvo + this.sumaBukva.ogrevPrveKlase + this.sumaBukva.ogrevDrugeKlase;
      this.sumaBukva.netoOgrev = this.sumaBukva.celuloznoDrvo + this.sumaBukva.ogrevPrveKlase + this.sumaBukva.ogrevDrugeKlase;
    }
  }

  onPlemenitiSelect(): void {
    for (let i = 0; i < this.sumTrupciPlemeniti.length; i++) {
      this.sumaPlemeniti.fTrupci = this.sumTrupciPlemeniti[i].fTrupci;
      this.sumaPlemeniti.lKlase = this.sumTrupciPlemeniti[i].lTrupci;
      this.sumaPlemeniti.prvaKlasa = this.sumTrupciPlemeniti[i].prvaKlasa;
      this.sumaPlemeniti.drugaKlasa = this.sumTrupciPlemeniti[i].drugaKlasa;
      this.sumaPlemeniti.trecaKlasa = this.sumTrupciPlemeniti[i].trecaKlasa;
      this.sumaPlemeniti.stubovi = this.sumTrupciPlemeniti[i].stuboviZaVodove;
      this.sumaPlemeniti.jamskoDrvo = this.sumTrupciPlemeniti[i].jamskoDrvo;
      this.sumaPlemeniti.koljeZaVoce = this.sumTrupciPlemeniti[i].koljeZaVoce;
      this.sumaPlemeniti.celuloznoDrvo = this.sumTrupciPlemeniti[i].celuloznoDrvo;
      this.sumaPlemeniti.ogrevPrveKlase = this.sumTrupciPlemeniti[i].ogrevPrveKlase;
      this.sumaPlemeniti.ogrevDrugeKlase = this.sumTrupciPlemeniti[i].ogrevDrugeKlase;
      this.sumaPlemeniti.sveukupnaDrvnaMasa = this.sumTrupciPlemeniti[i].sveukupnaDrvnaMasa;
      this.sumaPlemeniti.srednjiPrecnik = this.sumTrupciPlemeniti[i].srednjiPrecnik;
      this.sumaPlemeniti.netoPlemeniti = this.sumaPlemeniti.fTrupci + this.sumaPlemeniti.lKlase + this.sumaPlemeniti.prvaKlasa +
        this.sumaPlemeniti.drugaKlasa + this.sumaPlemeniti.trecaKlasa + this.sumaPlemeniti.stubovi +
        this.sumaPlemeniti.jamskoDrvo + this.sumaPlemeniti.koljeZaVoce + this.sumaPlemeniti.celuloznoDrvo +
        this.sumaPlemeniti.ogrevPrveKlase + this.sumaPlemeniti.ogrevDrugeKlase;
    }
  }

  sumaSvihLiscara(): void {
    if (this.sumTrupciBukva.length <= 0) {
      this.sumaBukva.fTrupci = 0;
      this.sumaBukva.lKlase = 0;
      this.sumaBukva.prvaKlasa = 0;
      this.sumaBukva.drugaKlasa = 0;
      this.sumaBukva.trecaKlasa = 0;
      this.sumaBukva.stubovi = 0;
      this.sumaBukva.jamskoDrvo = 0;
      this.sumaBukva.koljeZaVoce = 0;
      this.sumaBukva.celuloznoDrvo = 0;
      this.sumaBukva.ogrevPrveKlase = 0;
      this.sumaBukva.ogrevDrugeKlase = 0;
      this.sumaBukva.sveukupnaDrvnaMasa = 0;
      this.sumaBukva.srednjiPrecnik = 0;
      this.sumaBukva.netoBukva = 0;
    }
    if (this.sumTrupciPlemeniti.length <= 0) {
      this.sumaPlemeniti.fTrupci = 0;
      this.sumaPlemeniti.lKlase = 0;
      this.sumaPlemeniti.prvaKlasa = 0;
      this.sumaPlemeniti.drugaKlasa = 0;
      this.sumaPlemeniti.trecaKlasa = 0;
      this.sumaPlemeniti.stubovi = 0;
      this.sumaPlemeniti.jamskoDrvo = 0;
      this.sumaPlemeniti.koljeZaVoce = 0;
      this.sumaPlemeniti.celuloznoDrvo = 0;
      this.sumaPlemeniti.ogrevPrveKlase = 0;
      this.sumaPlemeniti.ogrevDrugeKlase = 0;
      this.sumaPlemeniti.sveukupnaDrvnaMasa = 0;
      this.sumaPlemeniti.srednjiPrecnik = 0;
      this.sumaPlemeniti.netoPlemeniti = 0;
    }


    this.sumaLiscari.fKlase = this.sumaBukva.fTrupci + this.sumaPlemeniti.fTrupci;
    this.sumaLiscari.lKlase = this.sumaBukva.lKlase + this.sumaPlemeniti.lKlase;
    this.sumaLiscari.prvaKlasa = this.sumaBukva.prvaKlasa + this.sumaPlemeniti.prvaKlasa;
    this.sumaLiscari.drugaKlasa = this.sumaBukva.drugaKlasa + this.sumaPlemeniti.drugaKlasa;
    this.sumaLiscari.trecaKlasa = this.sumaBukva.trecaKlasa + this.sumaPlemeniti.trecaKlasa;
    this.sumaLiscari.stubovi = this.sumaBukva.stubovi + this.sumaPlemeniti.stubovi;
    this.sumaLiscari.jamskoDrvo = this.sumaBukva.jamskoDrvo + this.sumaPlemeniti.jamskoDrvo;
    this.sumaLiscari.koljeZaVoce = this.sumaBukva.koljeZaVoce + this.sumaPlemeniti.koljeZaVoce;
    this.sumaLiscari.celuloznoDrvo = this.sumaBukva.celuloznoDrvo + this.sumaPlemeniti.celuloznoDrvo;
    this.sumaLiscari.ogrevPrveKlase = this.sumaBukva.ogrevPrveKlase + this.sumaPlemeniti.ogrevPrveKlase;
    this.sumaLiscari.ogrevDrugeKlase = this.sumaBukva.ogrevDrugeKlase + this.sumaPlemeniti.ogrevDrugeKlase;
    this.sumaLiscari.sveukupnaDrvnaMasa = this.sumaBukva.sveukupnaDrvnaMasa + this.sumaPlemeniti.sveukupnaDrvnaMasa;
    this.sumaLiscari.srednjiPrecnik = this.sumaBukva.srednjiPrecnik + this.sumaPlemeniti.srednjiPrecnik;
    this.sumaLiscari.netoLiscari = this.sumaLiscari.fKlase + this.sumaLiscari.lKlase + this.sumaLiscari.prvaKlasa +
      this.sumaLiscari.drugaKlasa + this.sumaLiscari.trecaKlasa + this.sumaLiscari.stubovi + this.sumaLiscari.jamskoDrvo +
      this.sumaLiscari.koljeZaVoce + this.sumaLiscari.celuloznoDrvo + this.sumaLiscari.ogrevPrveKlase + this.sumaLiscari.ogrevDrugeKlase;
  }

  sumaLiscaraCetinara(): void {
    this.sumaSvihCetinara();
    this.sumaSvihLiscara();


    this.sumaCetinariLiscari.fKlase = this.sumaCetinari.fKlase + this.sumaLiscari.fKlase;
    this.sumaCetinariLiscari.lKlase = this.sumaCetinari.lKlase + this.sumaLiscari.lKlase;
    this.sumaCetinariLiscari.prvaKlasa = this.sumaCetinari.prvaKlasa + this.sumaLiscari.prvaKlasa;
    this.sumaCetinariLiscari.drugaKlasa = this.sumaCetinari.drugaKlasa + this.sumaLiscari.drugaKlasa;
    this.sumaCetinariLiscari.trecaKlasa = this.sumaCetinari.trecaKlasa + this.sumaLiscari.trecaKlasa;
    this.sumaCetinariLiscari.stubovi = this.sumaCetinari.stubovi + this.sumaLiscari.stubovi;
    this.sumaCetinariLiscari.jamskoDrvo = this.sumaCetinari.jamskoDrvo + this.sumaLiscari.jamskoDrvo;
    this.sumaCetinariLiscari.koljeZaVoce = this.sumaCetinari.koljeZaVoce + this.sumaLiscari.koljeZaVoce;
    this.sumaCetinariLiscari.celuloznoDrvo = this.sumaCetinari.celuloznoDrvo + this.sumaLiscari.celuloznoDrvo;
    this.sumaCetinariLiscari.ogrevPrveKlase = this.sumaCetinari.ogrevPrveKlase + this.sumaLiscari.ogrevPrveKlase;
    this.sumaCetinariLiscari.ogrevDrugeKlase = this.sumaCetinari.ogrevDrugeKlase + this.sumaLiscari.ogrevDrugeKlase;
    this.sumaCetinariLiscari.sveukupnaDrvnaMasa = this.sumaCetinari.sveukupnaDrvnaMasa + this.sumaLiscari.sveukupnaDrvnaMasa;
    this.sumaCetinariLiscari.srednjiPrecnik = this.sumaCetinari.srednjiPrecnik + this.sumaLiscari.srednjiPrecnik;
    this.sumaCetinariLiscari.netoCetinariLiscari = this.sumaCetinariLiscari.fKlase + this.sumaCetinariLiscari.lKlase +
      this.sumaCetinariLiscari.prvaKlasa + this.sumaCetinariLiscari.drugaKlasa +
      this.sumaCetinariLiscari.trecaKlasa + this.sumaCetinariLiscari.stubovi +
      this.sumaCetinariLiscari.jamskoDrvo + this.sumaCetinariLiscari.koljeZaVoce +
      this.sumaCetinariLiscari.celuloznoDrvo + this.sumaCetinariLiscari.ogrevPrveKlase +
      this.sumaCetinariLiscari.ogrevDrugeKlase;
  }
}
