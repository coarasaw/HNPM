import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { MisTurnosComponent } from './mis-turnos/mis-turnos.component';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';
import { CancelarTurnoComponent } from './cancelar-turno/cancelar-turno.component';
import { PerfilPacienteComponent } from './perfil-paciente/perfil-paciente.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MisTurnosComponent,
    SolicitarTurnoComponent,
    CancelarTurnoComponent,
    PerfilPacienteComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    SharedModule
  ]
})
export class PacienteModule { }
