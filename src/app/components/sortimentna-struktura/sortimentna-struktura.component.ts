import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Liscari } from '../../models/liscari.model';
import { TrupciService } from '../../services/trupci.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sortimentna-struktura',
  templateUrl: './sortimentna-struktura.component.html',
  styleUrls: ['./sortimentna-struktura.component.css']
})
export class SortimentnaStrukturaComponent implements OnInit {
  vrstaSlika;
  showVrstaImage = false;
  lInputs = false;
  rezonantInputs = false;
  ogrevInputs = false;
  tankaOblovinaInputs = false;
  trecaKlasaInputs = false;

  trupciJela = [];
  trupciSmrca = [];
  trupciBijeliBor = [];
  trupciCrniBor = [];
  trupciBukva = [];
  trupciHrast = [];
  trupciBrijest = [];
  trupciOstali = [];
  treeType: any;
  treeList: any;

  sortimentiFormGroup = new FormGroup({
      izabranaVrsta: new FormControl(),
      rezonant: new FormControl(),
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
    }
  );


  constructor(public liscari: Liscari, public trupci: TrupciService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    const izabranaVrsta = this.sortimentiFormGroup.get('izabranaVrsta').value;

    if (izabranaVrsta === '21') {
      this.trupciJela.push(this.sortimentiFormGroup.value);
      this.onSelectPush();
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '22') {
      this.trupciSmrca.push(this.sortimentiFormGroup.value);
      this.onSelectPush();
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '23') {
      this.trupciBijeliBor.push(this.sortimentiFormGroup.value);
      this.onSelectPush();
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '24') {
      this.trupciCrniBor.push(this.sortimentiFormGroup.value);
      this.onSelectPush();
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '41') {
      this.trupciBukva.push(this.sortimentiFormGroup.value);
      this.onSelectPush();
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '42') {
      this.trupciHrast.push(this.sortimentiFormGroup.value);
      this.onSelectPush();
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '46') {
      this.trupciBrijest.push(this.sortimentiFormGroup.value);
      this.onSelectPush();
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '91') {
      this.trupciOstali.push(this.sortimentiFormGroup.value);
      this.onSelectPush();
      this.sortimentiFormGroup.reset();
    }
  }

  onSelectVrsta(): void {
    const vrstaSlika = this.sortimentiFormGroup.get('izabranaVrsta').value;
    if (vrstaSlika === '21' || vrstaSlika === '22' || vrstaSlika === '23' || vrstaSlika === '24') {
      this.vrstaSlika = 'cetinar';
      this.showVrstaImage = true;
      this.ogrevInputs = false;
      this.tankaOblovinaInputs = true;
      this.trecaKlasaInputs = true;
      if (vrstaSlika === '21') {
        this.rezonantInputs = false;
        this.lInputs = false;
      }
      if (vrstaSlika === '22') {
        this.rezonantInputs = true;
        this.lInputs = false;
      }
      if (vrstaSlika === '23' || vrstaSlika === '24') {
        this.lInputs = true;
        this.rezonantInputs = false;
      }
    } else if (vrstaSlika === '41' || vrstaSlika === '42' || vrstaSlika === '46' || vrstaSlika === '91') {
      this.vrstaSlika = 'liscari';
      this.showVrstaImage = true;
      this.ogrevInputs = true;
      this.tankaOblovinaInputs = false;
      this.rezonantInputs = false;
      this.lInputs = true;
      if (vrstaSlika === '42') {
        this.rezonantInputs = false;
        this.lInputs = false;
        this.trecaKlasaInputs = true;
      }
      if (vrstaSlika === '46') {
        this.rezonantInputs = false;
        this.lInputs = false;
        this.trecaKlasaInputs = false;
      }
      if (vrstaSlika === '91') {
        this.rezonantInputs = false;
        this.lInputs = true;
        this.trecaKlasaInputs = false;
      }
    }
  }


  onSelectPush(): void {
    const izabranaVrsta = this.sortimentiFormGroup.get('izabranaVrsta').value;
    if (izabranaVrsta === '21') {
      this.treeType = this.trupciJela;
      this.treeList = this.trupci.trupciJela;
      this.pushTreeList();
    } else if (izabranaVrsta === '22') {
      this.treeType = this.trupciSmrca;
      this.treeList = this.trupci.trupciSmrca;
      this.pushTreeList();
    } else if (izabranaVrsta === '23') {
      this.treeType = this.trupciBijeliBor;
      this.treeList = this.trupci.trupciBijeliBor;
      this.pushTreeList();
    } else if (izabranaVrsta === '24') {
      this.treeType = this.trupciCrniBor;
      this.treeList = this.trupci.trupciCrniBor;
      this.pushTreeList();
    } else if (izabranaVrsta === '41') {
      this.treeType = this.trupciBukva;
      this.treeList = this.trupci.trupciBukva;
      this.pushTreeList();
    } else if (izabranaVrsta === '42') {
      this.treeType = this.trupciHrast;
      this.treeList = this.trupci.trupciHrast;
      this.pushTreeList();
    } else if (izabranaVrsta === '46') {
      this.treeType = this.trupciBrijest;
      this.treeList = this.trupci.trupciBrijest;
      this.pushTreeList();
    } else if (izabranaVrsta === '91') {
      this.treeType = this.trupciOstali;
      this.treeList = this.trupci.trupciOstali;
      this.pushTreeList();
    }
  }

// push na servis trupce
  pushTreeList(): void {
    this.treeList.push(
      this.treeType[0].rezonant,
      this.treeType[0].fTrupci,
      this.treeType[0].lTrupci,
      this.treeType[0].prvaKlasa,
      this.treeType[0].drugaKlasa,
      this.treeType[0].trecaKlasa,
      this.treeType[0].stuboviZaVodove,
      this.treeType[0].jamskoDrvo,
      this.treeType[0].koljeZaVoce,
      this.treeType[0].celuloznoDrvo,
      this.treeType[0].ogrevPrveKlase,
      this.treeType[0].ogrevDrugeKlase,
      this.treeType[0].sveukupnaDrvnaMasa
    );
  }


  calcAllAfterPush(): void {
    // this.callCheckOnArrays();
    this.giveValueToEmptyArrays();
    this.callPrihodiAll();
    this.callSums();
    this.callSortingAll();
    // testirati treba li ova funkcija jos
    // this.sumTrupciAll(this.trupci.trupciJela, this.trupci.trupciSmrca, this.trupci.trupciBijeliBor, this.trupci.trupciCrniBor,
    //   this.trupci.trupciBukva, this.trupci.trupciHrast, this.trupci.trupciBrijest, this.trupci.trupciOstali);
    // promjeniti router na norme
    this.router.navigate(['/realizacija']);
  }


  // callCheckOnArrays(): void {
  //   this.giveValueToEmptyArrays(this.trupci.trupciJela, this.trupci.jelaSaNeto);
  //   this.giveValueToEmptyArrays(this.trupci.trupciSmrca, this.trupci.smrcaSaNeto);
  //   this.giveValueToEmptyArrays(this.trupci.trupciBijeliBor, this.trupci.bijeliBorSaNeto);
  //   this.giveValueToEmptyArrays(this.trupci.trupciCrniBor, this.trupci.crniBorSaNeto);
  //   this.giveValueToEmptyArrays(this.trupci.trupciBukva, this.trupci.bukvaSaNeto);
  //   this.giveValueToEmptyArrays(this.trupci.trupciHrast, this.trupci.hrastSaNeto);
  //   this.giveValueToEmptyArrays(this.trupci.trupciBrijest, this.trupci.brijestSaNeto);
  //   this.giveValueToEmptyArrays(this.trupci.trupciOstali, this.trupci.ostaliSaNeto);
  // }

  callPrihodiAll(): void {
    this.prihodi(this.trupci.trupciJela, this.trupci.cijenaJela, this.trupci.vrijednostJela);
    this.prihodi(this.trupci.trupciSmrca, this.trupci.cijenaSmrca, this.trupci.vrijednostSmrca);
    this.prihodi(this.trupci.trupciBijeliBor, this.trupci.cijenaBijeliBor, this.trupci.vrijednostBijeliBor);
    this.prihodi(this.trupci.trupciCrniBor, this.trupci.cijenaCrniBor, this.trupci.vrijednostCrniBor);
    this.prihodi(this.trupci.trupciBukva, this.trupci.cijenaBukva, this.trupci.vrijednostBukva);
    this.prihodi(this.trupci.trupciHrast, this.trupci.cijenaHrast, this.trupci.vrijednostHrast);
    this.prihodi(this.trupci.trupciBrijest, this.trupci.cijenaBrijest, this.trupci.vrijednostBrijest);
    this.prihodi(this.trupci.trupciOstali, this.trupci.cijenaOstali, this.trupci.vrijednostOstali);
  }

  callSums(): void {
    this.sumCetinari();
    this.sumLiscari();
    this.sumCetinariLisari();
    this.sumaCetLisBezNetoIsve();
    this.sveukupnaMasa();
  }


  callSortingAll(): void {
    this.trupci.debelaOblovinaCet.push(this.razvrstaniTrupci(this.trupci.sumCet));
    this.trupci.tankaOblovinaCet.push(this.razvrstanaTankaOblovina(this.trupci.sumCet));
    this.trupci.iznosCet.push(this.razvrstanaIznos(this.trupci.sumCet));
    this.trupci.debelaOblovinaLis.push(this.razvrstaniTrupci(this.trupci.sumLis));
    this.trupci.tankaOblovinaLis.push(this.razvrstanaTankaOblovina(this.trupci.sumLis));
    this.trupci.iznosLis.push(this.razvrstanaIznos(this.trupci.sumLis));
  }


  giveValueToEmptyArrays(): void {
    if (this.trupci.trupciJela.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.jelaSaNeto.push(0);
        console.log('1');
      }
    } else {
      console.log('2');
      this.trupci.jelaSaNeto = this.trupci.trupciJela.concat(this.neto(this.trupci.trupciJela));
    }


    if (this.trupci.trupciSmrca.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.smrcaSaNeto.push(0);
      }
    } else {
      this.trupci.smrcaSaNeto = this.trupci.trupciSmrca.concat(this.neto(this.trupci.trupciSmrca));
    }

    if (this.trupci.trupciBijeliBor.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.bijeliBorSaNeto.push(0);
      }
    } else {
      this.trupci.bijeliBorSaNeto = this.trupci.trupciBijeliBor.concat(this.neto(this.trupci.trupciBijeliBor));
    }

    if (this.trupci.trupciCrniBor.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.crniBorSaNeto.push(0);
      }
    } else {
      this.trupci.crniBorSaNeto = this.trupci.trupciCrniBor.concat(this.neto(this.trupci.trupciCrniBor));
    }


    if (this.trupci.trupciBukva.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.bukvaSaNeto.push(0);
      }
    } else {
      this.trupci.bukvaSaNeto = this.trupci.trupciBukva.concat(this.neto(this.trupci.trupciBukva));
    }


    if (this.trupci.trupciHrast.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.hrastSaNeto.push(0);
      }
    } else {
      this.trupci.hrastSaNeto = this.trupci.trupciHrast.concat(this.neto(this.trupci.trupciHrast));
    }

    if (this.trupci.trupciBrijest.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.brijestSaNeto.push(0);
      }
    } else {
      this.trupci.brijestSaNeto = this.trupci.trupciBrijest.concat(this.neto(this.trupci.trupciBrijest));
    }

    if (this.trupci.trupciOstali.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.ostaliSaNeto.push(0);
      }
    } else {
      this.trupci.ostaliSaNeto = this.trupci.trupciOstali.concat(this.neto(this.trupci.trupciOstali));
    }
  }

  // Dodati vise vrsta kasnije i pokusati sve u jednu staviti
  prihodi(arr, arr1, arr2): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.cijenaJela.length; i++) {
      sum = arr[i] * arr1[i];
      if (arr.length <= 0) {
        arr2.push(0);
      } else {
        arr2.push(sum);
      }
    }
  }

  // racunanje neto mase po vrstama sa oduzimanjem zadnjeg elementa u array

  neto(arr): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.klase.length - 2; i++) {
      sum += arr[i];
    }
    return sum;
  }

  // racunanje sume po vrstama
  sumCetinari(): any {
    for (let i = 0; i < this.trupci.klase.length; i++) {
      this.trupci.sumCet.push(
        this.trupci.jelaSaNeto[i] + this.trupci.smrcaSaNeto[i] + this.trupci.bijeliBorSaNeto[i] + this.trupci.crniBorSaNeto[i]);
    }
  }

  sumLiscari(): any {
    for (let i = 0; i < this.trupci.klase.length; i++) {
      this.trupci.sumLis.push(
        this.trupci.bukvaSaNeto[i] + this.trupci.hrastSaNeto[i] + this.trupci.brijestSaNeto[i] + this.trupci.ostaliSaNeto[i]);
    }
  }

  sumCetinariLisari(): any {
    for (let i = 0; i < this.trupci.klase.length; i++) {
      this.trupci.sumCetLis.push
      (this.trupci.jelaSaNeto[i] + this.trupci.smrcaSaNeto[i] + +this.trupci.bijeliBorSaNeto[i] + this.trupci.crniBorSaNeto[i] +
        this.trupci.bukvaSaNeto[i] + this.trupci.hrastSaNeto[i] + this.trupci.brijestSaNeto[i] + this.trupci.ostaliSaNeto[i]);
    }
  }

  // suma ukupno sortimenata za sve vrste
  sumaCetLisBezNetoIsve(): any {
    for (let i = 0; i < this.trupci.klase.length - 2; i++) {
      this.trupci.ukupnoSortimenti.push
      (this.trupci.jelaSaNeto[i] + this.trupci.smrcaSaNeto[i] + this.trupci.bijeliBorSaNeto[i] + this.trupci.crniBorSaNeto[i] +
        this.trupci.bukvaSaNeto[i] + this.trupci.hrastSaNeto[i] + this.trupci.brijestSaNeto[i] + this.trupci.ostaliSaNeto[i]);
    }
  }


  razvrstaniTrupci(arr): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.klase.length - 8; i++) {
      sum += arr[i];
    }
    return sum;
  }

  razvrstanaTankaOblovina(arr): any {
    let sum;
    if (arr === this.trupci.sumCet) {
      sum = this.trupci.sumCet[6] + this.trupci.sumCet[7] + this.trupci.sumCet[8] + (0.7 * this.trupci.sumCet[9]);
    } else {
      sum = this.trupci.sumLis[9] + this.trupci.sumLis[10];
    }
    return sum;
  }

  razvrstanaIznos(arr): any {
    if (arr === this.trupci.sumCet) {
      let sum = 0;
      sum += this.trupci.sumCet[9];
      return 0.3 * sum;
    } else {
      let sum = 0;
      sum += this.trupci.sumLis[11];
      return sum;
    }

  }

  // sve ide u sveukupni array zbog precnika
  sveukupnaMasa(): any {
    const sveJela = this.trupci.jelaSaNeto[12];
    const sveSmrca = this.trupci.smrcaSaNeto[12];
    const sveBijeliBor = this.trupci.bijeliBorSaNeto[12];
    const sveCrniBor = this.trupci.crniBorSaNeto[12];
    const sveBukva = this.trupci.bukvaSaNeto[12];
    const sveHrast = this.trupci.hrastSaNeto[12];
    const sveBrijest = this.trupci.brijestSaNeto[12];
    const sveOstali = this.trupci.ostaliSaNeto[12];


    if (sveJela > 0) {
      this.trupci.sveukupnaCet.push(sveJela);
    }
    if (sveSmrca > 0) {
      this.trupci.sveukupnaCet.push(sveSmrca);
    }
    if (sveBijeliBor > 0) {
      this.trupci.sveukupnaCet.push(sveBijeliBor);
    }
    if (sveCrniBor > 0) {
      this.trupci.sveukupnaCet.push(sveCrniBor);
    }

    if (sveBukva > 0) {
      this.trupci.sveukupnaLis.push(sveBukva);
    }
    if (sveHrast > 0) {
      this.trupci.sveukupnaLis.push(sveHrast);
    }
    if (sveBrijest > 0) {
      this.trupci.sveukupnaLis.push(sveBrijest);
    }
    if (sveOstali > 0) {
      this.trupci.sveukupnaLis.push(sveOstali);
    }
  }

  // testirati treba li ova funkcija jos
  // suma svih unesenih array
  // sumTrupciAll(arr, arr1, arr2, arr3, arr4, arr5, arr6, arr7): any {
  //   let sum = 0;
  //   for (let i = 0; i < this.trupci.klase.length; i++) {
  //     sum += arr[i] + arr1[i] + arr2[i] + arr3[i] + arr4[i] + arr5[i] + arr6[i] + arr7[i];
  //   }
  //   return sum;
  // }
}


