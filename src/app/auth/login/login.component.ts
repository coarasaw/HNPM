import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/servicios/error.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { Perfil } from '../../interfaces/perfil'
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  muestroCorreo: string;
  muestroClave: string;
  suscriptionList: Subscription = new Subscription();
  suscription: Subscription = new Subscription();
  listUsuario: Usuario[] = [];
  listPerefil: Perfil[] = [];
  email:string;
  perfil:string;
  perfil2: string;

  constructor(private rutas:Router,
              private fb: FormBuilder,
              private afAuth : AngularFireAuth,
              private _errorService: ErrorService,
              private toastr: ToastrService,
              private unUsuario: UsuarioService,
              private af: AngularFirestore
  ){

    this.loginForm = this.fb.group({
      usuarioCorreo: ['',[Validators.required,Validators.email]],
      usuarioClave: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  /* automaticoLogin(){
    this.loginForm.controls['usuarioCorreo'].setValue('danny@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('pepe123');
  } */

  adinistradorLogin(){
    this.loginForm.controls['usuarioCorreo'].setValue('admin@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('admin123');
  }

  loginSiguiente(){
      console.log('Entramos en loginSiguiente ',this.loginForm)
      const usuario = this.loginForm.get('usuarioCorreo')?.value;
      const password = this.loginForm.get('usuarioClave')?.value;

      this.loading = true;
      setTimeout(() => {
        console.log('Tiempo');
      }, 500000);

      this.afAuth.signInWithEmailAndPassword(usuario,password).then((respuesta) => {
        console.log("Respuesta ",respuesta);
        if (respuesta.user?.emailVerified === false) {
          this.loading = false;
          this.rutas.navigate(['/auth/verificarCorreo']);
        } else {
          console.log('Grabando Local Storage');
          this.loading = false;
          this.perfil = '';
          this.setLocalStorage(respuesta.user);
          this.setLocalStoragePerfil();
          this.rutas.navigate(['/bienvenido']);
        }

      }, error => {
        this.loading = false;
        this.toastr.error(this._errorService.error(error.code),'Error')
        this.loginForm.reset();
    })
  }

  setLocalStorage(user: any){
    const usuario: User = {
      uid: user.uid,
      email: user.email,
    };

    localStorage.setItem('user', JSON.stringify(usuario));
    this.email = user.email;
  }

  getPerfil(correo:string){
    console.log('correo :', correo);
    this.unUsuario.getPerfilUsuario(correo).subscribe(data => {
         data.forEach((element:any) => {
          this.listPerefil.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
         //console.log(element.payload.doc.id);
         //console.log(element.payload.doc.data());
       });
       console.log('Lista Perfil ',this.listPerefil);
       console.log('Lista Perfil - Tipo ',this.listPerefil[0].perfil);
       //Grabando localStorage Perfil
       localStorage.setItem('userPerfil', JSON.stringify(this.listPerefil[0].perfil));
      });
  }

  setLocalStoragePerfil(){

    console.log('Paso 1 Leyendo local storag');
    let datoUsuario = JSON.parse(localStorage.getItem('user'));
    this.email = datoUsuario.email;
    console.log('Paso 2 Imprimo email ',this.email);
    console.log('Paso 3 Grabando Perfil');
    this.getPerfil(this.email);
  }

  onAdmin1(){
    this.loginForm.controls['usuarioCorreo'].setValue('coarasaw@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('adm123');
  }

  onEspecialista1(){
    this.loginForm.controls['usuarioCorreo'].setValue('telemototeodoro@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('esp123');
  }

  onEspecialista2(){
    this.loginForm.controls['usuarioCorreo'].setValue('ebgzotxpchynixbfco@tmmbt.com');
    this.loginForm.controls['usuarioClave'].setValue('esp123');
  }

  onPaciente1(){
    this.loginForm.controls['usuarioCorreo'].setValue('coarasaw@yahoo.com.ar');
    this.loginForm.controls['usuarioClave'].setValue('pac123');
  }

  onPaciente2(){
    this.loginForm.controls['usuarioCorreo'].setValue('atilio.galliussi@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('pac123');
  }

  onPaciente3(){
    this.loginForm.controls['usuarioCorreo'].setValue('grisgraneros@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('pac123');
  }

}

/*
  atilio.galliussi@gmail.com
  coarasaw@yahoo.com.ar
  coarasadaniel@gmail.com
  leyton3255@gmail.com
*/
