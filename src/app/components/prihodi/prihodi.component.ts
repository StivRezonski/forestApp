import { Component, Input, OnInit } from '@angular/core';
import { SortimentiComponent } from '../sortimenti/sortimenti.component';

@Component({
  selector: 'app-prihodi',
  templateUrl: './prihodi.component.html',
  styleUrls: ['./prihodi.component.css']
})
export class PrihodiComponent implements OnInit {
  // fTrupciJela = this.sortimentiComponent.sumaFTrupciJela;
  // fTrupciJela = 14;
  @Input()fTrupciJela;
  constructor(private sortimentiComponent: SortimentiComponent) { }

  ngOnInit(): void {
    // console.log(this.fTrupciJela);
  }

}
