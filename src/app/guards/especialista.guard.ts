import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaGuard implements CanActivate {
  [x: string]: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let leePerfil = JSON.parse(localStorage.getItem("perfilUsuario"));
      let tipoPerfil = leePerfil.perfil;

      if (tipoPerfil != 'Especialista') {
         Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario debe tener perfil Especialista.',
          showConfirmButton: false,
          timer: 5000
        })
         this.router.navigate(['bienvenido']);
         return false;
      }else{
        return true;
      }


  }

}
