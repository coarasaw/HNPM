import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {
  loading = false;
  apellido: string;
  nombre:string;
  dni: string;
  correo: string;
  perfil: string;
  foto1: string;

  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.leerDatos();
  }

  leerDatos(){
    let leePerfil = JSON.parse(localStorage.getItem("perfil"));

    this.apellido = leePerfil.apellido;
    this.nombre = leePerfil.nombre;
    this.dni = leePerfil.dni;
    this.correo = leePerfil.email;
    this.perfil = leePerfil.perfil;
    this.foto1 = leePerfil.fotoPerfilUno;    ;

  }

}
