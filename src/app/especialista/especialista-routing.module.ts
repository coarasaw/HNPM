import { MisTurnosEspecialistaComponent } from './mis-turnos-especialista/mis-turnos-especialista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialistaAutorizadoGuard } from '../guards/especialista-autorizado.guard';
import { EspecialistaGuard } from '../guards/especialista.guard';
import { CrearTurnosComponent } from './crear-turnos/crear-turnos.component';
import { FinalizarTurnoComponent } from './finalizar-turno/finalizar-turno.component';
import { PerfilEspecialistaComponent } from './perfil-especialista/perfil-especialista.component';
import { RechazarTurnosComponent } from './rechazar-turnos/rechazar-turnos.component';
import { ResEspeciliastaComponent } from './res-especiliasta/res-especiliasta.component';
import { MisPacientesComponent } from './mis-pacientes/mis-pacientes.component';

const routes: Routes = [
  { path: 'misTurnoEsp', component: MisTurnosEspecialistaComponent,canActivate: [EspecialistaGuard,EspecialistaAutorizadoGuard]},
  { path: 'rechazarTurnos', component: RechazarTurnosComponent,canActivate: [EspecialistaGuard,EspecialistaAutorizadoGuard]},
  { path: 'finalizarTurno', component: FinalizarTurnoComponent,canActivate: [EspecialistaGuard,EspecialistaAutorizadoGuard]},
  { path: 'crearTurnos', component: CrearTurnosComponent,canActivate: [EspecialistaGuard,EspecialistaAutorizadoGuard]},
  { path: 'resEsp', component: ResEspeciliastaComponent,canActivate: [EspecialistaGuard,EspecialistaAutorizadoGuard]},
  { path: 'perfilEsp', component: PerfilEspecialistaComponent,canActivate: [EspecialistaGuard,EspecialistaAutorizadoGuard]},
  { path: 'misPacientes', component: MisPacientesComponent,canActivate: [EspecialistaGuard,EspecialistaAutorizadoGuard]},
  { path: '', redirectTo: 'bienvenidoLogin', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: 'bienvenidoLogin' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialistaRoutingModule { }


//,canActivate:[EspecialistaGuard]
