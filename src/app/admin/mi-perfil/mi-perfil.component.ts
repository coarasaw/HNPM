import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {
  loading = false;
  apeNomb: string;
  DNI: string;
  correo: string;
  perfil: string;
  foto1: string;

  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.leerDatos();
  }

  leerDatos(){
    let leePerfil = JSON.parse(localStorage.getItem("perfil"));

    this.apeNomb = leePerfil.AN;
    this.DNI = leePerfil.DNI;
    this.correo = leePerfil.correo;
    this.perfil = leePerfil.perfil;
    this.foto1 = "../../../"+leePerfil.foto1;
  }

}
