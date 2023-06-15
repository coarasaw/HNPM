import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialistaGuard } from '../guards/especialista.guard';
import { AceptarTurnoComponent } from './aceptar-turno/aceptar-turno.component';
import { CrearTurnosComponent } from './crear-turnos/crear-turnos.component';
import { FinalizarTurnoComponent } from './finalizar-turno/finalizar-turno.component';
import { RechazarTurnosComponent } from './rechazar-turnos/rechazar-turnos.component';
import { ResEspeciliastaComponent } from './res-especiliasta/res-especiliasta.component';

const routes: Routes = [
  { path: 'aceptarTurno', component: AceptarTurnoComponent,canActivate: [EspecialistaGuard]},
  { path: 'rechazarTurnos', component: RechazarTurnosComponent,canActivate: [EspecialistaGuard]},
  { path: 'finalizarTurno', component: FinalizarTurnoComponent,canActivate: [EspecialistaGuard]},
  { path: 'crearTurnos', component: CrearTurnosComponent,canActivate: [EspecialistaGuard]},
  { path: 'resEsp', component: ResEspeciliastaComponent,canActivate: [EspecialistaGuard]},
  { path: '', redirectTo: 'bienvenidoLogin', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: 'bienvenidoLogin' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialistaRoutingModule { }


//,canActivate:[EspecialistaGuard]
