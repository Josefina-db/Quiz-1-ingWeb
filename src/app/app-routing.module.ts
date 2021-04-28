import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaComponent} from '../app/components/lista/lista.component';
import {HomeComponent} from '../app/components/home/home.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'lista', component: ListaComponent},
  {path:'adicionar', component: AdicionarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
