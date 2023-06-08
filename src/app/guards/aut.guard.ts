import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../servicios/error.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from './../clases/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class AutGuard implements CanActivate {
  tipoUsuario: Usuario;
  listUsuario: Usuario[] = [];
  suscriptionList: Subscription = new Subscription();

  constructor(private router:Router,private toastr: ToastrService, _errorService: ErrorService,
              private unUsuario: UsuarioService ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //let datoUsuario = JSON.parse(localStorage.getItem('user'));

      let leePerfil = JSON.parse(localStorage.getItem("perfilUsuario"));
      let tipoPerfil = leePerfil.perfil;

      if (tipoPerfil != 'Administrador') {
         //this.toastr.error('Para esta opción debe ser ADMINISTRADOR')
         Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario debe tener perfil Administrador.',
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
