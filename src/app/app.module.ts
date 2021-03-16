import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SortimentiComponent } from './sortimenti/sortimenti.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UnosPodatakaSjecaComponent } from './components/unos-podataka-sjeca/unos-podataka-sjeca.component';
import { UnosPodatakaAnimalComponent } from './components/unos-podataka-animal/unos-podataka-animal.component';
import { NormeService } from './services/norme.service';

@NgModule({
  declarations: [
    AppComponent,
    SortimentiComponent,
    UnosPodatakaSjecaComponent,
    UnosPodatakaAnimalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [SortimentiComponent, UnosPodatakaSjecaComponent, NormeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
