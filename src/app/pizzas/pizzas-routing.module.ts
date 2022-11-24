import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AutGuard } from '../guards/aut.guard';

const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'pizzas', component: PizzaComponent,canActivate:[AutGuard]},  
  { path: '', redirectTo: 'bienvenido',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzasRoutingModule { }
