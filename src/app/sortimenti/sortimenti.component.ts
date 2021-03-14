import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sortimenti',
  templateUrl: './sortimenti.component.html',
  styleUrls: ['./sortimenti.component.css']
})
export class SortimentiComponent implements OnInit {
  sumTrupciJela = [];
  sumTrupciSmrca = [];
  sumTrupciBukva = [];
  sumTrupciPlemeniti = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  sumCetinariLiscari: number;
  sumNormaTest: number;
  sumTroskova: number;
  sumCjenaProjekta: number;
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
    }
  );

  jelaFklase: number;
  jelaLklase: number;
  jelaPrvaKlasa: number;
  jelaDrugaKlasa: number;
  jelaTrecaKlasa: number;
  jelaStubovi: number;
  jelaJamskoDrvo: number;
  jelaKoljeZaVoce: number;
  jelaCeluloznoDrvo: number;
  jelaOgrevPrveKlase: number;
  jelaOgrevDrugeKlase: number;

  smrcaFklase: number;
  smrcaLklase: number;
  smrcaPrvaKlasa: number;
  smrcaDrugaKlasa: number;
  smrcaTrecaKlasa: number;
  smrcaStubovi: number;
  smrcaJamskoDrvo: number;
  smrcaKoljeZaVoce: number;
  smrcaCeluloznoDrvo: number;
  smrcaOgrevPrveKlase: number;
  smrcaOgrevDrugeKlase: number;

  bukvaFklase: number;
  bukvaLklase: number;
  bukvaPrvaKlasa: number;
  bukvaDrugaKlasa: number;
  bukvaTrecaKlasa: number;
  bukvaStubovi: number;
  bukvaJamskoDrvo: number;
  bukvaKoljeZaVoce: number;
  bukvaCeluloznoDrvo: number;
  bukvaOgrevPrveKlase: number;
  bukvaOgrevDrugeKlase: number;

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

  constructor() {
  }

  ngOnInit(): void {
  }


  onSubmit(): void {
    // console.log(this.sortimentiFormGroup.value);

    const izabranaVrsta = this.sortimentiFormGroup.get('izabranaVrsta').value;
    // const novaFtrupci = this.sortimentiFormGroup.get('fTrupci').value;
    // const novaLtrupci = this.sortimentiFormGroup.get('lTrupci').value;
    // const novaPrvaKlasa = this.sortimentiFormGroup.get('prvaKlasa').value;
    // const novaDrugaKlasa = this.sortimentiFormGroup.get('drugaKlasa').value;
    // const novaTrecaKlasa = this.sortimentiFormGroup.get('trecaKlasa').value;
    // const novaStuboviZaVodove = this.sortimentiFormGroup.get('stuboviZaVodove').value;
    // const novaJamskoDrvo = this.sortimentiFormGroup.get('jamskoDrvo').value;
    // const novaKoljeZaVoce = this.sortimentiFormGroup.get('koljeZaVoce').value;
    // const novaCeluloznoDrvo = this.sortimentiFormGroup.get('celuloznoDrvo').value;
    // const novaOgrevPrveKlase = this.sortimentiFormGroup.get('ogrevPrveKlase').value;
    // const novaOgrevDrugeKlase = this.sortimentiFormGroup.get('ogrevDrugeKlase').value;
    //
    //
    // this.sumNetoKlasa = novaFtrupci + novaLtrupci + novaPrvaKlasa + novaDrugaKlasa + novaTrecaKlasa +
    //   novaStuboviZaVodove + novaJamskoDrvo + novaKoljeZaVoce + novaCeluloznoDrvo +
    //   novaOgrevPrveKlase + novaOgrevDrugeKlase;

    if (izabranaVrsta === '21') {
      this.sumTrupciJela.push(this.sortimentiFormGroup.value);
      console.log('Unesi smrcu');
    } else if (izabranaVrsta === '22') {
      this.sumTrupciSmrca.push(this.sortimentiFormGroup.value);
      console.log('Unesi Bukvu');
    } else if (izabranaVrsta === '41') {
      this.sumTrupciBukva.push(this.sortimentiFormGroup.value);
      // console.log('Unesi plemenite');
    } else {
      this.sumTrupciPlemeniti.push(this.sortimentiFormGroup.value);
    }


    if (this.sumTrupciJela.length > 0 && this.sumTrupciSmrca.length > 0 && this.sumTrupciBukva.length > 0) {
      for (let i = 0; i < this.sumTrupciJela.length; i++) {

        this.jelaFklase = this.sumTrupciJela[i].fTrupci;
        this.jelaLklase = this.sumTrupciJela[i].lTrupci;
        this.jelaPrvaKlasa = this.sumTrupciJela[i].prvaKlasa;
        this.jelaDrugaKlasa = this.sumTrupciJela[i].drugaKlasa;
        this.jelaTrecaKlasa = this.sumTrupciJela[i].trecaKlasa;
        this.jelaStubovi = this.sumTrupciJela[i].stuboviZaVodove;
        this.jelaJamskoDrvo = this.sumTrupciJela[i].jamskoDrvo;
        this.jelaKoljeZaVoce = this.sumTrupciJela[i].koljeZaVoce;
        this.jelaCeluloznoDrvo = this.sumTrupciJela[i].celuloznoDrvo;
        this.jelaOgrevPrveKlase = this.sumTrupciJela[i].ogrevPrveKlase;
        this.jelaOgrevDrugeKlase = this.sumTrupciJela[i].ogrevDrugeKlase;

        const sumaJele = this.jelaFklase + this.jelaLklase + this.jelaPrvaKlasa +
          this.jelaDrugaKlasa + this.jelaTrecaKlasa + this.jelaStubovi +
          this.jelaJamskoDrvo + this.jelaKoljeZaVoce + this.jelaCeluloznoDrvo
          + this.jelaOgrevPrveKlase + this.jelaOgrevDrugeKlase;

        this.smrcaFklase = this.sumTrupciSmrca[i].fTrupci;
        this.smrcaLklase = this.sumTrupciSmrca[i].lTrupci;
        this.smrcaPrvaKlasa = this.sumTrupciSmrca[i].prvaKlasa;
        this.smrcaDrugaKlasa = this.sumTrupciSmrca[i].drugaKlasa;
        this.smrcaTrecaKlasa = this.sumTrupciSmrca[i].trecaKlasa;
        this.smrcaStubovi = this.sumTrupciSmrca[i].stuboviZaVodove;
        this.smrcaJamskoDrvo = this.sumTrupciSmrca[i].jamskoDrvo;
        this.smrcaKoljeZaVoce = this.sumTrupciSmrca[i].koljeZaVoce;
        this.smrcaCeluloznoDrvo = this.sumTrupciSmrca[i].celuloznoDrvo;
        this.smrcaOgrevPrveKlase = this.sumTrupciSmrca[i].ogrevPrveKlase;
        this.smrcaOgrevDrugeKlase = this.sumTrupciSmrca[i].ogrevDrugeKlase;

        const sumaSmrce = this.smrcaFklase + this.smrcaLklase + this.smrcaPrvaKlasa +
          this.smrcaDrugaKlasa + this.smrcaTrecaKlasa + this.smrcaStubovi +
          this.smrcaJamskoDrvo + this.smrcaKoljeZaVoce + this.smrcaCeluloznoDrvo +
          this.smrcaOgrevPrveKlase + this.smrcaOgrevDrugeKlase;

        this.bukvaFklase = this.sumTrupciBukva[i].fTrupci;
        this.bukvaLklase = this.sumTrupciBukva[i].lTrupci;
        this.bukvaPrvaKlasa = this.sumTrupciBukva[i].prvaKlasa;
        this.bukvaDrugaKlasa = this.sumTrupciBukva[i].drugaKlasa;
        this.bukvaTrecaKlasa = this.sumTrupciBukva[i].trecaKlasa;
        this.bukvaStubovi = this.sumTrupciBukva[i].stuboviZaVodove;
        this.bukvaJamskoDrvo = this.sumTrupciBukva[i].jamskoDrvo;
        this.bukvaKoljeZaVoce = this.sumTrupciBukva[i].koljeZaVoce;
        this.bukvaCeluloznoDrvo = this.sumTrupciBukva[i].celuloznoDrvo;
        this.bukvaOgrevPrveKlase = this.sumTrupciBukva[i].ogrevPrveKlase;
        this.bukvaOgrevDrugeKlase = this.sumTrupciBukva[i].ogrevDrugeKlase;

        const sumaBukve = this.bukvaFklase + this.bukvaLklase + this.bukvaPrvaKlasa +
          this.bukvaDrugaKlasa + this.bukvaTrecaKlasa + this.bukvaStubovi +
          this.bukvaJamskoDrvo + this.bukvaKoljeZaVoce + this.bukvaCeluloznoDrvo +
          this.bukvaOgrevPrveKlase + this.bukvaOgrevDrugeKlase;

        const cetinariFklase = this.jelaFklase + this.smrcaFklase;
        const cetinariLklase = this.jelaLklase + this.smrcaLklase;
        const cetinariPrvaKlasa = this.jelaPrvaKlasa + this.smrcaPrvaKlasa;
        const cetinariDrugaKlasa = this.jelaDrugaKlasa + this.smrcaDrugaKlasa;
        const cetinariTrecaKlasa = this.jelaTrecaKlasa + this.smrcaTrecaKlasa;
        const cetinariStubovi = this.jelaStubovi + this.smrcaStubovi;
        const cetinariJamskoDrvo = this.jelaJamskoDrvo + this.smrcaJamskoDrvo;
        const cetinariKoljeZaVoce = this.jelaKoljeZaVoce + this.smrcaKoljeZaVoce;
        const cetinariCeluloznoDrvo = this.jelaCeluloznoDrvo + this.smrcaCeluloznoDrvo;
        const cetinariOgrevPrveKlase = this.jelaOgrevPrveKlase + this.smrcaOgrevPrveKlase;
        const cetinariOgrevDrugeKlase = this.jelaOgrevDrugeKlase + this.smrcaOgrevDrugeKlase;

        const sumaCetinari = cetinariFklase + cetinariLklase + cetinariPrvaKlasa + cetinariDrugaKlasa + cetinariTrecaKlasa +
          cetinariStubovi + cetinariJamskoDrvo + cetinariKoljeZaVoce + cetinariCeluloznoDrvo + cetinariOgrevPrveKlase +
          cetinariOgrevDrugeKlase;

        this.sumaCetinariLiscariFKlase = this.jelaFklase + this.smrcaFklase + this.bukvaFklase;
        this.sumaCetinariLiscariLKlase = this.jelaLklase + this.smrcaLklase + this.bukvaLklase;
        this.sumaCetinariLiscariPrvaKlasa = this.jelaPrvaKlasa + this.smrcaPrvaKlasa + this.bukvaPrvaKlasa;
        this.sumaCetinariLiscarDrugaKlasa = this.jelaDrugaKlasa + this.smrcaDrugaKlasa + this.bukvaDrugaKlasa;
        this.sumaCetinariLiscariTrecaKlasa = this.jelaTrecaKlasa + this.smrcaTrecaKlasa + this.bukvaTrecaKlasa;
        this.sumaCetinariLiscariStubovi = this.jelaStubovi + this.smrcaStubovi + this.bukvaStubovi;
        this.sumaCetinariLiscariJamskoDrvo = this.jelaJamskoDrvo + this.smrcaJamskoDrvo + this.bukvaJamskoDrvo;
        this.sumaCetinariLiscariKoljeZaVoce = this.jelaKoljeZaVoce + this.smrcaKoljeZaVoce + this.bukvaKoljeZaVoce;
        this.sumaCetinariLiscariCeluloznoDrvo = this.jelaCeluloznoDrvo + this.smrcaCeluloznoDrvo + this.bukvaCeluloznoDrvo;
        this.sumaCetinariLiscariOgrevPrveKlase = this.jelaOgrevPrveKlase + this.smrcaOgrevPrveKlase + this.bukvaOgrevPrveKlase;
        this.sumaCetinariLiscariOgrevDrugeKlase = this.jelaOgrevDrugeKlase + this.smrcaOgrevDrugeKlase + this.bukvaOgrevDrugeKlase;

        // kasnije dodati plemenite i hrast
        this.sumCetinariLiscari = sumaCetinari + sumaBukve;
        console.log('suma jele =', sumaJele, 'suma smrce =', sumaSmrce, 'suma bukve =', sumaBukve, 'suma cetinari =', sumaCetinari, 'suma Liscari =', sumaBukve);

        this.sumNormaTest = 5.10;
        this.sumTroskova = 30000;
        this.sumCjenaProjekta = this.sumTroskova / this.sumCetinariLiscari;

      }
    }

    this.sumNormaTest = 5.10;
    this.sumTroskova = 30000;
    this.sumCjenaProjekta = this.sumTroskova / this.sumCetinariLiscari;

  }
}
