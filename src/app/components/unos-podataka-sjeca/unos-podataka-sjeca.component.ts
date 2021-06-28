import { Component, OnInit } from '@angular/core';
import { TrupciService } from '../../services/trupci.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NormeService } from '../../services/norme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unos-podataka-sjeca',
  templateUrl: './unos-podataka-sjeca.component.html',
  styleUrls: ['./unos-podataka-sjeca.component.css']
})

export class UnosPodatakaSjecaComponent implements OnInit {

  // Varijable za sječu
  bodoviCetinariSjeca;
  bodoviLiscariSjeca;
  srednjiPrecniciCetinari;
  srednjiPrecniciLiscari;
  kljucCet;
  kljucLis;
  srednjiPrecnikCetinari;
  srednjiPrecnikLiscari;
  srednjiPrecnikSjecaCetinariBodovi;
  srednjiPrecnikSjecaLiscariBodovi;
  usloviRadaCetSjeca;
  usloviRadaLisSjeca;
  normaSjeceCetinari;
  normaSjeceLiscari;
  usloviCetSjeca;
  usloviLisSjeca;
  potvrdjenaSjeca = true;
  zavrsenoSaUnosomUslovaSjeca;
  sjeca = true;
  usloviRada = [];
  trueBonitetCetinari;
  trueBonitetLiscari;
  imaCetinara = true;
  zavrsenUnosUslovaRada = false;
  akoSuUsloviZavrseni = true;
  uneseniUsloviRada = false;

  // Varijable za animal
  gustinaPodmlatkaAnimal;
  doznacenaMasaAnimal;
  srednjiPrecnikCetinariBodoviAnimal;
  srednjiPrecnikLiscariBodoviAnimal;
  bodoviCetinariAnimal;
  bodoviLiscariAnimal;
  usloviRadaCetAnimal;
  usloviRadaLisAnimal;
  normaCetAnimalTrupci;
  normaCetAnimalTankaOblovina;
  normaLisAnimalTankaOblovina;
  normaLisAnimalTrupci;
  usloviCetAnimal;
  usloviLisAnimal;
  animal = false;
  procenatAnimala;
  ucesceAnimal;
  animalNorme = false;
  imaAnimala = false;
  validnaFormaAnimala = false;
  potvrdjenAnimal = true;

  // Varijable za iznos
  nagibTerenaIznos;
  gustinaPodmlatkaIznos;
  doznakaIznos;
  bodoviCetinariLiscariIznos;
  usloviRadaCetinariIznos;
  usloviRadaLiscariIznos;
  usloviCetIznos;
  usloviLisIznos;
  normaCetinariIznos;
  normaLiscariIznos;
  imaIznosa = false;
  imaIznos = false;
  validnaFormaIznosa = false;
  potvrdjenIznos = true;

  // Varijable za traktor
  nagibTerenaTraktor;
  nadmorskaVisinaTraktor;
  srPrecnikCetinariTraktor;
  srPrecnikLiscariTraktor;
  bodoviCetinariTraktor;
  bodoviLiscariTraktor;
  usloviRadaCetinariTraktor;
  usloviCetTraktor;
  usloviRadaLiscariTraktor;
  prosjecnoStablo;
  usloviLisTraktor;
  normaCetinariTraktor;
  normaLiscariTraktor;
  traktor = false;
  validnaFormaTraktora = false;
  potvrdjenTraktor = true;

  // Varijable za prečnik
  precnik = true;
  sviPrecnici = [];
  podaciZaIzracunCijene = this.unosNormi.podaciZaIzracunCijene = [];
  uneseniSviPrecnici = true;
  zavrsenoSaUnosomPrecnika = false;
  mase1 = this.trupci.sveukupnaCet;
  mase2 = this.trupci.sveukupnaLis;
  cetVrste = [1, 2, 3, 4];
  lisVrste = [5, 6, 7, 8];
  trueJela = true;
  trueSmrca = true;
  trueBb = true;
  trueCb = true;
  trueBukva = true;
  trueHrast = true;
  truePl = true;
  trueOl = true;

  // Accordion boje
  accordIsValid = false;
  accordionValid = 'bg-info';
  accordionNotValid = 'bg-warning';
  accordionPrecnik;
  accordionSjeca = this.accordColor;
  accordionTraktor = this.accordColor;
  accordionAnimal = this.accordColor;
  accordionIznos = this.accordColor;
  accordTextValid = false;
  accordionTextValidSjeca = this.accordTextColor;
  accordionTextValidTraktor = this.accordTextColor;;
  accordionTextValidAnimal = this.accordTextColor;
  accordionTextValidIznos = this.accordTextColor;
  accordIconValid = false;
  accordionIconSjeca = this.accordIcon;
  accordionIconTraktor = this.accordIcon;
  accordionIconAnimal = this.accordIcon;
  accordionIconIznos = this.accordIcon;

  // Forma unosa precnika
  unosPrecnika = new FormGroup({
    vrsta: new FormControl(),
    precnik: new FormControl('',
      [Validators.required,
      Validators.minLength(2),
      Validators.maxLength(2)])
  });

  // Forma uslova sjeca
  unosUslovaRada = new FormGroup({
    nagibSjeca: new FormControl(),
    gustinaPodmlatkaSjeca: new FormControl(),
    doznacenaMasaSjeca: new FormControl(),
    nadmorskaVisinaSjecaAnimal: new FormControl(),
    udaljenostOdCesteSjeca: new FormControl(),
    bonitetCetinari: new FormControl(),
    bonitetLiscari: new FormControl(),
    ucesceAnimala: new FormControl(),
    periodSjece: new FormControl(),
    planiranIznos: new FormControl(),
    saKorom: new FormControl()
  });

  // Forma unosa animal
  usloviAnimal = new FormGroup({
    nagibAnimal: new FormControl(),
    ucesceLiscaraAnimal: new FormControl(),
    udaljenostOdStale: new FormControl(),
    animalDistanca: new FormControl()
  });

  // Forma unosa traktor
  usloviTraktor = new FormGroup({
    nagibTraktor: new FormControl(),
    vrstaTlaTraktor: new FormControl(),
    udaljenostOdGaraza: new FormControl(),
    traktorDistanca: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(4)]),
    primicanjeTraktor: new FormControl()
  });

  // Forma unosa iznos
  usloviIznos = new FormGroup({
    vrstaTla: new FormControl(),
    iznosDistanca: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(4)])
  });

  constructor(public trupci: TrupciService, private unosNormi: NormeService,
    private router: Router) {

    // Puni niz za učešće animala
    const range = (from, to, step) =>
      [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);
    this.ucesceAnimal = range(0, 100, 5);

    if (this.trupci.jelaSaNeto[12] == null || this.trupci.jelaSaNeto[12] == 0) {
      this.trueJela = true;
    } else {
      this.trueJela = false;
    }
    if (this.trupci.smrcaSaNeto[12] == null || this.trupci.smrcaSaNeto[12] == 0) {
      this.trueSmrca = true;
    } else {
      this.trueSmrca = false;
    }
    if (this.trupci.bijeliBorSaNeto[12] == null || this.trupci.bijeliBorSaNeto[12] == 0) {
      this.trueBb = true;
    } else {
      this.trueBb = false;
    }
    if (this.trupci.crniBorSaNeto[12] == null || this.trupci.crniBorSaNeto[12] == 0) {
      this.trueCb = true;
    } else {
      this.trueCb = false;
    }
    if (this.trupci.bukvaSaNeto[12] == null || this.trupci.bukvaSaNeto[12] == 0) {
      this.trueBukva = true;
    } else {
      this.trueBukva = false;
    }
    if (this.trupci.hrastSaNeto[12] == null || this.trupci.hrastSaNeto[12] == 0) {
      this.trueHrast = true;
    } else {
      this.trueHrast = false;
    }
    if (this.trupci.brijestSaNeto[12] == null || this.trupci.brijestSaNeto[12] == 0) {
      this.truePl = true;
    } else {
      this.truePl = false;
    }
    if (this.trupci.ostaliSaNeto[12] == null || this.trupci.ostaliSaNeto[12] == 0) {
      this.trueOl = true;
    } else {
      this.trueOl = false;
    }
  }

  ngOnInit(): void {
    this.accordColor;
    this.accordTextColor;
    this.accordIcon;
  }

  unesiPrecnik(): void {
    this.sviPrecnici.push(this.unosPrecnika.value);
    this.unosPrecnika.reset();

    if (this.sviPrecnici.filter(k => this.cetVrste.includes(k.vrsta)).length ==
      this.mase1.length && this.sviPrecnici.filter(k => this.lisVrste.includes(k.vrsta)).length ==
      this.mase2.length) {
      this.uneseniSviPrecnici = false;
      this.precnik = false;
    } else {
      this.uneseniSviPrecnici = true;
    }

    if (this.mase1.length == 0) {
      this.trueBonitetCetinari = false;
      this.imaCetinara = false;
    } else {
      this.trueBonitetCetinari = true;
    }

    if (this.mase2.length == 0) {
      this.trueBonitetLiscari = false;
    } else {
      this.trueBonitetLiscari = true;
    }

    if (this.sviPrecnici.find(j => j.vrsta == 1)) {
      this.trueJela = true;
    }
    if (this.sviPrecnici.find(j => j.vrsta == 2)) {
      this.trueSmrca = true;
    }
    if (this.sviPrecnici.find(j => j.vrsta == 3)) {
      this.trueBb = true;
    }
    if (this.sviPrecnici.find(j => j.vrsta == 4)) {
      this.trueCb = true;
    }
    if (this.sviPrecnici.find(j => j.vrsta == 5)) {
      this.trueBukva = true;
    }
    if (this.sviPrecnici.find(j => j.vrsta == 6)) {
      this.trueHrast = true;
    }
    if (this.sviPrecnici.find(j => j.vrsta == 7)) {
      this.truePl = true;
    }
    if (this.sviPrecnici.find(j => j.vrsta == 8)) {
      this.trueOl = true;
    }

    this.uneseniUsloviRada = false;

    this.sviPrecnici.sort((a, b) => a.vrsta - b.vrsta);

    // Sveukupna masa cetinara
    const masaCet = this.mase1.reduce(function (m, n) {
      return m + n;
    }, 0);

    // Sveukupna masa liscara
    const masaLis = this.mase2.reduce(function (m, n) {
      return m + n;
    }, 0);

    // Zbir sveukupne masa pomnozena sa precnikom cetinara
      this.srednjiPrecniciCetinari = this.sviPrecnici.filter(k => this.cetVrste.includes(k.vrsta))
      .map((a, i) => a.precnik * this.mase1[i]).reduce(function (g, f) {
        return (g + f);
      }, 0);

    // Zbir sveukupne masa pomnozena sa precnikom liscara
      this.srednjiPrecniciLiscari = this.sviPrecnici.filter(k => this.lisVrste.includes(k.vrsta))
      .map((a, i) => a.precnik * this.mase2[i]).reduce(function (g, f) {
        return (g + f);
      }, 0);

    // Srednji precnik cetinara
    if (this.srednjiPrecniciCetinari == 0){
        this.srednjiPrecnikCetinari = 0
    } else if ((this.srednjiPrecniciCetinari / masaCet) <= 25 && this.srednjiPrecniciCetinari !== 0) {
        this.srednjiPrecnikCetinari = 25;
    } else {
        this.srednjiPrecnikCetinari = (this.srednjiPrecniciCetinari / masaCet).toFixed(0);
    }

    // Srednji precnik lišćara
    if(this.srednjiPrecniciLiscari == 0){
        this.srednjiPrecnikLiscari = 0
    }else if ((this.srednjiPrecniciLiscari / masaLis) <= 25 && this.srednjiPrecniciLiscari !== 0) {
        this.srednjiPrecnikLiscari = 25;
    } else {
        this.srednjiPrecnikLiscari = (this.srednjiPrecniciLiscari / masaLis).toFixed(0);
    }
  }

  potvrdiNormeSjece() {

    if (this.unosUslovaRada.value.planiranIznos == 0) {
      this.imaIznosa = true;
    } else {
      this.validnaFormaIznosa = true;
      this.imaIznosa = false;
    }

    if (this.unosUslovaRada.value.ucesceAnimala == 0) {
      this.validnaFormaAnimala = true;
      this.traktor = true;
      this.procenatAnimala = null;
    } else if (this.unosUslovaRada.value.ucesceAnimala > 0 && this.unosUslovaRada.value.ucesceAnimala < 100) {
      this.traktor = true;
      this.animal = true;
      this.procenatAnimala = this.unosUslovaRada.value.ucesceAnimala / 100;
    } else if (this.unosUslovaRada.value.ucesceAnimala == 100) {
      this.traktor = false;
      this.validnaFormaTraktora = true;
      this.animal = true;
      this.procenatAnimala = this.unosUslovaRada.value.ucesceAnimala / 100;
    }
    this.promjeniBojuAccordionSjeca();
    this.potvrdjenaSjeca = false;
  }

  animalBtn() {
    if (this.usloviAnimal.valid) {
      this.validnaFormaAnimala = true;
      this.promjeniBojuAccordionAnimal();
    }
    this.potvrdjenAnimal = false;
  }
  iznosBtn() {
    if (this.usloviIznos.valid) {
      this.validnaFormaIznosa = true;
      this.promjeniBojuAccordionIznos();
    }
    this.potvrdjenIznos = false;
  }
  traktorBtn() {
    if (this.usloviTraktor.valid) {
      this.validnaFormaTraktora = true;
      this.promjeniBojuAccordionTraktor();
    }
    this.potvrdjenTraktor = false;
  }

  // Mijenja boju accordiona
  promjeniBojuAccordionSjeca(): void {
    this.setTrueAccordForm();
    this.accordionSjeca = this.accordColor;
    // this.accordionSjeca = this.accordionValid;
    this.accordionTextValidSjeca = this.accordTextColor;
    // this.accordionTextValidSjeca = this.accordionTextValid;
    this.accordionIconSjeca = this.accordIcon;
    // this.accordionIconSjeca = this.accordionIconCheck;
  }
  promjeniBojuAccordionTraktor(): void {
    this.setTrueAccordForm();
    this.accordionTraktor = this.accordColor;
    this.accordionTextValidTraktor = this.accordTextColor;
    this.accordionIconTraktor = this.accordIcon;
  }
  promjeniBojuAccordionAnimal(): void {
    this.setTrueAccordForm();
    this.accordionAnimal = this.accordColor;
    this.accordionTextValidAnimal = this.accordTextColor;
    this.accordionIconAnimal = this.accordIcon;
  }
  promjeniBojuAccordionIznos(): void {
    this.setTrueAccordForm();
    this.accordionIznos = this.accordColor;
    this.accordionTextValidIznos = this.accordTextColor;
    this.accordionIconIznos = this.accordIcon;
  }

  setTrueAccordForm() {
    this.accordIsValid = true;
    this.accordTextValid = true;
    this.accordIconValid = true;
  }

  public get accordColor(): string {
    return this.accordIsValid ? 'bg-info' : 'bg-warning';
  }

  public get accordTextColor(): string {
    return this.accordTextValid ? 'text-light' : 'text-dark';
  }

  public get accordIcon(): string {
    return this.accordIconValid ? 'bi bi-check2-square' : 'bi bi-exclamation-lg';
  }
  
  // Funkcija prikupljanja podataka potrebnih za izracun normi
  potvrdi(): void {
    
    this.usloviRada.push(this.unosUslovaRada.value);
    this.router.navigate(['/realizacija']);

  // Animal norme
    this.animalNorma();
       
  // Sjeca norma
    this.sjecaNorme();

  // Traktorske norme
    this.traktorNorma();

  // Iznos norme
    this.iznosNorme();

    // Podaci za dalji izračun cijena i za potrebe tabele u html-u
    this.podaciZaIzracunCijene.push(
      { distanca: this.usloviAnimal.value.animalDistanca },
      { bonitetCetinari: parseInt(this.unosUslovaRada.value.bonitetCetinari) },
      { bonitetLiscari: parseInt(this.unosUslovaRada.value.bonitetLiscari) },
      { srPrCet: this.srednjiPrecnikCetinari },
      { srPrLis: this.srednjiPrecnikLiscari },
      { usloviRadaCetSjeca: this.usloviCetSjeca },
      { usloviRadaLisSjeca: this.usloviLisSjeca },
      { normaCetSjeca: parseFloat(this.normaSjeceCetinari) },
      { normaLisSjeca: parseFloat(this.normaSjeceLiscari) },
      { usloviRadaCetAnimal: this.usloviCetAnimal },
      { usloviRadaLisAnimal: this.usloviLisAnimal },
      { normaCetAnimalTrupci: parseFloat(this.normaCetAnimalTrupci).toFixed(2) },
      { normaCetAnimalTankaOblovina: parseFloat(this.normaCetAnimalTankaOblovina).toFixed(2) },
      { normaLisAnimalTrupci: parseFloat(this.normaLisAnimalTrupci).toFixed(2) },
      { normaLisAnimalTankaOblovina: parseFloat(this.normaLisAnimalTankaOblovina).toFixed(2) },
      { usloviRadaCetinariIznos: this.usloviCetIznos },
      { usloviRadaLiscariIznos: this.usloviLisIznos },
      { normaCetinariIznos: this.normaCetinariIznos },
      { normaLiscariIznos: this.normaLiscariIznos },
      { ucesceAnimala: this.procenatAnimala },
      { distancaIznos: this.usloviIznos.value.iznosDistanca },
      { usloviRadaCetinariTraktor: this.usloviCetTraktor },
      { usloviRadaLiscariTraktor: this.usloviLisTraktor },
      { procenatAnimal: this.procenatAnimala },
      { distancaTraktor: this.usloviTraktor.value.traktorDistanca },
      { normaCetinariTraktor: this.normaCetinariTraktor },
      { normaLiscariTraktor: this.normaLiscariTraktor },
      { imaIznosa: this.imaIznosa }
    );
    console.log(this.unosNormi.podaciZaIzracunCijene);
  }

  private sjecaNorme() {
    if (this.srednjiPrecnikCetinari !== 0) {

      if (this.srednjiPrecnikCetinari > 45) {
        this.srednjiPrecnikSjecaCetinariBodovi = 3;
      } else if (30 < this.srednjiPrecnikCetinari && this.srednjiPrecnikCetinari < 46) {
        this.srednjiPrecnikSjecaCetinariBodovi = 5;
      } else {
        this.srednjiPrecnikSjecaCetinariBodovi = 12;
      }

      this.bodoviCetinariSjeca = this.unosUslovaRada.value.nagibSjeca + this.unosUslovaRada.value.gustinaPodmlatkaSjeca
        + this.unosUslovaRada.value.doznacenaMasaSjeca + this.unosUslovaRada.value.nadmorskaVisinaSjecaAnimal
        + this.unosUslovaRada.value.udaljenostOdCesteSjeca + this.srednjiPrecnikSjecaCetinariBodovi;

      if (18 >= this.bodoviCetinariSjeca) {
        this.usloviRadaCetSjeca = 0;
        this.usloviCetSjeca = 'I';
      } else if (this.bodoviCetinariSjeca >= 19 && this.bodoviCetinariSjeca <= 25) {
        this.usloviRadaCetSjeca = 1;
        this.usloviCetSjeca = 'I/II';
      } else if (this.bodoviCetinariSjeca >= 26 && this.bodoviCetinariSjeca <= 32) {
        this.usloviRadaCetSjeca = 2;
        this.usloviCetSjeca = 'II';
      } else if (this.bodoviCetinariSjeca >= 33 && this.bodoviCetinariSjeca <= 41) {
        this.usloviRadaCetSjeca = 3;
        this.usloviCetSjeca = 'II/III';
      } else {
        this.usloviRadaCetSjeca = 4;
        this.usloviCetSjeca = 'III';
      }

      if (this.unosUslovaRada.get('saKorom').value == 1) {
        if (this.unosUslovaRada.value.periodSjece == 1) {
          const a = (Object.keys(this.unosNormi.zimaCet1[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1]))
            .filter(k => k < this.srednjiPrecnikCetinari).pop();

          const b = (Object.keys(this.unosNormi.zimaCet1[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1]))
            .filter(k => k > this.srednjiPrecnikCetinari)[0];

          const x = this.unosNormi.zimaCet1[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][b];

          const y = this.unosNormi.zimaCet1[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][a];

          if (this.srednjiPrecnikCetinari! % 5) {
            this.normaSjeceCetinari = (((x - y) / 5) * (this.srednjiPrecnikCetinari - parseInt(a)) +
              parseFloat(y)).toFixed(2);
          } else {
            this.kljucCet = (Object.keys(this.unosNormi.zimaCet1[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1])).filter(k => k == this.srednjiPrecnikCetinari)[0];

            this.normaSjeceCetinari = this.unosNormi.zimaCet1[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][this.kljucCet];
          }
        } else {
          console.log('bez koranja ljeto');
          const a = (Object.keys(this.unosNormi.ljetoCet1[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1]))
            .filter(k => k < this.srednjiPrecnikCetinari).pop();

          const b = (Object.keys(this.unosNormi.ljetoCet1[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1]))
            .filter(k => k > this.srednjiPrecnikCetinari)[0];

          const x = this.unosNormi.ljetoCet1[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][b];

          const y = this.unosNormi.ljetoCet1[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][a];

          if (this.srednjiPrecnikCetinari! % 5) {
            this.normaSjeceCetinari = (((x - y) / 5) * (this.srednjiPrecnikCetinari - parseInt(a)) +
              parseFloat(y)).toFixed(2);
          } else {
            this.kljucCet = (Object.keys(this.unosNormi.ljetoCet1[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1])).filter(k => k == this.srednjiPrecnikCetinari)[0];

            this.normaSjeceCetinari = this.unosNormi.ljetoCet1[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][this.kljucCet];
          }
        }

      } else if (this.unosUslovaRada.get('saKorom').value == 0) {
        if (this.unosUslovaRada.value.periodSjece == 1) {
          const a = (Object.keys(this.unosNormi.zimaCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1]))
            .filter(k => k < this.srednjiPrecnikCetinari).pop();

          const b = (Object.keys(this.unosNormi.zimaCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1]))
            .filter(k => k > this.srednjiPrecnikCetinari)[0];

          const x = this.unosNormi.zimaCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][b];

          const y = this.unosNormi.zimaCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][a];

          if (this.srednjiPrecnikCetinari! % 5) {
            this.normaSjeceCetinari = (((x - y) / 5) * (this.srednjiPrecnikCetinari - parseInt(a)) +
              parseFloat(y)).toFixed(2);
          } else {
            this.kljucCet = (Object.keys(this.unosNormi.zimaCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1])).filter(k => k == this.srednjiPrecnikCetinari)[0];

            this.normaSjeceCetinari = this.unosNormi.zimaCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][this.kljucCet];
          }
        } else {
          const a = (Object.keys(this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1]))
            .filter(k => k < this.srednjiPrecnikCetinari).pop();

          const b = (Object.keys(this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1]))
            .filter(k => k > this.srednjiPrecnikCetinari)[0];

          const x = this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][b];

          const y = this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][a];

          if (this.srednjiPrecnikCetinari! % 5) {
            this.normaSjeceCetinari = (((x - y) / 5) * (this.srednjiPrecnikCetinari - parseInt(a)) +
              parseFloat(y)).toFixed(2);
          } else {
            this.kljucCet = (Object.keys(this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1])).filter(k => k == this.srednjiPrecnikCetinari)[0];

            this.normaSjeceCetinari = this.unosNormi.ljetoCet[this.usloviRadaCetSjeca][this.unosUslovaRada.value.bonitetCetinari - 1][this.kljucCet];
          }

        }
      }
    } else {
      this.bodoviCetinariSjeca = 0;
      this.usloviRadaCetSjeca = 0;
      this.normaSjeceCetinari = 0;
      this.normaSjeceLiscari = 0;
      this.unosUslovaRada.get('bonitetCetinari').patchValue('0');
    }


    if (this.srednjiPrecnikLiscari !== 0) {

      if (this.srednjiPrecnikLiscari > 45) {
        this.srednjiPrecnikSjecaLiscariBodovi = 3;
      } else if (30 < this.srednjiPrecnikLiscari && this.srednjiPrecnikLiscari < 46) {
        this.srednjiPrecnikSjecaLiscariBodovi = 5;
      } else {
        this.srednjiPrecnikSjecaLiscariBodovi = 12;
      }

      this.bodoviLiscariSjeca = this.unosUslovaRada.value.nagibSjeca + this.unosUslovaRada.value.gustinaPodmlatkaSjeca
        + this.unosUslovaRada.value.doznacenaMasaSjeca + this.unosUslovaRada.value.nadmorskaVisinaSjecaAnimal
        + this.unosUslovaRada.value.udaljenostOdCesteSjeca + this.srednjiPrecnikSjecaLiscariBodovi;

      if (18 >= this.bodoviLiscariSjeca) {
        this.usloviRadaLisSjeca = 0;
        this.usloviLisSjeca = 'I';
      } else if (this.bodoviLiscariSjeca >= 19 && this.bodoviLiscariSjeca <= 25) {
        this.usloviRadaLisSjeca = 1;
        this.usloviLisSjeca = 'I/II';
      } else if (this.bodoviLiscariSjeca >= 26 && this.bodoviLiscariSjeca <= 32) {
        this.usloviRadaLisSjeca = 2;
        this.usloviLisSjeca = 'II';
      } else if (this.bodoviLiscariSjeca >= 33 && this.bodoviLiscariSjeca <= 41) {
        this.usloviRadaLisSjeca = 3;
        this.usloviLisSjeca = 'II/III';
      } else {
        this.usloviRadaLisSjeca = 4;
        this.usloviLisSjeca = 'III';
      }

      if (this.unosUslovaRada.value.periodSjece == 1) {

        const c = (Object.keys(this.unosNormi.ljetoLis1[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1]))
          .filter(k => k < this.srednjiPrecnikLiscari).pop();

        const d = (Object.keys(this.unosNormi.ljetoLis1[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1]))
          .filter(k => k > this.srednjiPrecnikLiscari)[0];

        const z = this.unosNormi.ljetoLis1[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1][d];

        const q = this.unosNormi.ljetoLis1[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1][c];

        if (this.srednjiPrecnikLiscari! % 5) {
          this.normaSjeceLiscari = (((z - q) / 5) * (this.srednjiPrecnikLiscari - parseInt(c)) +
            parseFloat(q)).toFixed(2);
        } else {
          this.kljucLis = (Object.keys(this.unosNormi.ljetoLis1[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1])).filter(k => k == this.srednjiPrecnikLiscari)[0];
          this.normaSjeceLiscari = this.unosNormi.ljetoLis1[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1][this.kljucLis];
        }
      } else {

        const c = (Object.keys(this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1]))
          .filter(k => k < this.srednjiPrecnikLiscari).pop();

        const d = (Object.keys(this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1]))
          .filter(k => k > this.srednjiPrecnikLiscari)[0];

        const z = this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1][d];

        const q = this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1][c];

        if (this.srednjiPrecnikLiscari! % 5) {
          this.normaSjeceLiscari = (((z - q) / 5) * (this.srednjiPrecnikLiscari - parseInt(c)) +
            parseFloat(q)).toFixed(2);
        } else {
          this.kljucLis = (Object.keys(this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1])).filter(k => k == this.srednjiPrecnikLiscari)[0];
          this.normaSjeceLiscari = this.unosNormi.ljetoLis[this.usloviRadaLisSjeca][this.unosUslovaRada.value.bonitetLiscari - 1][this.kljucLis];
        }
      }
    } else {
      this.bodoviLiscariSjeca = 0;
      this.usloviRadaLisSjeca = 0;
      this.normaSjeceLiscari = 0;
      this.normaSjeceLiscari = 0;
      this.unosUslovaRada.get('bonitetLiscari').patchValue('0');
    }
  }

  private animalNorma() {

  // Animal norma
    if (this.unosUslovaRada.value.gustinaPodmlatkaSjeca == 1) {
      this.gustinaPodmlatkaAnimal = 2;
      this.gustinaPodmlatkaIznos = 2;
    } else if (this.unosUslovaRada.value.gustinaPodmlatkaSjeca == 4) {
      this.gustinaPodmlatkaAnimal = 4;
      this.gustinaPodmlatkaIznos = 3;
    } else {
      this.gustinaPodmlatkaAnimal = 9;
      this.gustinaPodmlatkaIznos = 5;
    }

    if (this.unosUslovaRada.value.doznacenaMasaSjeca == 4) {
      this.doznacenaMasaAnimal = 1;
      this.doznakaIznos = 3;
    } else if (this.unosUslovaRada.value.doznacenaMasaSjeca == 6) {
      this.doznacenaMasaAnimal = 3;
      this.doznakaIznos = 6;
    } else {
      this.doznacenaMasaAnimal = 6;
      this.doznakaIznos = 11;
    }

  


    if (this.unosUslovaRada.value.ucesceAnimala !== 0) {
     

      if (this.srednjiPrecnikCetinari > 45) {
        this.srednjiPrecnikCetinariBodoviAnimal = 4;
        this.srPrecnikCetinariTraktor = 2;
      } else if (30 < this.srednjiPrecnikCetinari && this.srednjiPrecnikCetinari < 46) {
        this.srednjiPrecnikCetinariBodoviAnimal = 6;
        this.srPrecnikCetinariTraktor = 5;
      } else {
        this.srednjiPrecnikCetinariBodoviAnimal = 10;
        this.srPrecnikCetinariTraktor = 8;
      }

      this.bodoviCetinariAnimal = this.usloviAnimal.value.nagibAnimal + this.usloviAnimal.value.ucesceLiscaraAnimal
        + this.gustinaPodmlatkaAnimal + this.doznacenaMasaAnimal
        + this.unosUslovaRada.value.nadmorskaVisinaSjecaAnimal + this.usloviAnimal.value.udaljenostOdStale
        + this.srednjiPrecnikCetinariBodoviAnimal;

      if (18 >= this.bodoviCetinariAnimal) {
        this.usloviRadaCetAnimal = 0;
        this.usloviCetAnimal = 'I';
      } else if (this.bodoviCetinariAnimal >= 19 && this.bodoviCetinariAnimal <= 25) {
        this.usloviRadaCetAnimal = 1;
        this.usloviCetAnimal = 'I/II';
      } else if (this.bodoviCetinariAnimal >= 26 && this.bodoviCetinariAnimal <= 32) {
        this.usloviRadaCetAnimal = 2;
        this.usloviCetAnimal = 'II';
      } else if (this.bodoviCetinariAnimal >= 33 && this.bodoviCetinariAnimal <= 41) {
        this.usloviRadaCetAnimal = 3;
        this.usloviCetAnimal = 'II/III';
      } else {
        this.usloviRadaCetAnimal = 4;
        this.usloviCetAnimal = 'III';
      }

      if (this.unosUslovaRada.get('saKorom').value == 1) {
        this.normaCetAnimalTrupci =
          (this.unosNormi.animalCet[this.usloviRadaCetAnimal][0][this.usloviAnimal.value.animalDistanca.toString()]) * 0.8;

        this.normaCetAnimalTankaOblovina =
          (this.unosNormi.animalCet[this.usloviRadaCetAnimal][1][this.usloviAnimal.value.animalDistanca.toString()]) * 0.8;
      } else {
        this.normaCetAnimalTrupci =
          this.unosNormi.animalCet[this.usloviRadaCetAnimal][0][this.usloviAnimal.value.animalDistanca.toString()];

        this.normaCetAnimalTankaOblovina =
          this.unosNormi.animalCet[this.usloviRadaCetAnimal][1][this.usloviAnimal.value.animalDistanca.toString()];
      }
    } else {
      this.bodoviCetinariAnimal = 0;
      this.normaCetAnimalTrupci = 0;
      this.normaCetAnimalTankaOblovina = 0;   
    }
    

    if (this.unosUslovaRada.value.ucesceAnimala !== 0) {

     

      if (this.srednjiPrecnikLiscari > 45) {
        this.srednjiPrecnikLiscariBodoviAnimal = 4;
        this.srPrecnikLiscariTraktor = 2;
      } else if (30 < this.srednjiPrecnikLiscari && this.srednjiPrecnikLiscari < 46) {
        this.srednjiPrecnikLiscariBodoviAnimal = 6;
        this.srPrecnikLiscariTraktor = 5;
      } else {
        this.srednjiPrecnikLiscariBodoviAnimal = 10;
        this.srPrecnikLiscariTraktor = 8;
      }

      this.bodoviLiscariAnimal = this.usloviAnimal.value.nagibAnimal + this.usloviAnimal.value.ucesceLiscaraAnimal
        + this.gustinaPodmlatkaAnimal + this.doznacenaMasaAnimal
        + this.unosUslovaRada.value.nadmorskaVisinaSjecaAnimal + this.usloviAnimal.value.udaljenostOdStale
        + this.srednjiPrecnikLiscariBodoviAnimal;

      if (18 >= this.bodoviLiscariAnimal) {
        this.usloviRadaLisAnimal = 0;
        this.usloviLisAnimal = 'I';
      } else if (this.bodoviLiscariAnimal >= 19 && this.bodoviLiscariAnimal <= 25) {
        this.usloviRadaLisAnimal = 1;
        this.usloviLisAnimal = 'I/II';
      } else if (this.bodoviLiscariAnimal >= 26 && this.bodoviLiscariAnimal <= 32) {
        this.usloviRadaLisAnimal = 2;
        this.usloviLisAnimal = 'II';
      } else if (this.bodoviLiscariAnimal >= 33 && this.bodoviLiscariAnimal <= 41) {
        this.usloviRadaLisAnimal = 3;
        this.usloviLisAnimal = 'II/III';
      } else {
        this.usloviRadaLisAnimal = 4;
        this.usloviLisAnimal = 'III';
      }

      this.normaLisAnimalTrupci =
        this.unosNormi.animalLis[this.usloviRadaLisAnimal][0][this.usloviAnimal.value.animalDistanca.toString()];
      this.normaLisAnimalTankaOblovina =
        this.unosNormi.animalLis[this.usloviRadaLisAnimal][1][this.usloviAnimal.value.animalDistanca.toString()];

    } else {
      this.bodoviLiscariAnimal = 0;
      this.normaLisAnimalTrupci = 0;
      this.normaLisAnimalTankaOblovina = 0; 
    }
  }

  private iznosNorme() {
    if (this.usloviAnimal.value.nagibAnimal == 4) {
      this.nagibTerenaIznos = 5;
    } else if (this.unosUslovaRada.value.nagibAnimal == 6) {
      this.nagibTerenaIznos = 10;
    } else {
      this.nagibTerenaIznos = 15;
    }

    if (this.usloviIznos.value.vrstaTla == 0 || this.usloviIznos.value.vrstaTla == null) {
      this.bodoviCetinariLiscariIznos = null;
    } else {
      this.bodoviCetinariLiscariIznos = this.nagibTerenaIznos + this.usloviIznos.value.vrstaTla
        + this.gustinaPodmlatkaIznos + this.doznakaIznos + this.unosUslovaRada.value.nadmorskaVisinaSjecaAnimal
        + this.usloviAnimal.value.udaljenostOdStale;
    }

    if (this.bodoviCetinariLiscariIznos == null) {
      this.usloviRadaCetinariIznos = null;
      this.usloviRadaLiscariIznos = null;
      this.usloviCetIznos = null;
      this.usloviLisIznos = null;
      this.normaCetinariIznos = 0;
      this.normaLiscariIznos = 0;
    } else if (18 >= this.bodoviCetinariLiscariIznos) {
      this.usloviRadaCetinariIznos = 0;
      this.usloviRadaLiscariIznos = 0;
      this.usloviCetIznos = 'I';
      this.usloviLisIznos = 'I';
      this.normaCetinariIznos = this.unosNormi.iznosCet[this.usloviRadaCetinariIznos][this.unosUslovaRada.value.iznosDistanca];
      this.normaLiscariIznos = this.unosNormi.iznosLis[this.usloviRadaLiscariIznos][this.unosUslovaRada.value.iznosDistanca];
    } else if (this.bodoviCetinariLiscariIznos >= 19 && this.bodoviCetinariLiscariIznos <= 25) {
      this.usloviRadaCetinariIznos = 1;
      this.usloviRadaLiscariIznos = 1;
      this.usloviCetIznos = 'I/II';
      this.usloviLisIznos = 'I/II';
      this.normaCetinariIznos = this.unosNormi.iznosCet[this.usloviRadaCetinariIznos][this.usloviIznos.value.iznosDistanca];
      this.normaLiscariIznos = this.unosNormi.iznosLis[this.usloviRadaLiscariIznos][this.usloviIznos.value.iznosDistanca];
    } else if (this.bodoviCetinariLiscariIznos >= 26 && this.bodoviCetinariLiscariIznos <= 32) {
      this.usloviRadaCetinariIznos = 2;
      this.usloviRadaLiscariIznos = 2;
      this.usloviCetIznos = 'II';
      this.usloviLisIznos = 'II';
      this.normaCetinariIznos = this.unosNormi.iznosCet[this.usloviRadaCetinariIznos][this.usloviIznos.value.iznosDistanca];
      this.normaLiscariIznos = this.unosNormi.iznosLis[this.usloviRadaLiscariIznos][this.usloviIznos.value.iznosDistanca];
    } else if (this.bodoviCetinariLiscariIznos >= 33 && this.bodoviCetinariLiscariIznos <= 41) {
      this.usloviRadaCetinariIznos = 3;
      this.usloviRadaLiscariIznos = 3;
      this.usloviCetIznos = 'II/III';
      this.usloviLisIznos = 'II/III';
      this.normaCetinariIznos = this.unosNormi.iznosCet[this.usloviRadaCetinariIznos][this.usloviIznos.value.iznosDistanca];
      this.normaLiscariIznos = this.unosNormi.iznosLis[this.usloviRadaLiscariIznos][this.usloviIznos.value.iznosDistanca];
    } else {
      this.usloviRadaCetinariIznos = 4;
      this.usloviRadaLiscariIznos = 4;
      this.usloviCetIznos = 'III';
      this.usloviLisIznos = 'III';
      this.normaCetinariIznos = this.unosNormi.iznosCet[this.usloviRadaCetinariIznos][this.usloviIznos.value.iznosDistanca];
      this.normaLiscariIznos = this.unosNormi.iznosLis[this.usloviRadaLiscariIznos][this.usloviIznos.value.iznosDistanca];
    }
  }

  private traktorNorma() {
    this.bodoviCetinariTraktor = this.usloviAnimal.value.nagibAnimal + this.usloviTraktor.value.nagibTraktor +
      this.usloviTraktor.value.vrstaTlaTraktor + this.unosUslovaRada.value.nadmorskaVisinaSjecaAnimal +
      this.usloviTraktor.value.udaljenostOdGaraza + this.srPrecnikCetinariTraktor + this.unosUslovaRada.value.doznacenaMasaSjeca;

    this.bodoviLiscariTraktor = this.usloviAnimal.value.nagibAnimal + this.usloviTraktor.value.nagibTraktor +
      this.usloviTraktor.value.vrstaTlaTraktor + this.unosUslovaRada.value.nadmorskaVisinaSjecaAnimal +
      this.usloviTraktor.value.udaljenostOdGaraza + this.srPrecnikLiscariTraktor + this.unosUslovaRada.value.doznacenaMasaSjeca;

    // Uslovi rada cetinari traktor
    if (18 >= this.bodoviCetinariTraktor) {
      this.usloviRadaCetinariTraktor = 0;
      this.usloviCetTraktor = 'I';
    } else if (this.bodoviCetinariTraktor >= 19 && this.bodoviCetinariTraktor <= 25) {
      this.usloviRadaCetinariTraktor = 1;
      this.usloviCetTraktor = 'I/II';
    } else if (this.bodoviCetinariTraktor >= 26 && this.bodoviCetinariTraktor <= 32) {
      this.usloviRadaCetinariTraktor = 2;
      this.usloviCetTraktor = 'II';
    } else if (this.bodoviCetinariTraktor >= 33 && this.bodoviCetinariTraktor <= 41) {
      this.usloviRadaCetinariTraktor = 3;
      this.usloviCetTraktor = 'II/III';
    } else {
      this.usloviRadaCetinariTraktor = 4;
      this.usloviCetTraktor = 'III';
    }

    // Uslovi rada liscari traktor
    if (18 >= this.bodoviLiscariTraktor) {
      this.usloviRadaLiscariTraktor = 0;
      this.usloviLisTraktor = 'I';
    } else if (this.bodoviLiscariTraktor >= 19 && this.bodoviLiscariTraktor <= 25) {
      this.usloviRadaLiscariTraktor = 1;
      this.usloviLisTraktor = 'I/II';
    } else if (this.bodoviLiscariTraktor >= 26 && this.bodoviLiscariTraktor <= 32) {
      this.usloviRadaLiscariTraktor = 2;
      this.usloviLisTraktor = 'II';
    } else if (this.bodoviLiscariTraktor >= 33 && this.bodoviLiscariTraktor <= 41) {
      this.usloviRadaLiscariTraktor = 3;
      this.usloviLisTraktor = 'II/III';
    } else {
      this.usloviRadaLiscariTraktor = 4;
      this.usloviLisTraktor = 'III';
    }

    // Norma cetinari traktor
    if (this.srednjiPrecnikCetinari > 45) {
      this.prosjecnoStablo = 1;
    } else {
      this.prosjecnoStablo = 0;
    }

    if (this.usloviTraktor.value.primicanjeTraktor === null && this.usloviTraktor.value.traktorDistanca === '') {
      this.usloviTraktor.value.primicanjeTraktor = 0;
      this.usloviTraktor.value.traktorDistanca = 0;
    }

    if (this.unosUslovaRada.value.periodSjece == 0) {

      if (this.usloviTraktor.value.primicanjeTraktor === null && this.usloviTraktor.value.traktorDistanca === '') {
        this.usloviTraktor.value.primicanjeTraktor = 0;
        this.usloviTraktor.value.traktorDistanca = 0;
      }
      this.normaCetinariTraktor = this.unosNormi.traktorLJetoNorme[0][this.prosjecnoStablo][this.usloviRadaCetinariTraktor][this.usloviTraktor.value.primicanjeTraktor][this.usloviTraktor.value.traktorDistanca];

      this.normaLiscariTraktor = this.unosNormi.traktorLJetoNorme[1][this.prosjecnoStablo][this.usloviRadaLiscariTraktor][this.usloviTraktor.value.primicanjeTraktor][this.usloviTraktor.value.traktorDistanca];
    } else {
      this.normaCetinariTraktor = this.unosNormi.traktorZimaNorme[0][this.prosjecnoStablo][this.usloviRadaCetinariTraktor][this.usloviTraktor.value.primicanjeTraktor][this.usloviTraktor.value.traktorDistanca];

      this.normaLiscariTraktor = this.unosNormi.traktorZimaNorme[1][this.prosjecnoStablo][this.usloviRadaLiscariTraktor][this.usloviTraktor.value.primicanjeTraktor][this.usloviTraktor.value.traktorDistanca];
    }

 /*    if (this.mase1.length == 0) {
      this.normaCetinariIznos = 0;
      this.normaCetAnimalTrupci = 0;
      this.normaCetAnimalTankaOblovina = 0;
      this.normaCetinariTraktor = 0;
    } else if (this.mase2.length == 0) {
      this.normaLiscariIznos = 0;
      this.normaLisAnimalTrupci = 0;
      this.normaLisAnimalTankaOblovina = 0;
      this.normaLiscariTraktor = 0;
    } else {
      console.log('Postoje cetinari i liscari');
    } */
  }
}
