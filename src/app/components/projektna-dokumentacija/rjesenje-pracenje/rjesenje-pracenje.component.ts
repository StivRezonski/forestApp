import { Component, OnInit } from '@angular/core';
import { OpstiPodaci } from '../../../models/opsti-podaci.model';

@Component({
  selector: 'app-rjesenje-pracenje',
  templateUrl: './rjesenje-pracenje.component.html',
  styleUrls: ['./rjesenje-pracenje.component.css']
})
export class RjesenjePracenjeComponent implements OnInit {
  gazdinstvo = this.opstiPodaci.gazdinstvo;
  grad = this.opstiPodaci.grad;
  odjel = this.opstiPodaci.odjel;
  vrstaSjece = this.opstiPodaci.vrstaSjece;
  privrednaJedinica = this.opstiPodaci.privrednaJedinica;
  sumskoPrivrednoPodrucje = this.opstiPodaci.sumskoPrivrednoPodrucje;
  projektant = this.opstiPodaci.projektant;
  sef = this.opstiPodaci.rukovodilacPripreme;
  direktor = this.opstiPodaci.direktor;
  liceZaEksploataciju = this.opstiPodaci.liceZaUzgoj;
  liceZaUzgoj = this.opstiPodaci.liceZaEksploataciju;
  constructor(private opstiPodaci: OpstiPodaci) { }

  ngOnInit(): void {
  }

}
