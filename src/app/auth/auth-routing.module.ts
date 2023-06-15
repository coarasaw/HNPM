import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes Propios
import { LoginComponent } from './login/login.component';
import { LoginRegistrarComponent } from './login-registrar/login-registrar.component';
import { MenuRegistrarComponent } from './menu-registrar/menu-registrar.component';
import { LoginRegistrarUsuarioComponent } from './login-registrar-usuario/login-registrar-usuario.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import { LoginRegistrarAdminComponent } from './login-registrar-admin/login-registrar-admin.component';
import { AutGuard } from '../guards/aut.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'MenuRegistrar', component: MenuRegistrarComponent},
  { path: 'registrarPaciente', component: LoginRegistrarUsuarioComponent},
  //{ path: 'registrarAdmin', component: LoginRegistrarAdminComponent},
  { path: 'registrar', component: LoginRegistrarComponent},
  { path: 'verificarCorreo', component: VerificarCorreoComponent},
  { path: '', redirectTo: 'login',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
