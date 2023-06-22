import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/clases/usuario';
import { TurnoPaciente } from 'src/app/clases/turnoPaciente';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.css']
})
export class MisTurnosComponent implements OnInit {
  public listaTurnoPaciente: TurnoPaciente[] = [];
  suscriptionList: Subscription = new Subscription();
  loading = false;
  //Paciente
  usuarioPacienteMailIngresado:any;
  apellidoPaciente:string;
  nombrePaciente:string;
  emailPaciente:string;
  fotoPerfilUnoPaciente:string;
  fotoPerfilDosPaciente:string;
  dniPaciente:string;
  inputCancelado:string;
  inputCalificacion:string;

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private _usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.obtener_localstorage();
    this.getList();
  }

  ngOnDestroy(): void {
  //this.suscriptionUser.unsubscribe();
  this.suscriptionList.unsubscribe();
  }

  obtener_localstorage(){
    let datoPerfil = JSON.parse(localStorage.getItem('perfil'));
    this.apellidoPaciente=datoPerfil.apellido;
    this.nombrePaciente=datoPerfil.nombre;
    this.emailPaciente=datoPerfil.email;
    this.fotoPerfilUnoPaciente=datoPerfil.fotoPerfilUno;
    this.fotoPerfilDosPaciente=datoPerfil.fotoPerfilDos;
    this.dniPaciente=datoPerfil.dni;

    //console.log('Email del Paciente --> ', this.emailPaciente);
  }

  getList() {
    //console.log("Lista MisTurnos - Buscar con ",this.emailPaciente);
      this.suscriptionList == this._usuarioService.getTurnoPacientes(this.emailPaciente).subscribe(data =>{
      //console.log(data);
      this.listaTurnoPaciente = [];
      data.forEach((element:any) => {
        this.listaTurnoPaciente.push({
        id:element.payload.doc.id,
        ...element.payload.doc.data()
        })

        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());

      });
      console.log("Lista MisTurnos ",this.listaTurnoPaciente);
    })
  }

  cancelarTurno(item: any) {
    //console.log('Input ',this.inputCancelado);
    if (this.inputCancelado === undefined) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Poner motivo de cancelación !!!',
        showConfirmButton: false,
        timer: 5000
      })
    }else{
      this._usuarioService.cancelarTurnoPaciente(item.id,'CANCELADO',this.inputCancelado).then((res) => {});
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Turno fue CANCELADO con exito!',
        showConfirmButton: false,
        timer: 5000
      })
    }
  }

  calificarAtencion(item: any) {
    //console.log('Input ',this.inputCalificacion);
    if (this.inputCalificacion === undefined) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Escribir la calificacón del Especilista !!!',
        showConfirmButton: false,
        timer: 5000
      })
    }else{
      this._usuarioService.calificacionTurnoPaciente(item.id,this.inputCalificacion).then((res) => {});
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Calificacón registrada con exito !!!',
        showConfirmButton: false,
        timer: 5000
      })
    }
  }

  seleccionar(item: Usuario) {
  //this.seleccionado.emit(item);
  }

  ngOnChanges(changes: SimpleChanges): void {
  // no hay dato que se modifique
  }

}
