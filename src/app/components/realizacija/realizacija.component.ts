import { Component, OnInit } from '@angular/core';
import { TrupciService } from '../../services/trupci.service';

@Component({
  selector: 'app-realizacija',
  templateUrl: './realizacija.component.html',
  styleUrls: ['./realizacija.component.css']
})
export class RealizacijaComponent implements OnInit {
  tabJela = false;
  tabSmrca = false;
  tabBijeliBor = false;
  tabCrniBor = false;
  tabBukva = false;
  tabHrast = false;
  tabBrijest = false;
  tabOstali = false;

  constructor(public trupci: TrupciService) {
  }


  ngOnInit(): void {
    if (this.trupci.jelaSaNeto[12] > 0){
      this.tabJela = true;
    }
    if (this.trupci.smrcaSaNeto[12] > 0){
      this.tabSmrca = true;
    }
    if (this.trupci.bijeliBorSaNeto[12] > 0){
      this.tabBijeliBor = true;
    }
    if (this.trupci.crniBorSaNeto[12] > 0){
      this.tabCrniBor = true;
    }
    if (this.trupci.bukvaSaNeto[12] > 0){
      this.tabBukva = true;
    }
    if (this.trupci.hrastSaNeto[12] > 0){
      this.tabHrast = true;
    }
    if (this.trupci.brijestSaNeto[12] > 0){
      this.tabBrijest = true;
    }
    if (this.trupci.ostaliSaNeto[12] > 0){
      this.tabOstali = true;
    }

    // console.log('debela cet', this.trupci.debelaOblovinaCet);
    // console.log('tanka cet', this.trupci.tankaOblovinaCet);
    // console.log('iznos cet', this.trupci.iznosCet);
    // console.log('debela lis', this.trupci.debelaOblovinaLis);
    // console.log('tanka lis', this.trupci.tankaOblovinaLis);
    // console.log('iznos lis', this.trupci.iznosLis);
    //
    // console.log(this.trupci.vrijednostJela);
    // console.log(this.trupci.vrijednostSmrca);
    // console.log(this.trupci.vrijednostBijeliBor);
    // console.log(this.trupci.vrijednostCrniBor);
    // console.log(this.trupci.vrijednostBukva);
    // console.log(this.trupci.vrijednostHrast);
    // console.log(this.trupci.vrijednostBrijest);
    // console.log(this.trupci.vrijednostOstali);
    // console.log(this.trupci.sumCet);
    // console.log(this.trupci.sumLis);
    // console.log(this.trupci.sumCetLis);
    // console.log(this.trupci.debelaOblovinaCet);
    // console.log(this.trupci.tankaOblovinaCet);
    // console.log(this.trupci.iznosCet);
    // console.log(this.trupci.debelaOblovinaLis);
    // console.log(this.trupci.tankaOblovinaLis);
    // console.log(this.trupci.iznosLis);
    // console.log(this.trupci.sveukupnaCet);
    // console.log(this.trupci.sveukupnaLis);
    // console.log(this.trupci.ukupnoSortimenti);

  }
}




