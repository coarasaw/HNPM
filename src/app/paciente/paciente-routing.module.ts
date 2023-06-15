import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteGuard } from '../guards/paciente.guard';
import { CancelarTurnoComponent } from './cancelar-turno/cancelar-turno.component';
import { MisTurnosComponent } from './mis-turnos/mis-turnos.component';
import { PerfilPacienteComponent } from './perfil-paciente/perfil-paciente.component';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';

const routes: Routes = [
  { path: 'misTurnos', component: MisTurnosComponent,canActivate: [PacienteGuard]},
  { path: 'solicitarTurno', component: SolicitarTurnoComponent,canActivate: [PacienteGuard]},
  { path: 'cancelarTurno', component: CancelarTurnoComponent,canActivate: [PacienteGuard]},
  { path: 'perfilPaciente', component: PerfilPacienteComponent,canActivate: [PacienteGuard]},
  { path: '', redirectTo: 'bienvenidoLogin', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: 'bienvenidoLogin' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
