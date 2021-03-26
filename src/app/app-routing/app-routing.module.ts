import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SortimentiComponent } from '../components/sortimenti/sortimenti.component';
import { UnosPodatakaSjecaComponent } from '../components/unos-podataka-sjeca/unos-podataka-sjeca.component';
import { PrihodiComponent } from '../components/prihodi/prihodi.component';
import { TabelaNormiCijenaComponent } from '../components/tabela-normi-cijena/tabela-normi-cijena.component';
import { OpstiPodaciComponent } from '../components/opsti-podaci/opsti-podaci.component';
import { ProjekatSlucajnihComponent } from '../components/projekat-slucajnih/projekat-slucajnih.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'projekat', component: ProjekatSlucajnihComponent,
  children: [
    {path: 'opsti-podaci', component: OpstiPodaciComponent },
    {path: 'unospodataka', component: UnosPodatakaSjecaComponent },
    {path: 'norme-cijene', component: TabelaNormiCijenaComponent},
    {path: 'sortimenti', component: SortimentiComponent },
    {path: 'prihodi', component: PrihodiComponent },
  ]},
  {path: 'opsti-podaci', component: OpstiPodaciComponent },
  {path: 'unospodataka', component: UnosPodatakaSjecaComponent },
  {path: 'norme-cijene', component: TabelaNormiCijenaComponent},
  {path: 'sortimenti', component: SortimentiComponent },
  {path: 'prihodi', component: PrihodiComponent },
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
