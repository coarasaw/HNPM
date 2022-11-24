import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/servicios/error.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';


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
 
  constructor(private rutas:Router,
              private fb: FormBuilder,
              private afAuth : AngularFireAuth,
              private _errorService: ErrorService,
              private toastr: ToastrService  
  ){
    
    this.loginForm = this.fb.group({
      usuarioCorreo: ['',[Validators.required,Validators.email]],
      usuarioClave: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  automaticoLogin(){
    //this.VendedorForm.controls['nombres'].setValue(response.body.data.nombres);
    this.loginForm.controls['usuarioCorreo'].setValue('danny@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('pepe123');
  }

  adinistradorLogin(){
    this.loginForm.controls['usuarioCorreo'].setValue('admin@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('admin123');
  }

  loginSiguiente(){
      //console.log(this.loginForm)
      const usuario = this.loginForm.get('usuarioCorreo')?.value;
      const password = this.loginForm.get('usuarioClave')?.value;

      this.loading = true;
      this.afAuth.signInWithEmailAndPassword(usuario,password).then((respuesta) => {
        //console.log(respuesta);
        if (respuesta.user?.emailVerified == false) {
          this.rutas.navigate(['auth/verificarCorreo'])
        } else {
          this.loading = false;
          this.setLocalStorage(respuesta.user);
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
      email: user.email
    }
    localStorage.setItem('user', JSON.stringify(usuario)); 
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
    this.loginForm.controls['usuarioCorreo'].setValue('coarasaw@yahoo.com.ar');                                                   
    this.loginForm.controls['usuarioClave'].setValue('esp123');
  }

  onPaciente1(){
    this.loginForm.controls['usuarioCorreo'].setValue('coarasadaniel@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('pac123');
  }

  onPaciente2(){
    this.loginForm.controls['usuarioCorreo'].setValue('atilio.galliussi@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('pac123');
  }

  onPaciente3(){
    this.loginForm.controls['usuarioCorreo'].setValue('xubfpiydypoeutdnzq@tmmcv.net');
    this.loginForm.controls['usuarioClave'].setValue('pac123');
  }

}

/* <p>Listado de Héroes</p>

<div *ngIf="heroeBorrado; else noBorrado">
    <h3>Héroe borrado: <small>{{ heroeBorrado }}</small> </h3>
</div>

<ng-template #noBorrado>
    <h3>No ha borrado nada.</h3>
</ng-template>


<button (click)="borrarHeroe()">
    Borrar
</button>


<ul>
    <li *ngFor="let heroe of heroes; let i = index"> 
        {{ i + 1 }} - {{ heroe }}
    </li>
</ul> */

/* import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }


} */
