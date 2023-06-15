import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialistaRoutingModule } from './especialista-routing.module';
import { CrearTurnosComponent } from './crear-turnos/crear-turnos.component';
import { RechazarTurnosComponent } from './rechazar-turnos/rechazar-turnos.component';
import { AceptarTurnoComponent } from './aceptar-turno/aceptar-turno.component';
import { FinalizarTurnoComponent } from './finalizar-turno/finalizar-turno.component';
import { ResEspeciliastaComponent } from './res-especiliasta/res-especiliasta.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CrearTurnosComponent,
    RechazarTurnosComponent,
    AceptarTurnoComponent,
    FinalizarTurnoComponent,
    ResEspeciliastaComponent
  ],
  imports: [
    CommonModule,
    EspecialistaRoutingModule,
    SharedModule
  ]
})
export class EspecialistaModule { }
