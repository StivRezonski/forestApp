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
import { ValutaFixed } from './models/valuta-fixed.model';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    SortimentiComponent,
    UnosPodatakaSjecaComponent,
    UnosPodatakaAnimalComponent,
    PrihodiComponent
  ],

  providers: [SortimentiComponent, UnosPodatakaSjecaComponent, NormeService, SumaJela, SumaSmrca, SumaBukva,
    SumaPlemeniti, SumaCetinariLiscari, SumaCetinari, SumaLiscari, ValutaFixed],
  bootstrap: [AppComponent]
})
export class AppModule { }
