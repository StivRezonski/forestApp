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
  odjel = [];
  gazdinstvo = [];
  privrednaJedinica = [];
  projektant = [];
  vrstaSjece = [];
  constructor(private formBuilder: FormBuilder, private sharedService: SharedService,
              public opstiPodaci: OpstiPodaci) {
    this.opstaForma = this.formBuilder.group({
      odjel: [''],
      gazdinstvo: [''],
      privrednaJedinica: [''],
      projektant: [''],
      vrstaSjece: ['']
    });

    this.odjel = this.sharedService.getOdjel();
    this.gazdinstvo = this.sharedService.getGazdinstvo();
    this.privrednaJedinica = this.sharedService.getPrivrednaJedinica();
    this.projektant = this.sharedService.getProjektant();
    this.vrstaSjece = this.sharedService.getVrstaSjece();
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.opstaForma.value);
    this.opstiPodaci.gazdinstvo = this.opstaForma.get('gazdinstvo').value;
    this.opstiPodaci.privrednaJedinica = this.opstaForma.get('privrednaJedinica').value;
    this.opstiPodaci.izabraniOdjel = this.opstaForma.get('odjel').value;
    this.opstiPodaci.vrstaSjece = this.opstaForma.get('vrstaSjece').value;
    this.opstiPodaci.projektant = this.opstaForma.get('projektant').value;
  }

}
