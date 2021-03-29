import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SortimentiComponent } from './components/sortimenti/sortimenti.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UnosPodatakaSjecaComponent } from './components/unos-podataka-sjeca/unos-podataka-sjeca.component';
import { UnosPodatakaAnimalComponent } from './components/unos-podataka-animal/unos-podataka-animal.component';
import { NormeService } from './services/norme.service';
import { PrihodiComponent } from './components/prihodi/prihodi.component';
import { SumaJela } from './models/suma-jela.model';
import { SumaSmrca } from './models/suma-smrca.model';
import { SumaCetinariLiscari } from './models/suma-cetinari-liscari.model';
import { SumaBukva } from './models/suma-bukva.model';
import { SumaPlemeniti } from './models/suma-plemeniti.model';
import { SumaCetinari } from './models/suma-cetinari.model';
import { SumaLiscari } from './models/suma-liscari.model';
import { TabelaNormiCijenaComponent } from './components/tabela-normi-cijena/tabela-normi-cijena.component';
import { ValutaFixed } from './models/valuta-fixed.model';
import { OpstiPodaciComponent } from './components/opsti-podaci/opsti-podaci.component';
import { SharedService } from './services/shared.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OpstiPodaci } from './models/opsti-podaci.model';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    SortimentiComponent,
    UnosPodatakaSjecaComponent,
    UnosPodatakaAnimalComponent,
    PrihodiComponent,
    TabelaNormiCijenaComponent,
    OpstiPodaciComponent
  ],

  providers: [SortimentiComponent, UnosPodatakaSjecaComponent, OpstiPodaciComponent, TabelaNormiCijenaComponent, NormeService, SumaJela,
    SumaSmrca, SumaBukva, SumaPlemeniti, SumaCetinariLiscari, SumaCetinari, SumaLiscari, ValutaFixed, SharedService, HttpClient,
    OpstiPodaci],
  bootstrap: [AppComponent]
})
export class AppModule { }
