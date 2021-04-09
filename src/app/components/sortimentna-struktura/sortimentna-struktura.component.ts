import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cetinari } from '../../models/cetinari.model';
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


  constructor(public cetinari: Cetinari, public liscari: Liscari, public trupci: TrupciService, private router: Router) {
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
    } else if (vrstaSlika === '41' || vrstaSlika === '50' || vrstaSlika === '46' || vrstaSlika === '91') {
      this.vrstaSlika = 'liscari';
      this.showVrstaImage = true;
    }
  }


  onSelectPush(): void {
    const izabranaVrsta = this.sortimentiFormGroup.get('izabranaVrsta').value;
    if (izabranaVrsta === '21') {
      this.treeType = this.trupciJela;
      this.treeList = this.trupci.trupciJela;
      this.pushTreeListCetinari();
    } else if (izabranaVrsta === '22') {
      this.treeType = this.trupciSmrca;
      this.treeList = this.trupci.trupciSmrca;
      this.pushTreeListCetinari();
    } else if (izabranaVrsta === '23') {
      this.treeType = this.trupciBijeliBor;
      this.treeList = this.trupci.trupciBijeliBor;
      this.pushTreeListCetinari();
    } else if (izabranaVrsta === '24') {
      this.treeType = this.trupciCrniBor;
      this.treeList = this.trupci.trupciCrniBor;
      this.pushTreeListCetinari();
    } else if (izabranaVrsta === '41') {
      this.treeType = this.trupciBukva;
      this.treeList = this.trupci.trupciBukva;
      this.pushTreeListLiscari();
    } else if (izabranaVrsta === '42') {
      this.treeType = this.trupciHrast;
      this.treeList = this.trupci.trupciHrast;
      this.pushTreeListLiscari();
    } else if (izabranaVrsta === '46') {
      this.treeType = this.trupciBrijest;
      this.treeList = this.trupci.trupciBrijest;
      this.pushTreeListLiscari();
    } else if (izabranaVrsta === '91') {
      this.treeType = this.trupciOstali;
      this.treeList = this.trupci.trupciOstali;
      this.pushTreeListLiscari();
    }
  }

// push na servis trupce
  pushTreeListCetinari(): void {
    this.treeList.push(
      this.treeType[0].fTrupci,
      0,
      this.treeType[0].prvaKlasa,
      this.treeType[0].drugaKlasa,
      this.treeType[0].trecaKlasa,
      this.treeType[0].stuboviZaVodove,
      this.treeType[0].jamskoDrvo,
      this.treeType[0].koljeZaVoce,
      this.treeType[0].celuloznoDrvo,
      0,
      0,
      this.treeType[0].sveukupnaDrvnaMasa
    );
  }

  pushTreeListLiscari(): void {
    this.treeList.push(
      this.treeType[0].fTrupci,
      this.treeType[0].lTrupci,
      this.treeType[0].prvaKlasa,
      this.treeType[0].drugaKlasa,
      this.treeType[0].trecaKlasa,
      0,
      0,
      0,
      this.treeType[0].celuloznoDrvo,
      this.treeType[0].ogrevPrveKlase,
      this.treeType[0].ogrevDrugeKlase,
      this.treeType[0].sveukupnaDrvnaMasa
    );
  }


  calcAllAfterPush(): void {
    this.giveValueToEmptyArrays();
    this.prihodiJela(this.trupci.trupciJela, this.trupci.cijenaJela);
    this.prihodiSmrca(this.trupci.trupciSmrca, this.trupci.cijenaSmrca);
    this.prihodiBijeliBor(this.trupci.trupciBijeliBor, this.trupci.cijenaBijeliBor);
    this.prihodiCrniBor(this.trupci.trupciCrniBor, this.trupci.cijenaCrniBor);
    this.prihodiBukva(this.trupci.trupciBukva, this.trupci.cijenaBukva);
    this.prihodiHrast(this.trupci.trupciHrast, this.trupci.cijenaHrast);
    this.prihodiBrijest(this.trupci.trupciBrijest, this.trupci.cijenaBrijest);
    this.prihodiOstali(this.trupci.trupciOstali, this.trupci.cijenaOstali);
    this.sumCetinari();
    this.sumLiscari();
    this.tankaDebelaOblovina();
    this.sumTrupciAll(this.trupci.trupciJela, this.trupci.trupciSmrca, this.trupci.trupciBijeliBor, this.trupci.trupciCrniBor,
      this.trupci.trupciBukva, this.trupci.trupciHrast, this.trupci.trupciBrijest, this.trupci.trupciOstali);
    this.sumCetinariLisari();
    this.sumaCetLisBezNetoIsve();
    this.sveukupnaMasa();
    // promjeniti router na norme
    this.router.navigate(['/realizacija']);
  }


  giveValueToEmptyArrays(): void {
    if (this.trupci.trupciJela.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.jelaSaNeto.push(0);
      }
    } else {
      this.trupci.jelaSaNeto = this.trupci.trupciJela.concat(this.netoJela(this.trupci.trupciJela));
    }


    if (this.trupci.trupciSmrca.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.smrcaSaNeto.push(0);
      }
    } else {
      this.trupci.smrcaSaNeto = this.trupci.trupciSmrca.concat(this.netoSmrca(this.trupci.trupciSmrca));
    }

    if (this.trupci.trupciBijeliBor.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.bijeliBorSaNeto.push(0);
      }
    } else {
      this.trupci.bijeliBorSaNeto = this.trupci.trupciBijeliBor.concat(this.netoBijeliBor(this.trupci.trupciBijeliBor));
    }

    if (this.trupci.trupciCrniBor.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.crniBorSaNeto.push(0);
      }
    } else {
      this.trupci.crniBorSaNeto = this.trupci.trupciCrniBor.concat(this.netoCrniBor(this.trupci.trupciCrniBor));
    }


    if (this.trupci.trupciBukva.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.bukvaSaNeto.push(0);
      }
    } else {
      this.trupci.bukvaSaNeto = this.trupci.trupciBukva.concat(this.netoBukva(this.trupci.trupciBukva));
    }


    if (this.trupci.trupciHrast.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.hrastSaNeto.push(0);
      }
    } else {
      this.trupci.hrastSaNeto = this.trupci.trupciHrast.concat(this.netoHrast(this.trupci.trupciHrast));
    }

    if (this.trupci.trupciBrijest.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.brijestSaNeto.push(0);
      }
    } else {
      this.trupci.brijestSaNeto = this.trupci.trupciBrijest.concat(this.netoBrijest(this.trupci.trupciBrijest));
    }

    if (this.trupci.trupciOstali.length <= 0) {
      for (let i = 0; i < this.trupci.klase.length; i++) {
        this.trupci.ostaliSaNeto.push(0);
      }
    } else {
      this.trupci.ostaliSaNeto = this.trupci.trupciOstali.concat(this.netoOstali(this.trupci.trupciOstali));
    }
  }

  // Dodati vise vrsta kasnije i pokusati sve u jednu staviti
  prihodiJela(arr, arr1): any {
    let sumJela = 0;
    for (let i = 0; i < this.trupci.cijenaJela.length; i++) {
      sumJela = this.trupci.trupciJela[i] * this.trupci.cijenaJela[i];
      if (this.trupci.trupciJela.length <= 0) {
        this.trupci.vrijednostJela.push(0);
      } else {
        this.trupci.vrijednostJela.push(sumJela);
      }
    }
  }

  prihodiSmrca(arr, arr1): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.cijenaSmrca.length; i++) {
      sum = this.trupci.trupciSmrca[i] * this.trupci.cijenaSmrca[i];
      if (this.trupci.trupciSmrca.length <= 0) {
        this.trupci.vrijednostSmrca.push(0);
      } else {
        this.trupci.vrijednostSmrca.push(sum);
      }
    }
  }

  prihodiBijeliBor(arr, arr1): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.cijenaBijeliBor.length; i++) {
      sum = this.trupci.trupciBijeliBor[i] * this.trupci.cijenaBijeliBor[i];
      if (this.trupci.trupciBijeliBor.length <= 0) {
        this.trupci.vrijednostBijeliBor.push(0);
      } else {
        this.trupci.vrijednostBijeliBor.push(sum);
      }
    }
  }

  prihodiCrniBor(arr, arr1): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.cijenaCrniBor.length; i++) {
      sum = this.trupci.trupciCrniBor[i] * this.trupci.cijenaCrniBor[i];
      if (this.trupci.trupciCrniBor.length <= 0) {
        this.trupci.vrijednostCrniBor.push(0);
      } else {
        this.trupci.vrijednostCrniBor.push(sum);
      }
    }
  }

  prihodiBukva(arr, arr1): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.cijenaBukva.length; i++) {
      sum = this.trupci.trupciBukva[i] * this.trupci.cijenaBukva[i];
      if (this.trupci.trupciBukva.length <= 0) {
        this.trupci.vrijednostBukva.push(0);
      } else {
        this.trupci.vrijednostBukva.push(sum);
      }
    }
  }

  prihodiHrast(arr, arr1): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.cijenaHrast.length; i++) {
      sum = this.trupci.trupciHrast[i] * this.trupci.cijenaHrast[i];
      if (this.trupci.trupciHrast.length <= 0) {
        this.trupci.vrijednostHrast.push(0);
      } else {
        this.trupci.vrijednostHrast.push(sum);
      }
    }
  }

  prihodiBrijest(arr, arr1): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.cijenaBrijest.length; i++) {
      sum = this.trupci.trupciBrijest[i] * this.trupci.cijenaBrijest[i];
      if (this.trupci.trupciBrijest.length <= 0) {
        this.trupci.vrijednostBrijest.push(0);
      } else {
        this.trupci.vrijednostBrijest.push(sum);
      }
    }
  }

  prihodiOstali(arr, arr1): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.cijenaOstali.length; i++) {
      sum = this.trupci.trupciOstali[i] * this.trupci.cijenaOstali[i];
      if (this.trupci.trupciOstali.length <= 0) {
        this.trupci.vrijednostOstali.push(0);
      } else {
        this.trupci.vrijednostOstali.push(sum);
      }
    }
  }


  // racunanje neto mase po vrstama sa oduzimanjem zadnjeg elementa u array

  netoJela(arr): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.trupciJela.length - 1; i++) {
      sum += arr[i];
    }
    return sum - arr[1] - arr[9] - arr[10];
  }

  netoSmrca(arr): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.trupciSmrca.length - 1; i++) {
      sum += arr[i];
    }
    return sum - arr[1] - arr[9] - arr[10];
  }

  netoBijeliBor(arr): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.trupciBijeliBor.length - 1; i++) {
      sum += arr[i];
    }
    return sum - arr[1] - arr[9] - arr[10];
  }

  netoCrniBor(arr): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.trupciCrniBor.length - 1; i++) {
      sum += arr[i];
    }
    return sum - arr[1] - arr[9] - arr[10];
  }


  // kod liscara return malo drugaciji u odnosu na cetinare
  netoBukva(arr): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.trupciBukva.length - 1; i++) {
      sum += arr[i];
    }
    return sum - arr[5] - arr[6] - arr[7];
  }

  netoHrast(arr): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.trupciHrast.length - 1; i++) {
      sum += arr[i];
    }
    return sum - arr[5] - arr[6] - arr[7];
  }

  netoBrijest(arr): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.trupciBrijest.length - 1; i++) {
      sum += arr[i];
    }
    return sum - arr[5] - arr[6] - arr[7];
  }

  netoOstali(arr): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.trupciOstali.length - 1; i++) {
      sum += arr[i];
    }
    return sum - arr[5] - arr[6] - arr[7];
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
      (this.trupci.jelaSaNeto[i] + this.trupci.smrcaSaNeto[i] + + this.trupci.bijeliBorSaNeto[i] + this.trupci.crniBorSaNeto[i] +
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

  // sumaDebelaOblovina
  tankaDebelaOblovina(): any {
    let sumDebelaCet;
    let sumTankaCet;
    let iznosCet;
    let sumDebelaLis;
    let sumTankaLis;
    let iznosLis;
    sumDebelaCet = this.trupci.sumCet[0] + this.trupci.sumCet[2] + this.trupci.sumCet[3] + this.trupci.sumCet[4];
    this.trupci.debelaOblovinaCet.push(sumDebelaCet);
    sumTankaCet = this.trupci.sumCet[5] + this.trupci.sumCet[6] + this.trupci.sumCet[7] + (0.7 * this.trupci.sumCet[8]);
    this.trupci.tankaOblovinaCet.push(sumTankaCet);
    iznosCet = (0.3 * this.trupci.sumCet[8]);
    this.trupci.iznosCet.push(iznosCet);
    sumDebelaLis = this.trupci.sumLis[0] + this.trupci.sumLis[1] + this.trupci.sumLis[2] + this.trupci.sumLis[3] + this.trupci.sumLis[4];
    this.trupci.debelaOblovinaLis.push(sumDebelaLis);
    sumTankaLis = this.trupci.sumLis[8] + this.trupci.sumLis[9];
    this.trupci.tankaOblovinaLis.push(sumTankaLis);
    iznosLis = this.trupci.sumLis[10];
    this.trupci.iznosLis.push(iznosLis);
  }

  // sve ide u sveukupni array zbog precnika
  sveukupnaMasa(): any {
    let sveJela;
    let sveSmrca;
    let sveBijeliBor;
    let sveCrniBor;
    let sveBukva;
    let sveHrast;
    let sveBrijest;
    let sveOstali;

    sveJela = this.trupci.jelaSaNeto[11];
    sveSmrca = this.trupci.smrcaSaNeto[11];
    sveBijeliBor = this.trupci.bijeliBorSaNeto[11];
    sveCrniBor = this.trupci.crniBorSaNeto[11];
    sveBukva = this.trupci.bukvaSaNeto[11];
    sveHrast = this.trupci.hrastSaNeto[11];
    sveBrijest = this.trupci.brijestSaNeto[11];
    sveOstali = this.trupci.ostaliSaNeto[11];


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


  // suma svih unesenih array
  sumTrupciAll(arr, arr1, arr2, arr3, arr4, arr5, arr6, arr7): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.klase.length; i++) {
      sum += arr[i] + arr1[i] + arr2[i] + arr3[i] + arr4[i] + arr5[i] + arr6[i] + arr7[i];
    }
    return sum;
  }
}


