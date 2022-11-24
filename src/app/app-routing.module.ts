import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BienvenidoLoginComponent } from './bienvenido-login/bienvenido-login.component';
import { AutGuard } from './guards/aut.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  { path: 'bienvenido',component: BienvenidoComponent}, //,canActivate:[AutGuard]
  { path: 'bienvenidoLogin',component: BienvenidoLoginComponent},
  { path: 'busqueda',component: BusquedaComponent },
 /*  {
    path: 'peliculas',
          loadChildren: () => import('./peliculas/peliculas.module')
          .then(m => m.PeliculasModule)
  },
  {
    path: 'actores',
          loadChildren: () => import('./actores/actores.module')
          .then(m => m.ActoresModule)
  },
  {
    path: 'pizzas',
          loadChildren: () => import('./pizzas/pizzas.module')
          .then(m => m.PizzasModule)
  }, */
  { path: '', redirectTo: 'bienvenidoLogin', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: 'bienvenidoLogin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function canActivate(arg0: string, canActivate: any, arg2: any[]) {
  throw new Error('Function not implemented.');
}

