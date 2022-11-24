import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-registrar',
  templateUrl: './menu-registrar.component.html',
  styleUrls: ['./menu-registrar.component.css']
})
export class MenuRegistrarComponent implements OnInit {

  constructor(private rutas: Router) { }

  ngOnInit(): void {
  }

  paciente(){
    console.log('Registar Paciente');
    this.rutas.navigate(['auth/registrarPaciente']);
  }

  especialista(){
    console.log('Registar Especialista');
    this.rutas.navigate(['auth/registrar']);
  }

}
