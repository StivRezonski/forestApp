import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnosPodatakaSjecaComponent } from './components/unos-podataka-sjeca/unos-podataka-sjeca.component';
import { NormeService } from './services/norme.service';
import { Jela } from './models/jela.model';
import { Smrca } from './models/smrca.model';
import { CetinariLiscari } from './models/cetinari-liscari.model';
import { Bukva } from './models/bukva.model';
import { Plemeniti } from './models/plemeniti.model';
import { Cetinari } from './models/cetinari.model';
import { Liscari } from './models/liscari.model';
import { OpstiPodaciComponent } from './components/opsti-podaci/opsti-podaci.component';
import { SharedService } from './services/shared.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OpstiPodaci } from './models/opsti-podaci.model';
import { ProjektnaDokumentacijaComponent } from './components/projektna-dokumentacija/projektna-dokumentacija.component';
import { NaslovnaStranaProjektaComponent } from './components/projektna-dokumentacija/naslovna-strana-projekta/naslovna-strana-projekta.component';
import { UvodTekstComponent } from './components/projektna-dokumentacija/uvod-tekst/uvod-tekst.component';
import { OdlukaUsvajanjeComponent } from './components/projektna-dokumentacija/odluka-usvajanje/odluka-usvajanje.component';
import { RjesenjePracenjeComponent } from './components/projektna-dokumentacija/rjesenje-pracenje/rjesenje-pracenje.component';
import { SortimentnaStrukturaComponent } from './components/sortimentna-struktura/sortimentna-struktura.component';
import { RealizacijaComponent } from './components/realizacija/realizacija.component';
import { TrupciService } from './services/trupci.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RxReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    UnosPodatakaSjecaComponent,
    OpstiPodaciComponent
  ],

  providers: [UnosPodatakaSjecaComponent, OpstiPodaciComponent, NormeService, Jela,
    Smrca, Bukva, Plemeniti, CetinariLiscari, Cetinari, Liscari, ValutaFixed, SharedService, HttpClient,
    OpstiPodaci],
    TabelaNormiCijenaComponent,
    OpstiPodaciComponent,
    ProjektnaDokumentacijaComponent,
    NaslovnaStranaProjektaComponent,
    UvodTekstComponent,
    OdlukaUsvajanjeComponent,
    RjesenjePracenjeComponent,
    SortimentnaStrukturaComponent,
    RealizacijaComponent
  ],

  providers: [UnosPodatakaSjecaComponent, OpstiPodaciComponent, TabelaNormiCijenaComponent, NormeService, Jela,
    Smrca, Bukva, Plemeniti, CetinariLiscari, Cetinari, Liscari, SharedService, HttpClient,
    OpstiPodaci, TrupciService],
  bootstrap: [AppComponent]
})
export class AppModule { }
