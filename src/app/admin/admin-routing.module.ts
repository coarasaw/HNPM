import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutGuard } from '../guards/aut.guard';
import { GenerarUsuarioAdminComponent } from './generar-usuario-admin/generar-usuario-admin.component';
import { HabilitarInahabCuentaComponent } from './habilitar-inahab-cuenta/habilitar-inahab-cuenta.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';

const routes: Routes = [
  { path: 'genUsAdmin', component: GenerarUsuarioAdminComponent,canActivate:[AutGuard]},
  { path: 'habEsp', component: HabilitarInahabCuentaComponent,canActivate:[AutGuard]},
  { path: 'perfilAdm', component: MiPerfilComponent,canActivate:[AutGuard]},
  { path: '', redirectTo: 'bienvenidoLogin', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: 'bienvenidoLogin' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
