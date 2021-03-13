import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sortimenti',
  templateUrl: './sortimenti.component.html',
  styleUrls: ['./sortimenti.component.css']
})
export class SortimentiComponent implements OnInit {
  sum = [];
  sumaIzForme;
  sumTrupciJela = [];
  sumTrupciSmrca = [];
  sumAllCetinari = [];
  sortimentiGrupa: number;
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
    // const array1 = [1, 2, 3, 4];
    // const array2 = [5, 6, 7, 8];
    //
    // // const sum = [6, 8, 10, 12];
    // for (let i = 0; i < array1.length; i++) {
    //   this.sum.push(array1[i] + array2[i]);
    //   console.log(this.sum);
    // }

  }


  onSubmit(): void {
    // console.log(this.sortimentiFormGroup.value);

    this.sumaIzForme = this.sortimentiFormGroup.value;
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
      // this.sumTrupciJela.push(this.sortimentiFormGroup.value);
      this.sumTrupciJela.push(this.sortimentiFormGroup.value);
      console.log(this.sumTrupciJela);
      // console.log('Ovo je za Jelu', this.sumTrupciJela);
    } else if (izabranaVrsta === '22') {
      this.sumTrupciSmrca.push(this.sortimentiFormGroup.value);
      console.log('Ovo je za Smrcu', this.sumTrupciSmrca);
    }

    if (this.sumTrupciJela.length > 0 && this.sumTrupciSmrca.length > 0) {
      console.log(this.sumTrupciJela, this.sumTrupciSmrca);
      for (let i = 0; i < this.sumTrupciJela.length; i++) {
        // this.sumAllCetinari.push(this.sumTrupciJela[i][i] + this.sumTrupciSmrca[i][i]);
        console.log(this.sumTrupciJela[i][i] + this.sumTrupciSmrca[i][i]);
        // console.log(this.sumAllCetinari[i][i]);
      }
    }


    this.sumNormaTest = 5.10;
    this.sumTroskova = 30000;
    this.sumCjenaProjekta = this.sumTroskova / this.sumNetoKlasa;
  }
}
