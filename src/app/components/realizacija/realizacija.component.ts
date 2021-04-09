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
  }
}




