import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../servicios/error.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from './../clases/usuario';
import { UsuarioService } from '../servicios/usuario.service';
 


@Injectable({
  providedIn: 'root'
})
export class AutGuard implements CanActivate {
  tipoUsuario:Usuario;
  constructor(private router:Router,private toastr: ToastrService, _errorService: ErrorService,
              private unUsuario: UsuarioService ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let datoUsuario = JSON.parse(localStorage.getItem('user'));
      let email = datoUsuario.email;
      let uid = datoUsuario.uid;

      const dato =this.unUsuario.getUsuario(uid);
      console.log('autguard ',dato);

      if (email != dato) {
        this.router.navigate(['/']);
        this.toastr.error('Para esta opción debe ser ADMIN')
      }
    return true;
  }
  
}
