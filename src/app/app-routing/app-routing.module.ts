import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SortimentiComponent } from '../components/sortimenti/sortimenti.component';
import { UnosPodatakaSjecaComponent } from '../components/unos-podataka-sjeca/unos-podataka-sjeca.component';
import { PrihodiComponent } from '../components/prihodi/prihodi.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'sortimenti', component: SortimentiComponent},
  {path: 'unospodataka', component: UnosPodatakaSjecaComponent },
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
