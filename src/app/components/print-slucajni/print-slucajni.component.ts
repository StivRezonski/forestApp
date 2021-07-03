import { Component, OnInit } from '@angular/core';
import { OpstiPodaci } from '../../models/opsti-podaci.model';

@Component({
  selector: 'app-print-slucajni',
  templateUrl: './print-slucajni.component.html',
  styleUrls: ['./print-slucajni.component.css']
})
export class PrintSlucajniComponent implements OnInit {
gazd = "bl"
gra = "kkkk"
godin = 2021
ODJEL1 = 52
  gazdinstvo = this.opstiPodaci.gazdinstvo;
  grad = this.opstiPodaci.grad;
  odjel = this.opstiPodaci.odjel;
  vrstaSjece = this.opstiPodaci.vrstaSjece;
  privrednaJedinica = this.opstiPodaci.privrednaJedinica;
  sumskoPrivrednoPodrucje = this.opstiPodaci.sumskoPrivrednoPodrucje;
  projektant = this.opstiPodaci.projektant;
  sef = this.opstiPodaci.rukovodilacPripreme;
  godina = this.opstiPodaci.godina;

  constructor(private opstiPodaci: OpstiPodaci) { }

  ngOnInit(): void {
  }

}
