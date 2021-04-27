import { Component, OnInit } from '@angular/core';
import { OpstiPodaci } from '../../../models/opsti-podaci.model';

@Component({
  selector: 'app-naslovna-strana-projekta',
  templateUrl: './naslovna-strana-projekta.component.html',
  styleUrls: ['./naslovna-strana-projekta.component.css']
})
export class NaslovnaStranaProjektaComponent implements OnInit {
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
