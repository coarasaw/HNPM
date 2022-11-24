import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRegistrarComponent } from './login-registrar/login-registrar.component';
import { MenuRegistrarComponent } from './menu-registrar/menu-registrar.component';
import { LoginRegistrarUsuarioComponent } from './login-registrar-usuario/login-registrar-usuario.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginRegistrarComponent,
    MenuRegistrarComponent,
    LoginRegistrarUsuarioComponent,
    VerificarCorreoComponent,   
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
