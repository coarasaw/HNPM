import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActoresRoutingModule } from './actores-routing.module';
import { AltaActoresComponent } from './alta-actores/alta-actores.component';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaPaisComponent } from '../componentes/tabla-pais/tabla-pais.component';
import { PeliculaActorComponent } from './pelicula-actor/pelicula-actor.component';
import { TablaActorPeliculaComponent } from '../componentes/tabla-actor-pelicula/tabla-actor-pelicula.component';
import { MostarPeliculaActorComponent } from '../componentes/mostar-pelicula-actor/mostar-pelicula-actor.component';
import { MostarDetalleActorComponent } from '../componentes/mostar-detalle-actor/mostar-detalle-actor.component';
import { MostarPaisActorComponent } from '../componentes/mostar-pais-actor/mostar-pais-actor.component';
import { PaisTablaComponent } from '../componentes/pais-tabla/pais-tabla.component';

@NgModule({
  declarations: [
    AltaActoresComponent,
    ListadoActoresComponent,
    TablaPaisComponent,
    PeliculaActorComponent,
    TablaActorPeliculaComponent,
    MostarPeliculaActorComponent,
    MostarDetalleActorComponent,
    MostarPaisActorComponent,
    PaisTablaComponent
  ],
  imports: [
    CommonModule,
    ActoresRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ActoresModule { }
