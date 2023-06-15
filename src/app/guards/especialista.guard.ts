import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EspecialistaService } from '../servicios/especialista.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaGuard implements CanActivate {

  estado: boolean;

  constructor(public srvAuth:EspecialistaService ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.estado = this.srvAuth.isActualSessionEspecilista();
          if (this.estado) {
            return true;
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'ACCESO DENEGADO !!! Usuario debe tener perfil Especialista.',
              showConfirmButton: false,
              timer: 5000
            })
            return false;
          }
  }
}
