import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sortimenti',
  templateUrl: './sortimenti.component.html',
  styleUrls: ['./sortimenti.component.css']
})
export class SortimentiComponent implements OnInit {
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

  onSubmit() {
    console.log(this.sortimentiFormGroup.value);
    const novaPrvaKlasa = this.sortimentiFormGroup.get('prvaKlasa').value;
    console.log(novaPrvaKlasa);
  }
}
