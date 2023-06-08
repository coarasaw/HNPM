import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/servicios/error.service';
import { Subscription } from 'rxjs/internal/Subscription';

import Swal from 'sweetalert2';

import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-generar-usuario-admin',
  templateUrl: './generar-usuario-admin.component.html',
  styleUrls: ['./generar-usuario-admin.component.css']
})
export class GenerarUsuarioAdminComponent implements OnInit {
  registrarForm: FormGroup;
  loading = false;
  suscriptionList: Subscription = new Subscription();
  public obtengoFile:string;

  constructor(private fb: FormBuilder,
              private afAuth : AngularFireAuth,
              private router: Router,
              private toastr: ToastrService,
              private _errorService: ErrorService,
              private _usuarioSerice: UsuarioService) {

      this.registrarForm = this.fb.group({
              nombre:           ['',[Validators.required,Validators.minLength(4)]],
              apellido:         ['',[Validators.required,Validators.minLength(4)]],
              edad:             ['',[Validators.required,Validators.minLength(2)]],
              dni:              ['',[Validators.required,Validators.minLength(6)]],
              fotoPerfil:       ['',[Validators.required]],
              correo:           ['',[Validators.required, Validators.email]],
              password:         ['',[Validators.required, Validators.minLength(6)]],
              repetirPassword:  ['']
          }, { validator: this.ckeckPassword})
  }

  ngOnInit(): void {
  }

  registar(){

    this.registrarAdministrador();
    this.router.navigate(['auth/login']);
  }

  registrarAdministrador(){

    const datoAdministrador: Usuario = {
      nombre: this.registrarForm.get('nombre')?.value,
      apellido: this.registrarForm.get('apellido')?.value,
      edad: this.registrarForm.get('edad')?.value,
      dni: this.registrarForm.get('dni')?.value,
      obraSocial: null,
      especialidad: null,
      email: this.registrarForm.get('correo')?.value,
      password: this.registrarForm.get('password')?.value,
      perfil: 'Administrador',
      fotoPerfilUno: this.obtengoFile,
      fotoPerfilDos:null,
      aprobadoPorAdmin: false,
      baja: false
    }

    try {
      this.loading = true;
      const usuario = this.registrarForm.get('correo')?.value;
      const password = this.registrarForm.get('password')?.value;
      //await this.afAuth.createUserWithEmailAndPassword(usuario,password)
      this.afAuth.createUserWithEmailAndPassword(usuario,password).then(rta =>{
        rta.user?.sendEmailVerification();
        //console.log(this.afAuth);
        if (this.afAuth) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Verifique su Correo parqa autenticar el Alta del Usuario Administrador.',
            showConfirmButton: false,
            timer: 5000
          })
          this.loading = false;
        }
      })


    } catch (error) {
        setTimeout(function(){
         this.toastr.error(this._errorService.error(error.code),'Error - Administrador');
      }, 6000);
    }

  }

  uploadImage($event){
    const file = $event.target.files[0];
    this.obtengoFile = "assets/admin/"+file.name;
  }

  ckeckPassword(group: FormGroup): any {
    const pass = group.controls.password?.value;
    const confirmarPassword = group.controls.repetirPassword?.value;
    return pass === confirmarPassword ? null : { notSame: true }
  }

  ngOnDestroy(): void {
    //this.suscriptionUser.unsubscribe();
      this.suscriptionList.unsubscribe();
   }
}
