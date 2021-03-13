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
  sumNetoKlasa: number;
  sumNormaTest: number;
  sumTroskova: number;
  sumCjenaProjekta: number;
  sortimentiFormGroup = new FormGroup({
      izabranaVrsta: new FormControl(0),
      fTrupci: new FormControl(0),
      lTrupci: new FormControl(0),
      prvaKlasa: new FormControl(0),
      drugaKlasa: new FormControl(0),
      trecaKlasa: new FormControl(0),
      stuboviZaVodove: new FormControl(0),
      jamskoDrvo: new FormControl(0),
      koljeZaVoce: new FormControl(0),
      celuloznoDrvo: new FormControl(0),
      ogrevPrveKlase: new FormControl(0),
      ogrevDrugeKlase: new FormControl(0),
    }
  );


  constructor() {
  }

  ngOnInit(): void {
  }


  onSubmit(): void {
    // console.log(this.sortimentiFormGroup.value);

    const izabranaVrsta = this.sortimentiFormGroup.get('izabranaVrsta').value;
    const novaFtrupci = this.sortimentiFormGroup.get('fTrupci').value;
    const novaLtrupci = this.sortimentiFormGroup.get('lTrupci').value;
    const novaPrvaKlasa = this.sortimentiFormGroup.get('prvaKlasa').value;
    const novaDrugaKlasa = this.sortimentiFormGroup.get('drugaKlasa').value;
    const novaTrecaKlasa = this.sortimentiFormGroup.get('trecaKlasa').value;
    const novaStuboviZaVodove = this.sortimentiFormGroup.get('stuboviZaVodove').value;
    const novaJamskoDrvo = this.sortimentiFormGroup.get('jamskoDrvo').value;
    const novaKoljeZaVoce = this.sortimentiFormGroup.get('koljeZaVoce').value;
    const novaCeluloznoDrvo = this.sortimentiFormGroup.get('celuloznoDrvo').value;
    const novaOgrevPrveKlase = this.sortimentiFormGroup.get('ogrevPrveKlase').value;
    const novaOgrevDrugeKlase = this.sortimentiFormGroup.get('ogrevDrugeKlase').value;


    this.sumNetoKlasa = novaFtrupci + novaLtrupci + novaPrvaKlasa + novaDrugaKlasa + novaTrecaKlasa +
      novaStuboviZaVodove + novaJamskoDrvo + novaKoljeZaVoce + novaCeluloznoDrvo +
      novaOgrevPrveKlase + novaOgrevDrugeKlase;

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

        const jelaFklase = this.sumTrupciJela[i].fTrupci;
        const jelaLklase = this.sumTrupciJela[i].lTrupci;
        const jelaPrvaKlasa = this.sumTrupciJela[i].prvaKlasa;
        const jelaDrugaKlasa = this.sumTrupciJela[i].drugaKlasa;
        const jelaTrecaKlasa = this.sumTrupciJela[i].trecaKlasa;
        const jelaStubovi = this.sumTrupciJela[i].stuboviZaVodove;
        const jelaJamskoDrvo = this.sumTrupciJela[i].jamskoDrvo;
        const jelaKoljeZaVoce = this.sumTrupciJela[i].koljeZaVoce;
        const jelaCeluloznoDrvo = this.sumTrupciJela[i].celuloznoDrvo;
        const jelaOgrevPrveKlase = this.sumTrupciJela[i].ogrevPrveKlase;
        const jelaOgrevDrugeKlase = this.sumTrupciJela[i].ogrevDrugeKlase;

        const sumaJele = jelaFklase + jelaLklase + jelaPrvaKlasa + jelaDrugaKlasa + jelaTrecaKlasa +
          jelaStubovi + jelaJamskoDrvo + jelaKoljeZaVoce + jelaCeluloznoDrvo + jelaOgrevPrveKlase +
          jelaOgrevDrugeKlase;

        const smrcaFklase = this.sumTrupciSmrca[i].fTrupci;
        const smrcaLklase = this.sumTrupciSmrca[i].lTrupci;
        const smrcaPrvaKlasa = this.sumTrupciSmrca[i].prvaKlasa;
        const smrcaDrugaKlasa = this.sumTrupciSmrca[i].drugaKlasa;
        const smrcaTrecaKlasa = this.sumTrupciSmrca[i].trecaKlasa;
        const smrcaStubovi = this.sumTrupciSmrca[i].stuboviZaVodove;
        const smrcaJamskoDrvo = this.sumTrupciSmrca[i].jamskoDrvo;
        const smrcaKoljeZaVoce = this.sumTrupciSmrca[i].koljeZaVoce;
        const smrcaCeluloznoDrvo = this.sumTrupciSmrca[i].celuloznoDrvo;
        const smrcaOgrevPrveKlase = this.sumTrupciSmrca[i].ogrevPrveKlase;
        const smrcaOgrevDrugeKlase = this.sumTrupciSmrca[i].ogrevDrugeKlase;

        const sumaSmrce = smrcaFklase + smrcaLklase + smrcaPrvaKlasa + smrcaDrugaKlasa + smrcaTrecaKlasa +
          smrcaStubovi + smrcaJamskoDrvo + smrcaKoljeZaVoce + smrcaCeluloznoDrvo + smrcaOgrevPrveKlase +
          smrcaOgrevDrugeKlase;

        const bukvaFklase = this.sumTrupciBukva[i].fTrupci;
        const bukvaLklase = this.sumTrupciBukva[i].lTrupci;
        const bukvaPrvaKlasa = this.sumTrupciBukva[i].prvaKlasa;
        const bukvaDrugaKlasa = this.sumTrupciBukva[i].drugaKlasa;
        const bukvaTrecaKlasa = this.sumTrupciBukva[i].trecaKlasa;
        const bukvaStubovi = this.sumTrupciBukva[i].stuboviZaVodove;
        const bukvaJamskoDrvo = this.sumTrupciBukva[i].jamskoDrvo;
        const bukvaKoljeZaVoce = this.sumTrupciBukva[i].koljeZaVoce;
        const bukvaCeluloznoDrvo = this.sumTrupciBukva[i].celuloznoDrvo;
        const bukvaOgrevPrveKlase = this.sumTrupciBukva[i].ogrevPrveKlase;
        const bukvaOgrevDrugeKlase = this.sumTrupciBukva[i].ogrevDrugeKlase;

        const sumaBukve = bukvaFklase + bukvaLklase + bukvaPrvaKlasa + bukvaDrugaKlasa + bukvaTrecaKlasa +
          bukvaStubovi + bukvaJamskoDrvo + bukvaKoljeZaVoce + bukvaCeluloznoDrvo + bukvaOgrevPrveKlase +
          bukvaOgrevDrugeKlase;

        const cetinariFklase = jelaFklase + smrcaFklase;
        const cetinariLklase = jelaLklase + smrcaLklase;
        const cetinariPrvaKlasa = jelaPrvaKlasa + smrcaPrvaKlasa;
        const cetinariDrugaKlasa = jelaDrugaKlasa + smrcaDrugaKlasa;
        const cetinariTrecaKlasa = jelaTrecaKlasa + smrcaTrecaKlasa;
        const cetinariStubovi = jelaStubovi + smrcaStubovi;
        const cetinariJamskoDrvo = jelaJamskoDrvo + smrcaJamskoDrvo;
        const cetinariKoljeZaVoce = jelaKoljeZaVoce + smrcaKoljeZaVoce;
        const cetinariCeluloznoDrvo = jelaCeluloznoDrvo + smrcaCeluloznoDrvo;
        const cetinariOgrevPrveKlase = jelaOgrevPrveKlase + smrcaOgrevPrveKlase;
        const cetinariOgrevDrugeKlase = jelaOgrevDrugeKlase + smrcaOgrevDrugeKlase;

        const sumaCetinari = cetinariFklase + cetinariLklase + cetinariPrvaKlasa + cetinariDrugaKlasa + cetinariTrecaKlasa +
          cetinariStubovi + cetinariJamskoDrvo + cetinariKoljeZaVoce + cetinariCeluloznoDrvo + cetinariOgrevPrveKlase +
          cetinariOgrevDrugeKlase;
        const sumaLiscari = bukvaFklase + bukvaLklase + bukvaPrvaKlasa + bukvaDrugaKlasa + bukvaTrecaKlasa + bukvaStubovi +
          bukvaJamskoDrvo + bukvaKoljeZaVoce + bukvaCeluloznoDrvo + bukvaOgrevPrveKlase + bukvaOgrevDrugeKlase;
        console.log('suma jele =', sumaJele, 'suma smrce =', sumaSmrce, 'suma bukve =', sumaBukve, 'suma cetinari =', sumaCetinari, 'suma Liscari =', sumaLiscari);







        // cetinari ovaj nacin ne valja, probati drugi
        // const cetinariFklase = this.sumTrupciJela[i].fTrupci + this.sumTrupciSmrca[i].fTrupci;
        // const cetinariLklase = this.sumTrupciJela[i].lTrupci + this.sumTrupciSmrca[i].lTrupci;
        // const cetinariPrvaKlasa = this.sumTrupciJela[i].prvaKlasa + this.sumTrupciSmrca[i].prvaKlasa;
        // const cetinariDrugaKlasa = this.sumTrupciJela[i].drugaKlasa + this.sumTrupciSmrca[i].drugaKlasa;
        // const cetinariTrecaKlasa = this.sumTrupciJela[i].trecaKlasa + this.sumTrupciSmrca[i].trecaKlasa;
        // const cetinariStubovi = this.sumTrupciJela[i].stuboviZaVodove + this.sumTrupciSmrca[i].stuboviZaVodove;
        // const cetinariJamskoDrvo = this.sumTrupciJela[i].jamskoDrvo + this.sumTrupciSmrca[i].jamskoDrvo;
        // const cetinariKoljeZaVoce = this.sumTrupciJela[i].koljeZaVoce + this.sumTrupciSmrca[i].koljeZaVoce;
        // const cetinariCeluloznoDrvo = this.sumTrupciJela[i].celuloznoDrvo + this.sumTrupciSmrca[i].celuloznoDrvo;
        // const cetinariOgrevPrveKlase = this.sumTrupciJela[i].ogrevPrveKlase + this.sumTrupciSmrca[i].ogrevDrugeKlase;
        // const cetinariOgrevDrugeKlase = this.sumTrupciJela[i].ogrevDrugeKlase + this.sumTrupciSmrca[i].ogrevDrugeKlase;
        // liscari
        // const liscariFklase = this.sumTrupciBukva[i].fTrupci + this.sumTrupciPlemeniti[i];
        // const liscariLklase = this.sumTrupciBukva[i].lTrupci + this.sumTrupciPlemeniti[i];
        // const liscariPrvaKlasa = this.sumTrupciBukva[i].prvaKlasa + this.sumTrupciPlemeniti[i];
        // const liscariDrugaKlasa = this.sumTrupciBukva[i].drugaKlasa + this.sumTrupciPlemeniti[i];
        // const liscariTrecaKlasa = this.sumTrupciBukva[i].trecaKlasa + this.sumTrupciPlemeniti[i];
        // const liscariStubovi = this.sumTrupciBukva[i].stuboviZaVodove + this.sumTrupciPlemeniti[i];
        // const liscariJamskoDrvo = this.sumTrupciBukva[i].jamskoDrvo + this.sumTrupciPlemeniti[i];
        // const liscariKoljeZaVoce = this.sumTrupciBukva[i].koljeZaVoce + this.sumTrupciPlemeniti[i];
        // const liscariCeluloznoDrvo = this.sumTrupciBukva[i].celuloznoDrvo + this.sumTrupciPlemeniti[i];
        // const liscariOgrevPrveKlase = this.sumTrupciBukva[i].ogrevPrveKlase + this.sumTrupciPlemeniti[i];
        // const liscariOgrevDrugeKlase = this.sumTrupciBukva[i].ogrevDrugeKlase + this.sumTrupciPlemeniti[i];

        // const sumaCetinara = cetinariFklase + cetinariLklase + cetinariPrvaKlasa + cetinariDrugaKlasa + cetinariTrecaKlasa +
        //   cetinariStubovi + cetinariJamskoDrvo + cetinariKoljeZaVoce + cetinariCeluloznoDrvo +
        //   cetinariOgrevPrveKlase + cetinariOgrevDrugeKlase;
        //
        // const sumaLiscara = liscariFklase + liscariLklase + liscariPrvaKlasa + liscariDrugaKlasa + liscariTrecaKlasa + liscariStubovi +
        //   liscariJamskoDrvo + liscariKoljeZaVoce + liscariCeluloznoDrvo + liscariOgrevPrveKlase + liscariOgrevDrugeKlase;
        //
        // console.log('Suma cetinara iznosi = ', sumaCetinara);
        // console.log('Suma cetinara iznosi = ', sumaLiscara);


      }
    }


    this.sumNormaTest = 5.10;
    this.sumTroskova = 30000;
    this.sumCjenaProjekta = this.sumTroskova / this.sumNetoKlasa;
  }
}
