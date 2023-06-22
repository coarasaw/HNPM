import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialistaRoutingModule } from './especialista-routing.module';
import { CrearTurnosComponent } from './crear-turnos/crear-turnos.component';
import { RechazarTurnosComponent } from './rechazar-turnos/rechazar-turnos.component';
import { FinalizarTurnoComponent } from './finalizar-turno/finalizar-turno.component';
import { ResEspeciliastaComponent } from './res-especiliasta/res-especiliasta.component';
import { SharedModule } from '../shared/shared.module';
import { PerfilEspecialistaComponent } from './perfil-especialista/perfil-especialista.component';
import { MisTurnosEspecialistaComponent } from './mis-turnos-especialista/mis-turnos-especialista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MisPacientesComponent } from './mis-pacientes/mis-pacientes.component';

@NgModule({
  declarations: [
    CrearTurnosComponent,
    RechazarTurnosComponent,
    FinalizarTurnoComponent,
    ResEspeciliastaComponent,
    PerfilEspecialistaComponent,
    MisTurnosEspecialistaComponent,
    MisPacientesComponent
  ],
  imports: [
    CommonModule,
    EspecialistaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EspecialistaModule { }
