import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/clases/usuario';
import { TurnoPaciente } from 'src/app/clases/turnoPaciente';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-turnos-especialista',
  templateUrl: './mis-turnos-especialista.component.html',
  styleUrls: ['./mis-turnos-especialista.component.css']
})
export class MisTurnosEspecialistaComponent implements OnInit {
  public listaTurnoPaciente: TurnoPaciente[] = [];
  suscriptionList: Subscription = new Subscription();
  loading = false;
  //Paciente
  apellidoPaciente:string;
  nombrePaciente:string;
  emailEspecialista:string;
  fotoPerfilUnoPaciente:string;
  fotoPerfilDosPaciente:string;
  dniPaciente:string;
  inputCancelado:string;
  inputResena:string;
  inputDiagnotico:string;
  //HC
  inputAltura:string;
  inputPeso:string;
  inputTemperatura:string;
  inputPresion:string;
  inputClave1?:string;
  inputValor1?:string;
  inputClave2?:string;
  inputValor2?:string;
  inputClave3?:string;
  inputValor3?:string;

  constructor(private _usuarioService:UsuarioService) { }

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
    this.emailEspecialista=datoPerfil.email;
    this.fotoPerfilUnoPaciente=datoPerfil.fotoPerfilUno;
    this.fotoPerfilDosPaciente=datoPerfil.fotoPerfilDos;
    this.dniPaciente=datoPerfil.dni;

    //console.log('Email del Paciente --> ', this.emailEspecialista);
  }

  getList() {
    //console.log("Lista MisTurnos - Buscar con ",this.emailEspecialista);
      this.suscriptionList == this._usuarioService.getTurnoEspecilista(this.emailEspecialista).subscribe(data =>{

      this.listaTurnoPaciente = [];
      data.forEach((element:any) => {
        this.listaTurnoPaciente.push({
        id:element.payload.doc.id,
        ...element.payload.doc.data()
        })

      });
      console.log("Lista MisTurnos ",this.listaTurnoPaciente);
    })
  }

  cancelarTurno(item: any) {
    console.log('Input ',this.inputCancelado);
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
        title: 'Turno fue CANCELADO con exito !!!',
        showConfirmButton: false,
        timer: 5000
      })
    }
  }

  finalizadaAtencion(item: any) {
    //console.log('Input ',this.inputCalificacion);
    if (this.inputResena === undefined && this.inputDiagnotico === undefined) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Escribir la Reseña o Diagnóstico del Especilista !!!',
        showConfirmButton: false,
        timer: 5000
      })
    }else{
      this._usuarioService.finalizadaAtencion(item.id,'FINALIZADO',this.inputResena,this.inputDiagnotico).then((res) => {});
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Reseña y Diagnóstico registrada con exito!',
        showConfirmButton: false,
        timer: 5000
      })
    }
  }

  aceptarTurno(item: any){

      this._usuarioService.aceptarTurnoEspecilista(item.id,'ACEPTADO').then((res) => {});
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Turno fue ACEPTADO con exito !!!',
        showConfirmButton: false,
        timer: 5000
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
    // no hay dato que se modifique
  }

  guardarHistoriaClinica(item:any){
    //console.log('Input ',this.inputCalificacion);
    if (this.inputAltura === undefined && this.inputPeso === undefined && this.inputTemperatura === undefined && this.inputPresion === undefined) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Escribir la Historia Clínica !!!',
        showConfirmButton: false,
        timer: 5000
      })
    }else{
      this._usuarioService.guardarHistoriaClinicaServicio(item.id,this.inputAltura,this.inputPeso,this.inputTemperatura,this.inputPresion,this.inputClave1,this.inputValor1,this.inputClave2,this.inputValor2,this.inputClave3,this.inputValor3).then((res) => {});
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Historia Clínica registrada con exito!',
        showConfirmButton: false,
        timer: 5000
      })
    }
  }
}
