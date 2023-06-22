import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EspecialistaAutorizadoService } from '../servicios/especialista-Autorizado.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaAutorizadoGuard implements CanActivate {

  estado: boolean;

  constructor(public srvAuth:EspecialistaAutorizadoService ){}

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
              title: 'ACCESO DENEGADO !!! Usuario Especialista debe ser Autorizdo por Admin.',
              showConfirmButton: false,
              timer: 5000
            })
            return false;
          }
    }
}
