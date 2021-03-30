import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Jela } from '../../models/jela.model';
import { Smrca } from '../../models/smrca.model';
import { CetinariLiscari } from '../../models/cetinari-liscari.model';
import { Bukva } from '../../models/bukva.model';
import { Plemeniti } from '../../models/plemeniti.model';
import { Cetinari } from '../../models/cetinari.model';
import { Liscari } from '../../models/liscari.model';

@Component({
  selector: 'app-sortimenti',
  templateUrl: './sortimenti.component.html',
  styleUrls: ['./sortimenti.component.css']
})
export class SortimentiComponent implements OnInit {
  vrstaSlika;
  showVrstaImage = false;
  trupciJela = [];
  trupciSmrca = [];
  trupciBukva = [];
  trupciPlemeniti = [];
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


  constructor(public jela: Jela, public smrca: Smrca, public cetinariLiscari: CetinariLiscari,
              public bukva: Bukva, public plemeniti: Plemeniti, public cetinari: Cetinari,
              public liscari: Liscari) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    const izabranaVrsta = this.sortimentiFormGroup.get('izabranaVrsta').value;

    if (izabranaVrsta === '21') {
      this.trupciJela.push(this.sortimentiFormGroup.value);
      this.onJelaSelect();
      this.sumaSvihCetinara();
      this.sumaLiscaraCetinara();
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '22') {
      this.trupciSmrca.push(this.sortimentiFormGroup.value);
      this.onSmrcaSelect();
      this.sumaSvihCetinara();
      this.sumaLiscaraCetinara();
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '41') {
      this.trupciBukva.push(this.sortimentiFormGroup.value);
      this.onBukvaSelect();
      this.sumaSvihLiscara();
      this.sumaLiscaraCetinara();
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '50') {
      this.trupciPlemeniti.push(this.sortimentiFormGroup.value);
      this.onPlemenitiSelect();
      this.sumaSvihLiscara();
      this.sumaLiscaraCetinara();
      this.sortimentiFormGroup.reset();
    }
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
    for (let i = 0; i < this.trupciJela.length; i++) {
      this.jela.fTrupci = this.trupciJela[i].fTrupci;
      this.jela.prvaKlasa = this.trupciJela[i].prvaKlasa;
      this.jela.drugaKlasa = this.trupciJela[i].drugaKlasa;
      this.jela.trecaKlasa = this.trupciJela[i].trecaKlasa;
      this.jela.stubovi = this.trupciJela[i].stuboviZaVodove;
      this.jela.jamskoDrvo = this.trupciJela[i].jamskoDrvo;
      this.jela.koljeZaVoce = this.trupciJela[i].koljeZaVoce;
      this.jela.celuloznoDrvo = this.trupciJela[i].celuloznoDrvo;
      this.jela.sveukupnaDrvnaMasa = this.trupciJela[i].sveukupnaDrvnaMasa;
      this.jela.srednjiPrecnik = this.trupciJela[i].srednjiPrecnik;
      this.jela.netoJela = this.jela.fTrupci + this.jela.prvaKlasa +
        this.jela.drugaKlasa + this.jela.trecaKlasa + this.jela.stubovi +
        this.jela.jamskoDrvo + this.jela.koljeZaVoce +
        this.jela.celuloznoDrvo;
      // this.jela.sumaCeluloze = this.jela.celuloznoDrvo + this.jela.koljeZaVoce;
    }
  }

  onSmrcaSelect(): void {
    for (let i = 0; i < this.trupciSmrca.length; i++) {
      this.smrca.fTrupci = this.trupciSmrca[i].fTrupci;
      this.smrca.prvaKlasa = this.trupciSmrca[i].prvaKlasa;
      this.smrca.drugaKlasa = this.trupciSmrca[i].drugaKlasa;
      this.smrca.trecaKlasa = this.trupciSmrca[i].trecaKlasa;
      this.smrca.stubovi = this.trupciSmrca[i].stuboviZaVodove;
      this.smrca.jamskoDrvo = this.trupciSmrca[i].jamskoDrvo;
      this.smrca.koljeZaVoce = this.trupciSmrca[i].koljeZaVoce;
      this.smrca.celuloznoDrvo = this.trupciSmrca[i].celuloznoDrvo;
      this.smrca.sveukupnaDrvnaMasa = this.trupciSmrca[i].sveukupnaDrvnaMasa;
      this.smrca.srednjiPrecnik = this.trupciSmrca[i].srednjiPrecnik;
      this.smrca.netoSmrca = this.smrca.fTrupci + this.smrca.prvaKlasa +
        this.smrca.drugaKlasa + this.smrca.trecaKlasa + this.smrca.stubovi +
        this.smrca.jamskoDrvo + this.smrca.koljeZaVoce + this.smrca.celuloznoDrvo;
      // this.smrca.sumaCeluloze = this.smrca.celuloznoDrvo + this.smrca.koljeZaVoce;
    }
  }

  sumaSvihCetinara(): void {
    if (this.trupciSmrca.length <= 0) { // ako value smrce nije unesen dodjeli 0
      this.smrca.fTrupci = 0;
      this.smrca.prvaKlasa = 0;
      this.smrca.drugaKlasa = 0;
      this.smrca.trecaKlasa = 0;
      this.smrca.stubovi = 0;
      this.smrca.jamskoDrvo = 0;
      this.smrca.koljeZaVoce = 0;
      this.smrca.celuloznoDrvo = 0;
      this.smrca.sveukupnaDrvnaMasa = 0;
      this.smrca.srednjiPrecnik = 0;
      this.smrca.netoSmrca = 0;
    }
    if (this.trupciJela.length <= 0) { // ako value jele nije unesen dodjeli 0
      this.jela.fTrupci = 0;
      this.jela.prvaKlasa = 0;
      this.jela.drugaKlasa = 0;
      this.jela.trecaKlasa = 0;
      this.jela.stubovi = 0;
      this.jela.jamskoDrvo = 0;
      this.jela.koljeZaVoce = 0;
      this.jela.celuloznoDrvo = 0;
      this.jela.sveukupnaDrvnaMasa = 0;
      this.jela.srednjiPrecnik = 0;
      this.jela.netoJela = 0;
    }


    this.cetinari.fKlase = this.jela.fTrupci + this.smrca.fTrupci;
    this.cetinari.prvaKlasa = this.jela.prvaKlasa + this.smrca.prvaKlasa;
    this.cetinari.drugaKlasa = this.jela.drugaKlasa + this.smrca.drugaKlasa;
    this.cetinari.trecaKlasa = this.jela.trecaKlasa + this.smrca.trecaKlasa;
    this.cetinari.stubovi = this.jela.stubovi + this.smrca.stubovi;
    this.cetinari.jamskoDrvo = this.jela.jamskoDrvo + this.smrca.jamskoDrvo;
    this.cetinari.koljeZaVoce = this.jela.koljeZaVoce + this.smrca.koljeZaVoce;
    this.cetinari.celuloznoDrvo = this.jela.celuloznoDrvo + this.smrca.celuloznoDrvo;
    this.cetinari.sveukupnaDrvnaMasa = this.jela.sveukupnaDrvnaMasa + this.smrca.sveukupnaDrvnaMasa;

    if (this.jela.srednjiPrecnik === 0) {
      this.cetinari.srednjiPrecnik = this.smrca.srednjiPrecnik;
    } else if (this.smrca.srednjiPrecnik === 0) {
      this.cetinari.srednjiPrecnik = this.jela.srednjiPrecnik;
    } else {
      this.cetinari.srednjiPrecnik = (this.jela.srednjiPrecnik + this.smrca.srednjiPrecnik) / 2;
    }

    this.cetinari.netoCetinara = this.cetinari.fKlase + this.cetinari.prvaKlasa +
      this.cetinari.drugaKlasa + this.cetinari.trecaKlasa + this.cetinari.stubovi + this.cetinari.jamskoDrvo +
      this.cetinari.koljeZaVoce + this.cetinari.celuloznoDrvo;
  }

  onBukvaSelect(): void {
    for (let i = 0; i < this.trupciBukva.length; i++) {
      this.bukva.fTrupci = this.trupciBukva[i].fTrupci;
      this.bukva.lKlase = this.trupciBukva[i].lTrupci;
      this.bukva.prvaKlasa = this.trupciBukva[i].prvaKlasa;
      this.bukva.drugaKlasa = this.trupciBukva[i].drugaKlasa;
      this.bukva.trecaKlasa = this.trupciBukva[i].trecaKlasa;
      this.bukva.celuloznoDrvo = this.trupciBukva[i].celuloznoDrvo;
      this.bukva.ogrevPrveKlase = this.trupciBukva[i].ogrevPrveKlase;
      this.bukva.ogrevDrugeKlase = this.trupciBukva[i].ogrevDrugeKlase;
      this.bukva.sveukupnaDrvnaMasa = this.trupciBukva[i].sveukupnaDrvnaMasa;
      this.bukva.srednjiPrecnik = this.trupciBukva[i].srednjiPrecnik;
      this.bukva.netoBukva = this.bukva.fTrupci + this.bukva.lKlase + this.bukva.prvaKlasa + this.bukva.drugaKlasa +
        this.bukva.trecaKlasa + this.bukva.celuloznoDrvo + this.bukva.ogrevPrveKlase + this.bukva.ogrevDrugeKlase;
      this.bukva.netoOgrev = this.bukva.celuloznoDrvo + this.bukva.ogrevPrveKlase + this.bukva.ogrevDrugeKlase;
    }
  }

  onPlemenitiSelect(): void {
    for (let i = 0; i < this.trupciPlemeniti.length; i++) {
      this.plemeniti.fTrupci = this.trupciPlemeniti[i].fTrupci;
      this.plemeniti.lKlase = this.trupciPlemeniti[i].lTrupci;
      this.plemeniti.prvaKlasa = this.trupciPlemeniti[i].prvaKlasa;
      this.plemeniti.drugaKlasa = this.trupciPlemeniti[i].drugaKlasa;
      this.plemeniti.trecaKlasa = this.trupciPlemeniti[i].trecaKlasa;
      this.plemeniti.celuloznoDrvo = this.trupciPlemeniti[i].celuloznoDrvo;
      this.plemeniti.ogrevPrveKlase = this.trupciPlemeniti[i].ogrevPrveKlase;
      this.plemeniti.ogrevDrugeKlase = this.trupciPlemeniti[i].ogrevDrugeKlase;
      this.plemeniti.sveukupnaDrvnaMasa = this.trupciPlemeniti[i].sveukupnaDrvnaMasa;
      this.plemeniti.srednjiPrecnik = this.trupciPlemeniti[i].srednjiPrecnik;
      this.plemeniti.netoPlemeniti = this.plemeniti.fTrupci + this.plemeniti.lKlase + this.plemeniti.prvaKlasa +
        this.plemeniti.drugaKlasa + this.plemeniti.trecaKlasa + this.plemeniti.celuloznoDrvo +
        this.plemeniti.ogrevPrveKlase + this.plemeniti.ogrevDrugeKlase;
    }
  }

  sumaSvihLiscara(): void {
    if (this.trupciBukva.length <= 0) {
      this.bukva.fTrupci = 0;
      this.bukva.lKlase = 0;
      this.bukva.prvaKlasa = 0;
      this.bukva.drugaKlasa = 0;
      this.bukva.trecaKlasa = 0;
      this.bukva.celuloznoDrvo = 0;
      this.bukva.ogrevPrveKlase = 0;
      this.bukva.ogrevDrugeKlase = 0;
      this.bukva.sveukupnaDrvnaMasa = 0;
      this.bukva.srednjiPrecnik = 0;
      this.bukva.netoBukva = 0;
    }
    if (this.trupciPlemeniti.length <= 0) {
      this.plemeniti.fTrupci = 0;
      this.plemeniti.lKlase = 0;
      this.plemeniti.prvaKlasa = 0;
      this.plemeniti.drugaKlasa = 0;
      this.plemeniti.trecaKlasa = 0;
      this.plemeniti.celuloznoDrvo = 0;
      this.plemeniti.ogrevPrveKlase = 0;
      this.plemeniti.ogrevDrugeKlase = 0;
      this.plemeniti.sveukupnaDrvnaMasa = 0;
      this.plemeniti.srednjiPrecnik = 0;
      this.plemeniti.netoPlemeniti = 0;
    }


    this.liscari.fKlase = this.bukva.fTrupci + this.plemeniti.fTrupci;
    this.liscari.lKlase = this.bukva.lKlase + this.plemeniti.lKlase;
    this.liscari.prvaKlasa = this.bukva.prvaKlasa + this.plemeniti.prvaKlasa;
    this.liscari.drugaKlasa = this.bukva.drugaKlasa + this.plemeniti.drugaKlasa;
    this.liscari.trecaKlasa = this.bukva.trecaKlasa + this.plemeniti.trecaKlasa;
    this.liscari.celuloznoDrvo = this.bukva.celuloznoDrvo + this.plemeniti.celuloznoDrvo;
    this.liscari.ogrevPrveKlase = this.bukva.ogrevPrveKlase + this.plemeniti.ogrevPrveKlase;
    this.liscari.ogrevDrugeKlase = this.bukva.ogrevDrugeKlase + this.plemeniti.ogrevDrugeKlase;
    this.liscari.sveukupnaDrvnaMasa = this.bukva.sveukupnaDrvnaMasa + this.plemeniti.sveukupnaDrvnaMasa;

    if (this.bukva.srednjiPrecnik === 0) {
      this.liscari.srednjiPrecnik = this.plemeniti.srednjiPrecnik;
    } else if (this.plemeniti.srednjiPrecnik === 0) {
      this.liscari.srednjiPrecnik = this.bukva.srednjiPrecnik;
    } else {
      this.liscari.srednjiPrecnik = (this.bukva.srednjiPrecnik + this.plemeniti.srednjiPrecnik) / 2;
    }

    this.liscari.netoLiscari = this.liscari.fKlase + this.liscari.lKlase + this.liscari.prvaKlasa +
      this.liscari.drugaKlasa + this.liscari.trecaKlasa + this.liscari.celuloznoDrvo + this.liscari.ogrevPrveKlase +
      this.liscari.ogrevDrugeKlase;
  }

  sumaLiscaraCetinara(): void {
    this.sumaSvihCetinara();
    this.sumaSvihLiscara();


    this.cetinariLiscari.fKlase = this.cetinari.fKlase + this.liscari.fKlase;
    this.cetinariLiscari.lKlase = this.liscari.lKlase;
    this.cetinariLiscari.prvaKlasa = this.cetinari.prvaKlasa + this.liscari.prvaKlasa;
    this.cetinariLiscari.drugaKlasa = this.cetinari.drugaKlasa + this.liscari.drugaKlasa;
    this.cetinariLiscari.trecaKlasa = this.cetinari.trecaKlasa + this.liscari.trecaKlasa;
    this.cetinariLiscari.stubovi = this.cetinari.stubovi;
    this.cetinariLiscari.jamskoDrvo = this.cetinari.jamskoDrvo;
    this.cetinariLiscari.koljeZaVoce = this.cetinari.koljeZaVoce;
    this.cetinariLiscari.celuloznoDrvo = this.cetinari.celuloznoDrvo + this.liscari.celuloznoDrvo;
    this.cetinariLiscari.ogrevPrveKlase = this.liscari.ogrevPrveKlase;
    this.cetinariLiscari.ogrevDrugeKlase = this.liscari.ogrevDrugeKlase;
    this.cetinariLiscari.sveukupnaDrvnaMasa = this.cetinari.sveukupnaDrvnaMasa + this.liscari.sveukupnaDrvnaMasa;
    this.cetinariLiscari.srednjiPrecnik = this.cetinari.srednjiPrecnik + this.liscari.srednjiPrecnik;
    this.cetinariLiscari.netoCetinariLiscari = this.cetinariLiscari.fKlase + this.cetinariLiscari.lKlase +
      this.cetinariLiscari.prvaKlasa + this.cetinariLiscari.drugaKlasa +
      this.cetinariLiscari.trecaKlasa + this.cetinariLiscari.stubovi + this.cetinariLiscari.jamskoDrvo +
      this.cetinariLiscari.koljeZaVoce + this.cetinariLiscari.celuloznoDrvo + this.cetinariLiscari.ogrevPrveKlase +
      this.cetinariLiscari.ogrevDrugeKlase;
  }
}
