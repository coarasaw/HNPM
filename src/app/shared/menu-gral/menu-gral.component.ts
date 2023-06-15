import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-gral',
  templateUrl: './menu-gral.component.html',
  styleUrls: ['./menu-gral.component.css']
})
export class MenuGralComponent implements OnInit {
  email: string;
  id: string;
  apellido: string;
  nombre: string;
  perfil:string

  constructor(private rutas: Router) { }

  ngOnInit(): void {
    this.obtener_localstorage();
  }

  inicio(){
    this.rutas.navigate(['bienvenido']);
  }

 /*
  busqueda(){
    this.rutas.navigate(['busqueda']);
  } */



  desloguearse(){
    localStorage.removeItem('userPerfil');
    localStorage.removeItem('user');
    this.rutas.navigate(['bienvenidoLogin']);
  }

  obtener_localstorage(){
    let datoUsuario = JSON.parse(localStorage.getItem('user'));
    let datoPerfil = JSON.parse(localStorage.getItem('userPerfil'));


    this.email = datoUsuario.email;
    this.id = datoUsuario.uid;
    this.perfil = datoPerfil;
  }

  // Usuario/Paciente
  misTurnos(){
    this.rutas.navigate(['paciente/misTurnos']);
  }

  solicitarTurno(){
    this.rutas.navigate(['paciente/solicitarTurno']);
  }
  cancelarTurnos(){
    this.rutas.navigate(['paciente/cancelarTurno']);
  }

  perfirlPaciente(){
    this.rutas.navigate(['paciente/perfilPaciente']);
  }

  //Especialista/Medico
  aceptarTurnoEspecialista(){
    this.rutas.navigate(['especilista/aceptarTurno']);
  }

  rechazarTurnoEspecialista(){
    this.rutas.navigate(['especilista/rechazarTurnos']);
  }

  finalizarTurnoEspecialista(){
    this.rutas.navigate(['especilista/finalizarTurno']);
  }

  crearTurnoEspecialista(){
    this.rutas.navigate(['especilista/crearTurnos']);
  }

  resEspecilista(){
    this.rutas.navigate(['especilista/resEsp']);
  }

  //Administrador
  genUsuarioAdmin(){
    this.rutas.navigate(['admin/genUsAdmin']);
  }

  habilitarInahabilitar(){
    this.rutas.navigate(['admin/habEsp']);
  }

  Perfil(){
    this.rutas.navigate(['admin/perfilAdm']);
  }
}
