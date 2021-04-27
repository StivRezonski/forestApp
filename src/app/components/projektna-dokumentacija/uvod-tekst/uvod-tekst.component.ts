import { Component, OnInit } from '@angular/core';
import { OpstiPodaci } from '../../../models/opsti-podaci.model';

@Component({
  selector: 'app-uvod-tekst',
  templateUrl: './uvod-tekst.component.html',
  styleUrls: ['./uvod-tekst.component.css']
})
export class UvodTekstComponent implements OnInit {
  gazdinstvo = this.opstiPodaci.gazdinstvo;
  odjel = this.opstiPodaci.odjel;
  mjesec = this.opstiPodaci.mjesec;
  godina = this.opstiPodaci.godina;
  brojCekica = this.opstiPodaci.brojCekica;
  constructor(private opstiPodaci: OpstiPodaci) { }

  ngOnInit(): void {
  }

}
