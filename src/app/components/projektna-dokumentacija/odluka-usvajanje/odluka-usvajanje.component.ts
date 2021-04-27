import { Component, OnInit } from '@angular/core';
import { OpstiPodaci } from '../../../models/opsti-podaci.model';

@Component({
  selector: 'app-odluka-usvajanje',
  templateUrl: './odluka-usvajanje.component.html',
  styleUrls: ['./odluka-usvajanje.component.css']
})
export class OdlukaUsvajanjeComponent implements OnInit {
  gazdinstvo = this.opstiPodaci.gazdinstvo;
  grad = this.opstiPodaci.grad;
  odjel = this.opstiPodaci.odjel;
  vrstaSjece = this.opstiPodaci.vrstaSjece;
  privrednaJedinica = this.opstiPodaci.privrednaJedinica;
  sumskoPrivrednoPodrucje = this.opstiPodaci.sumskoPrivrednoPodrucje;
  projektant = this.opstiPodaci.projektant;
  sef = this.opstiPodaci.rukovodilacPripreme;
  direktor = this.opstiPodaci.direktor;
  liceZaNadzor = this.opstiPodaci.liceZaNadzor;
  godina = this.opstiPodaci.godina;
  constructor(public opstiPodaci: OpstiPodaci) { }

  ngOnInit(): void {
  }

}
