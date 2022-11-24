import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/servicios/error.service';
import { EspecialidadService } from 'src/app/servicios/especialidad.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Especialidad } from 'src/app/clases/especialidad';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/clases/usuario';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login-registrar',
  templateUrl: './login-registrar.component.html',
  styleUrls: ['./login-registrar.component.css']
})

export class LoginRegistrarComponent implements OnInit {
  registrarForm: FormGroup;
  loading = false;
  suscriptionList: Subscription = new Subscription();
  listEspecialidad: Especialidad[] = [];
  public obtengoFile:string;

  constructor(private fb: FormBuilder,
              private afAuth : AngularFireAuth,
              private router: Router,
              private toastr: ToastrService,
              private _errorService: ErrorService,
              private _especilidadService: EspecialidadService,
              private _usuarioSerice: UsuarioService) { 

                this.registrarForm = this.fb.group({
                  nombre: ['',[Validators.required,Validators.minLength(4)]],
                  apellido: ['',[Validators.required,Validators.minLength(4)]],
                  edad: ['',[Validators.required,Validators.minLength(2)]],
                  dni: ['',[Validators.required,Validators.minLength(6)]],
                  especialidad: ['',[Validators.required]],
                  fotoPerfil: ['',[Validators.required]],
                  correo: ['',[Validators.required, Validators.email]],
                  password: ['',[Validators.required, Validators.minLength(6)]],
                  repetirPassword: ['']
                }, { validator: this.ckeckPassword})
  }

  ngOnInit(): void {
    this.getEspecialidad();
  }

  registar(){
    
    this.registrarEspecialista();
    this.router.navigate(['auth/login']);
  }

  async registrarEspecialista(){

     const datoEspecilista: Usuario = {
       nombre: this.registrarForm.get('nombre')?.value,
       apellido: this.registrarForm.get('apellido')?.value,
       edad: this.registrarForm.get('edad')?.value,
       dni: this.registrarForm.get('dni')?.value,
       obraSocial: null,
       especialidad: this.registrarForm.get('especialidad')?.value,
       email: this.registrarForm.get('correo')?.value,
       password: this.registrarForm.get('password')?.value,
       perfil: 'Especialista',
       fotoPerfilUno: this.obtengoFile,
       fotoPerfilDos:null,
       aprobadoPorAdmin: false,
       baja: false
     }
    
     console.log('estamos en registrar usuario paciente:', datoEspecilista.email);
     try {
       this.loading = true;
       const usuario = this.registrarForm.get('correo')?.value;
       const password = this.registrarForm.get('password')?.value;
       //await this.afAuth.createUserWithEmailAndPassword(usuario,password)
       this.afAuth.createUserWithEmailAndPassword(usuario,password).then(rta =>{
         rta.user?.sendEmailVerification();
         console.log(this.afAuth);
         if (this.afAuth) {
           this._usuarioSerice.crearUsuario(datoEspecilista);
           Swal.fire({
             position: 'top-end',
             icon: 'success',
             title: 'Verifique su Correo parqa autenticar el Alta del Usiario Especilista.',
             showConfirmButton: false,
             timer: 5000
           })
           this.registarEspecialidad();
           this.loading = false;
         }
       })

       
     } catch (error) {
         setTimeout(function(){
          this.toastr.error(this._errorService.error(error.code),'Error - Especilista');
       }, 6000);
     }
  }

  registarEspecialidad(){
    console.log('Registar especialidad.');

    const ver:string = this.registrarForm.get('especialidad')?.value;

    const found = this.listEspecialidad.find((obj) => {
      return obj.nombre === ver;
    });
    
    console.log('Ver el valor ver',ver);
    console.log('Ver el valor found',found);  

    if (found === undefined) {
        console.log("Valor No encontrado");
        const datoGrabar: Especialidad = {
          nombre:  ver
        }
        this._especilidadService.crearEspecilidad(datoGrabar).then(resp => {
          this.toastr.success('La Especialidad fue registrada con exito!', 'Especialidad registrada!');
        }).catch((error) => {
          this.toastr.error(this._errorService.error(error.code),'Error');
        });
    }else{
        console.log("Valor Existe")
    }    
    
  }

  getEspecialidad(){
    this.suscriptionList == this._especilidadService.getListadoEspecialidad().subscribe(data =>{
      //console.log(data);
      this.listEspecialidad = [];
      
      data.forEach((element:any) => {
        this.listEspecialidad.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        this.loading = false;
        //console.log('Lista id',element.payload.doc.id);
        //console.log('Lista data',element.payload.doc.data());
      });
    })
  }

  uploadImage($event){
    const file = $event.target.files[0];
    this.obtengoFile = "../../assets/peliculas/"+file.name;
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
