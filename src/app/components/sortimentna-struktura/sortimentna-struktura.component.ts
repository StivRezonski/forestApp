import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Jela } from '../../models/jela.model';
import { Smrca } from '../../models/smrca.model';
import { CetinariLiscari } from '../../models/cetinari-liscari.model';
import { Bukva } from '../../models/bukva.model';
import { Plemeniti } from '../../models/plemeniti.model';
import { Cetinari } from '../../models/cetinari.model';
import { Liscari } from '../../models/liscari.model';
import { TrupciService } from '../../services/trupci.service';



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
  trupciBukva = [];
  trupciHrast = [];
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
      srednjiPrecnik: new FormControl(),
    }
  );


  constructor(public jela: Jela, public smrca: Smrca, public cetinariLiscari: CetinariLiscari,
              public bukva: Bukva, public plemeniti: Plemeniti, public cetinari: Cetinari,
              public liscari: Liscari, public trupci: TrupciService) {
  }

  ngOnInit(): void {
    console.log(this.trupci.jelaSaNeto.length);
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
    } else if (izabranaVrsta === '41') {
      this.trupciBukva.push(this.sortimentiFormGroup.value);
      this.onSelectPush();
      this.sortimentiFormGroup.reset();
    } else if (izabranaVrsta === '42') {
      this.trupciHrast.push(this.sortimentiFormGroup.value);
      this.onSelectPush();
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
    } else if (izabranaVrsta === '41') {
      this.treeType = this.trupciBukva;
      this.treeList = this.trupci.trupciBukva;
      this.pushTreeListLiscari();
    } else if (izabranaVrsta === '42') {
      this.treeType = this.trupciHrast;
      this.treeList = this.trupci.trupciHrast;
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
    this.prihodiBukva(this.trupci.trupciBukva, this.trupci.cijenaBukva);
    this.prihodiHrast(this.trupci.trupciHrast, this.trupci.cijenaHrast);
    this.sumCetinari();
    this.sumLiscari();
    this.tankaDebelaOblovina();
    this.sumTrupciAll(this.trupci.trupciJela, this.trupci.trupciSmrca, this.trupci.trupciBukva, this.trupci.trupciHrast);
    this.sumCetinariLisari();
    this.sumaCetLisBezNetoIsve();
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


  // racunanje sume po vrstama
  sumCetinari(): any {
    // console.log(this.trupci.sumCet);
    for (let i = 0; i < this.trupci.klase.length; i++) {
      this.trupci.sumCet.push(this.trupci.jelaSaNeto[i] + this.trupci.smrcaSaNeto[i]);
    }
  }

  sumLiscari(): any {
    for (let i = 0; i < this.trupci.klase.length; i++) {
      this.trupci.sumLis.push(this.trupci.bukvaSaNeto[i] + this.trupci.hrastSaNeto[i]);
    }
  }

  sumCetinariLisari(): any {
    for (let i = 0; i < this.trupci.klase.length; i++) {
      this.trupci.sumCetLis.push
      (this.trupci.jelaSaNeto[i] + this.trupci.smrcaSaNeto[i] + this.trupci.bukvaSaNeto[i] + this.trupci.hrastSaNeto[i]);
    }
  }

  // suma ukupno sortimenata za sve vrste
  sumaCetLisBezNetoIsve(): any {
    for (let i = 0; i < this.trupci.klase.length - 2; i++) {
      this.trupci.ukupnoSortimenti.push
      (this.trupci.jelaSaNeto[i] + this.trupci.smrcaSaNeto[i] + this.trupci.bukvaSaNeto[i] + this.trupci.hrastSaNeto[i]);
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



  // suma svih unesenih array
  sumTrupciAll(arr, arr1, arr2, arr3): any {
    let sum = 0;
    for (let i = 0; i < this.trupci.klase.length; i++) {
      sum += arr[i] + arr1[i] + arr2[i] + arr3[i];
    }
    return sum;
  }

  // sumTrupciCet(arr, arr1): any {
  //   let sum = 0;
  //   for (let i = 0; i < this.trupci.klase.length - 6; i++) {
  //     sum += arr[i] + arr1[i];
  //   }
  //   return sum;
  // }

}


