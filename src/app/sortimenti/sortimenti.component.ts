import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sortimenti',
  templateUrl: './sortimenti.component.html',
  styleUrls: ['./sortimenti.component.css']
})
export class SortimentiComponent implements OnInit {
  sumKlasa: number;
  sumNormaTest: number;
  sumTroskova: number;
  sumCjenaProjekta: number;
  sortimentiFormGroup = new FormGroup({
    fTrupci: new FormControl(''),
    lTrupci: new FormControl(''),
    prvaKlasa: new FormControl(''),
    drugaKlasa: new FormControl(''),
    trecaKlasa: new FormControl(''),
    }

  );

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // console.log(this.sortimentiFormGroup.value);
    const novaFtrupci = this.sortimentiFormGroup.get('fTrupci').value;
    const novaLtrupci = this.sortimentiFormGroup.get('lTrupci').value;
    const novaPrvaKlasa = this.sortimentiFormGroup.get('prvaKlasa').value;
    const novaDrugaKlasa = this.sortimentiFormGroup.get('drugaKlasa').value;
    const novaTrecaKlasa = this.sortimentiFormGroup.get('trecaKlasa').value;
    this.sumKlasa = novaFtrupci + novaLtrupci + novaPrvaKlasa + novaDrugaKlasa + novaTrecaKlasa;

    this.sumNormaTest = 5.10;
    this.sumTroskova = 30000;
    this.sumCjenaProjekta = this.sumTroskova / this.sumKlasa;
    // console.log(this.sumKlasa);
  }
}
