import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ObraSocial } from 'src/app/clases/obra-social';
import { Usuario } from 'src/app/clases/usuario';
import { ErrorService } from 'src/app/servicios/error.service';
import { ObraSocialService } from 'src/app/servicios/obra-social.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login-registrar-usuario',
  templateUrl: './login-registrar-usuario.component.html',
  styleUrls: ['./login-registrar-usuario.component.css']
})
export class LoginRegistrarUsuarioComponent implements OnInit {
  registrarForm: FormGroup;
  loading = false;
  suscriptionList: Subscription = new Subscription();
  listObrasocial: ObraSocial[] = [];
  public obtengoFile:string;
  public obtengoFile2:string;
  public gabrarSegundaParte = false;

  constructor(private fb: FormBuilder,
    private afAuth : AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private _errorService: ErrorService,
    private _obrasocialService: ObraSocialService,
    private _usuarioSerice: UsuarioService) { 
      
      this.registrarForm = this.fb.group({
        nombre: ['',[Validators.required,Validators.minLength(4)]],
        apellido: ['',[Validators.required,Validators.minLength(4)]],
        edad: ['',[Validators.required,Validators.minLength(2)]],
        dni: ['',[Validators.required,Validators.minLength(6)]],
        obrasocial: ['',[Validators.required]],
        fotoPerfil: ['no la guardo aun',[Validators.required]],
        fotoPerfil2: ['no la guardo aun',[Validators.required]],
        correo: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(6)]],
        repetirPassword: ['']
      }, { validator: this.ckeckPassword})

    }

  ngOnInit(): void {
    this.getObrasocial();
  }
  
  registar(){
    console.log('gabrarSegundaParte0 ');
    this.registrarPaciente();
    console.log('gabrarSegundaParte3 ');
    this.router.navigate(['auth/login']);
  }

  async registrarPaciente(){
    const datoUsuario: Usuario = {
      nombre: this.registrarForm.get('nombre')?.value,
      apellido: this.registrarForm.get('apellido')?.value,
      edad: this.registrarForm.get('edad')?.value,
      dni: this.registrarForm.get('dni')?.value,
      obraSocial: this.registrarForm.get('obrasocial')?.value,
      especialidad: null,
      email: this.registrarForm.get('correo')?.value,
      password: this.registrarForm.get('password')?.value,
      perfil: 'Paciente',
      fotoPerfilUno: this.obtengoFile,
      fotoPerfilDos: this.obtengoFile2,
      aprobadoPorAdmin: false,
      baja: false
    }
    console.log('estamos en registrar usuario paciente:', datoUsuario.email);
    try {
      this.loading = true;
      const usuario = this.registrarForm.get('correo')?.value;
      const password = this.registrarForm.get('password')?.value;
      await this.afAuth.createUserWithEmailAndPassword(usuario,password)
      
      console.log(this.afAuth);
      if (this.afAuth) {
        this._usuarioSerice.crearUsuario(datoUsuario);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El Paciente fue registrado con exito!',
          showConfirmButton: false,
          timer: 5000
        })

        this.loading = false;
      }
    } catch (error) {
        this.toastr.error(this._errorService.error(error.code),'Error - Paciente');
        setTimeout(function(){
          this.toastr.error(this._errorService.error(error.code),'Error - Paciente');
      }, 6000);
    }
  }

  getObrasocial(){
    this.suscriptionList == this._obrasocialService.getListadoObraSocial().subscribe(data =>{
      //console.log(data);
      this.listObrasocial = [];
      
      data.forEach((element:any) => {
        this.listObrasocial.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        this.loading = false;
        //console.log('Lista id',element.payload.doc.id);
        //console.log('Lista data',element.payload.doc.data());
      });
      console.log('Lista Obrasocial',this.listObrasocial);
    })
  }

  registarObracial(){
    console.log('Probando Registar Obrasocial');
    //this.loading = true;
    const datoGrabar: ObraSocial = {
      //nombre: this.registrarForm.get('nombre')?.value
      nombre: "IOSFA"
    }
    this._obrasocialService.crearObraSocial(datoGrabar).then(resp => {
      //this.showSuccess();
      this.toastr.success('La Obrasocial fue registrada con exito!', 'Obrasocial registrada!');
    }).catch((error) => {
      //this.showError(error);
      this.toastr.error(this._errorService.error(error.code),'Error Obrasocial');
    });
    //this.rutas.navigate(['actores/listadoActores']);
  }

  uploadImage($event){
    const file = $event.target.files[0];
    this.obtengoFile = "../../assets/peliculas/"+file.name;
  }

  uploadImage2($event){
    const file = $event.target.files[0];
    this.obtengoFile2 = "../../assets/peliculas/"+file.name;
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
