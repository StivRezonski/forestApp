import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OpstiPodaci } from '../../models/opsti-podaci.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-opsti-podaci',
  templateUrl: './opsti-podaci.component.html',
  styleUrls: ['./opsti-podaci.component.css']
})


export class OpstiPodaciComponent implements OnInit {
  gazdGrad: boolean;
  sppPj: boolean;
  odjelProjGodinaCekic: boolean;
  dirRukovod: boolean;
  licaNadzor: boolean;
  sakrijIdiDalje: boolean;
  opstaForma: FormGroup;
  grad = [];
  odjel = [];
  gazdinstvo = [];
  privrednaJedinica = [];
  projektant = [];
  direktor: any = [];
  vrstaSjece = [];
  sumskoPrivrednoPodrucje = [];
  rukovodilacPripreme = [];
  liceZaEksploataciju = [];
  liceZaUzgoj = [];
  liceZaNadzor = [];
  brojCekica = [];
  godina = [];
  mjesec = [];

  constructor(private formBuilder: FormBuilder, public sharedService: SharedService,
              public opstiPodaci: OpstiPodaci, private router: Router, private httpClient: HttpClient) {
    this.opstaForma = this.formBuilder.group({
      grad: new FormControl('', [Validators.required]),
      odjel: new FormControl('', [Validators.required]),
      gazdinstvo: new FormControl('', [Validators.required]),
      privrednaJedinica: new FormControl('', [Validators.required]),
      projektant: new FormControl('', [Validators.required]),
      direktor: new FormControl('', [Validators.required]),
      vrstaSjece: new FormControl('', [Validators.required]),
      sumskoPrivrednoPodrucje: new FormControl('', [Validators.required]),
      rukovodilacPripreme: new FormControl('', [Validators.required]),
      liceZaEksploataciju: new FormControl('', [Validators.required]),
      liceZaUzgoj: new FormControl('', [Validators.required]),
      liceZaNadzor: new FormControl('', [Validators.required]),
      brojCekica: new FormControl('', [Validators.required]),
      godina: new FormControl('', [Validators.required]),
      mjesec: new FormControl('', [Validators.required]),
      // grad: new FormControl(''),
      // odjel: new FormControl(''),
      // gazdinstvo: new FormControl(''),
      // privrednaJedinica: new FormControl(''),
      // projektant: new FormControl(''),
      // direktor: new FormControl(''),
      // vrstaSjece: new FormControl(''),
      // sumskoPrivrednoPodrucje: new FormControl(''),
      // rukovodilacPripreme: new FormControl(''),
      // liceZaEksploataciju: new FormControl(''),
      // liceZaUzgoj: new FormControl(''),
      // liceZaNadzor: new FormControl(''),
      // brojCekica: new FormControl(''),
      // godina: new FormControl(''),
      // mjesec: new FormControl(''),
    });


    this.grad = this.sharedService.getGrad();
    this.odjel = this.sharedService.getOdjel();
    this.gazdinstvo = this.sharedService.getGazdinstvo();
    this.privrednaJedinica = this.sharedService.getPrivrednaJedinica();
    this.projektant = this.sharedService.getProjektant();
    this.vrstaSjece = this.sharedService.getVrstaSjece();
    this.sumskoPrivrednoPodrucje = this.sharedService.getSumskoPrivrednoPodrucje();
    this.rukovodilacPripreme = this.sharedService.getRukovodilacPripreme();
    this.direktor = this.sharedService.getDirektor();
    this.liceZaEksploataciju = this.sharedService.getLiceZaEksploataciju();
    this.liceZaUzgoj = this.sharedService.getLiceZaUzgoj();
    this.liceZaNadzor = this.sharedService.getLiceZaNadzor();
    this.brojCekica = this.sharedService.getBrojCekica();
    this.godina = this.sharedService.getGodina();
    this.mjesec = this.sharedService.getMjesec();

    this.httpClient.get('assets/direktori.json').subscribe(data => {
      this.direktor = data;
    });
  }

  ngOnInit(): void {
    this.gazdGrad = true;
    this.sakrijIdiDalje = true;
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
    this.opstiPodaci.direktor = this.opstaForma.get('direktor').value;
    this.opstiPodaci.liceZaEksploataciju = this.opstaForma.get('liceZaEksploataciju').value;
    this.opstiPodaci.liceZaUzgoj = this.opstaForma.get('liceZaUzgoj').value;
    this.opstiPodaci.liceZaNadzor = this.opstaForma.get('liceZaNadzor').value;
    this.opstiPodaci.brojCekica = this.opstaForma.get('brojCekica').value;
    this.opstiPodaci.godina = this.opstaForma.get('godina').value;
    this.opstiPodaci.mjesec = this.opstaForma.get('mjesec').value;
    this.router.navigate(['/sortimentna-struktura']);
  }

  goNext(): void {
    this.gazdGrad = true;
    if (this.opstaForma.controls.grad.valid && this.opstaForma.controls.gazdinstvo.valid) {
      this.gazdGrad = false;
      this.sppPj = true;
    }

    if (this.opstaForma.controls.privrednaJedinica.valid && this.opstaForma.controls.sumskoPrivrednoPodrucje.valid) {
      this.sppPj = false;
      this.gazdGrad = false;
      this.odjelProjGodinaCekic = true;
    }

    if (this.opstaForma.controls.odjel.valid && this.opstaForma.controls.vrstaSjece.valid &&
      this.opstaForma.controls.projektant.valid && this.opstaForma.controls.mjesec.valid &&
      this.opstaForma.controls.godina.valid && this.opstaForma.controls.brojCekica.valid) {
      this.sppPj = false;
      this.gazdGrad = false;
      this.odjelProjGodinaCekic = false;
      this.dirRukovod = true;
    }

    if (this.opstaForma.controls.rukovodilacPripreme.valid && this.opstaForma.controls.direktor.valid) {
      this.sppPj = false;
      this.gazdGrad = false;
      this.odjelProjGodinaCekic = false;
      this.dirRukovod = false;
      this.licaNadzor = true;
    }

    if (this.opstaForma.controls.liceZaEksploataciju.valid && this.opstaForma.controls.liceZaNadzor.valid &&
      this.opstaForma.controls.liceZaUzgoj.valid) {
      this.sppPj = false;
      this.gazdGrad = false;
      this.odjelProjGodinaCekic = false;
      this.dirRukovod = false;
      this.licaNadzor = false;
      this.sakrijIdiDalje = false;
      this.submit();
    }

  }


  noviDirektor(newDirektor: string): any {
    if (newDirektor) {
      console.log(newDirektor);
    }
  }
}
