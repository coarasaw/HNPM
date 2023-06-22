import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { HabilitarInahabCuentaComponent } from './habilitar-inahab-cuenta/habilitar-inahab-cuenta.component';
import { SharedModule } from '../shared/shared.module';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { GenerarUsuarioAdminComponent } from './generar-usuario-admin/generar-usuario-admin.component';
import { UsuaiosComponent } from './usuaios/usuaios.component';



@NgModule({
  declarations: [
    HabilitarInahabCuentaComponent,
    MiPerfilComponent,
    GenerarUsuarioAdminComponent,
    UsuaiosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
