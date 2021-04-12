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
import { ValutaFixed } from './models/valuta-fixed.model';
import { OpstiPodaciComponent } from './components/opsti-podaci/opsti-podaci.component';
import { SharedService } from './services/shared.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OpstiPodaci } from './models/opsti-podaci.model';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
