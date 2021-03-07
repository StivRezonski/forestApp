import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SortimentiComponent } from '../sortimenti/sortimenti.component';
import { UnosPodatakaComponent } from '../unos-podataka/unos-podataka.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'sortimenti', component: SortimentiComponent},
  {path: 'unospodataka', component: UnosPodatakaComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule {
}
