import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SortimentiComponent } from '../components/sortimenti/sortimenti.component';
import { UnosPodatakaSjecaComponent } from '../components/unos-podataka-sjeca/unos-podataka-sjeca.component';
import { PrihodiComponent } from '../components/prihodi/prihodi.component';
import { TabelaNormiCijenaComponent } from '../components/tabela-normi-cijena/tabela-normi-cijena.component';
import { OpstiPodaciComponent } from '../components/opsti-podaci/opsti-podaci.component';
import { ProjektnaDokumentacijaComponent } from '../components/projektna-dokumentacija/projektna-dokumentacija.component';
import { NaslovnaStranaProjektaComponent } from '../components/projektna-dokumentacija/naslovna-strana-projekta/naslovna-strana-projekta.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'opsti-podaci', component: OpstiPodaciComponent },
  {path: 'unospodataka', component: UnosPodatakaSjecaComponent },
  {path: 'norme-cijene', component: TabelaNormiCijenaComponent},
  {path: 'sortimenti', component: SortimentiComponent },
  {path: 'prihodi', component: PrihodiComponent },
  {path: 'dokumentacija', component: ProjektnaDokumentacijaComponent,
    children: [
      {
        path: 'naslovna',
        component: NaslovnaStranaProjektaComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
