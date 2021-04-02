import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OpstiPodaci } from '../../models/opsti-podaci.model';

@Component({
  selector: 'app-opsti-podaci',
  templateUrl: './opsti-podaci.component.html',
  styleUrls: ['./opsti-podaci.component.css']
})


export class OpstiPodaciComponent implements OnInit {
  opstaForma: FormGroup;
  grad = [];
  odjel = [];
  gazdinstvo = [];
  privrednaJedinica = [];
  projektant = [];
  vrstaSjece = [];
  sumskoPrivrednoPodrucje = [];
  rukovodilacPripreme = [];
  constructor(private formBuilder: FormBuilder, private sharedService: SharedService,
              public opstiPodaci: OpstiPodaci) {
    this.opstaForma = this.formBuilder.group({
      grad: [''],
      odjel: [''],
      gazdinstvo: [''],
      privrednaJedinica: [''],
      projektant: [''],
      vrstaSjece: [''],
      sumskoPrivrednoPodrucje: [''],
      rukovodilacPripreme: ['']
    });

    this.grad = this.sharedService.getGrad();
    this.odjel = this.sharedService.getOdjel();
    this.gazdinstvo = this.sharedService.getGazdinstvo();
    this.privrednaJedinica = this.sharedService.getPrivrednaJedinica();
    this.projektant = this.sharedService.getProjektant();
    this.vrstaSjece = this.sharedService.getVrstaSjece();
    this.sumskoPrivrednoPodrucje = this.sharedService.getSumskoPrivrednoPodrucje();
    this.rukovodilacPripreme = this.sharedService.getRukovodilacPripreme();
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.opstaForma.value);
    this.opstiPodaci.gazdinstvo = this.opstaForma.get('gazdinstvo').value;
    this.opstiPodaci.privrednaJedinica = this.opstaForma.get('privrednaJedinica').value;
    this.opstiPodaci.odjel = this.opstaForma.get('odjel').value;
    this.opstiPodaci.vrstaSjece = this.opstaForma.get('vrstaSjece').value;
    this.opstiPodaci.projektant = this.opstaForma.get('projektant').value;
    this.opstiPodaci.sumskoPrivrednoPodrucje = this.opstaForma.get('sumskoPrivrednoPodrucje').value;
    this.opstiPodaci.grad = this.opstaForma.get('grad').value;
    this.opstiPodaci.rukovodilacPripreme = this.opstaForma.get('rukovodilacPripreme').value;
  }

}
