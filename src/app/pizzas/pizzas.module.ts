import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { PizzaComponent } from './pizza/pizza.component';
import { AltaPizzaComponent } from './alta-pizza/alta-pizza.component';
import { BajaPizzaComponent } from './baja-pizza/baja-pizza.component';
import { ModificaPizzaComponent } from './modifica-pizza/modifica-pizza.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaPizzaComponent } from './tabla-pizza/tabla-pizza.component';


@NgModule({
  declarations: [
    PizzaComponent,
    AltaPizzaComponent,
    BajaPizzaComponent,
    ModificaPizzaComponent,
    TablaPizzaComponent
  ],
  imports: [
    CommonModule,
    PizzasRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PizzasModule { }
