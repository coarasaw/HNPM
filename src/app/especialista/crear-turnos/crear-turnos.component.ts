import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/interfaces/turno';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-turnos',
  templateUrl: './crear-turnos.component.html',
  styleUrls: ['./crear-turnos.component.css']
})
export class CrearTurnosComponent implements OnInit {

  //Interfas Turno
  apellido:string;
  nombre:string;
  email:string;
  especialidad:string;
  otraespecialidad:string;
  fotoPerfilUno:string;
  // bandera cargando
  loading = false;
  //Array de turnos
  listaTurno: Turno[]=[];


  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.obtener_localstorage();
  }

  obtener_localstorage(){
    let datoPerfil = JSON.parse(localStorage.getItem('perfil'));
    this.apellido = datoPerfil.apellido;
    this.nombre = datoPerfil.nombre;
    this.email = datoPerfil.email;
    this.especialidad = datoPerfil.especialidad;
    this.otraespecialidad = datoPerfil.otraEspecialidad;
    this.fotoPerfilUno = datoPerfil.fotoPerfilUno;
    this.llenarListaTurno();
  }

  habilitarEspecialidad(item: any){
    const dato: Turno = {
      apellido: item.apellido,
      nombre: item.nombre,
      email: item.email,
      especialidad:item.especialidad,
      otraespecialidad: '',
      turno: item.turno,
      fotoPerfilUno:item.fotoPerfilUno,
      estado:'Libre',
      dia:item.dia
    };
    this._usuarioService.crearTurno(dato).then(resp => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Turno fue registrado con exito!',
        showConfirmButton: false,
        timer: 5000
      })
    }).catch((error) => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al Grabar Turno',
        showConfirmButton: false,
        timer: 5000
      })
    });
  }

  habilitarOtraEspecialidad(item: any){
    const dato: Turno = {
      apellido: item.apellido,
      nombre: item.nombre,
      email: item.email,
      especialidad:item.otraespecialidad,
      otraespecialidad: '',
      turno: item.turno,
      fotoPerfilUno:item.fotoPerfilUno,
      estado:'Libre',
      dia:item.dia
    };
    this._usuarioService.crearTurno(dato).then(resp => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Turno fue registrado con exito! (Esp 2)',
        showConfirmButton: false,
        timer: 5000
      })
    }).catch((error) => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al Grabar Turno',
        showConfirmButton: false,
        timer: 5000
      })
    });
  }

  llenarListaTurno(){

    //LUNES
    const lunes1: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:00 a 08:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes1);

    const lunes2: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:30 a 09:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes2);

    const lunes3: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:00 a 09:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes3);

    const lunes4: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:30 a 10:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes4);

    const lunes5: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:00 a 10:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes5);

    const lunes6: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:00 a 11:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes6);

    const lunes7: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:00 a 12:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes7);

    const lunes8: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:00 a 13:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes8);

    const lunes9: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:30 a 14:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes9);

    const lunes10: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:00 a 14:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes10);

    const lunes11: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:30 a 15:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes11);

    const lunes12: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:00 a 15:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes12);

    const lunes13: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:00 a 15:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes13);

    const lunes14: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:30 a 16:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes14);

    const lunes15: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:00 a 16:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes15);

    const lunes16: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:30 a 17:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes16);

    const lunes17: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:00 a 17:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes17);

    const lunes18: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:30 a 18:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes18);

    const lunes19: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:00 a 18:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes19);

    const lunes20: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:30 a 19:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes20);

    //MARTES
    const martes1: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:00 a 08:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes1);

    const martes2: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:30 a 09:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes2);

    const martes3: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:00 a 09:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes3);

    const martes4: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:30 a 10:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes4);

    const martes5: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:00 a 10:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes5);

    const martes6: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:00 a 11:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes6)

    const martes7: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:00 a 12:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes7)

    const martes8: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:00 a 13:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes8)

    const martes9: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:30 a 14:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes9)

    const martes10: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:00 a 14:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes10)

    const martes11: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:30 a 15:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes11)

    const martes12: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:00 a 15:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes12)

    const martes13: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:00 a 15:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes13)

    const martes14: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:30 a 16:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes14)

    const martes15: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:00 a 16:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes15)

    const martes16: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:30 a 17:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes16)

    const martes17: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:00 a 17:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes17)

    const martes18: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:30 a 18:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes18)

    const martes19: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:00 a 18:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes19)

    const martes20: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:30 a 19:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes20)

    //MIERCOLES
    const miercoles1: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:00 a 08:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles1);

    const miercoles2: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:30 a 09:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles2);

    const miercoles3: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:00 a 09:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles3);

    const miercoles4: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:30 a 10:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles4);

    const miercoles5: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:00 a 10:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles5);

    const miercoles6: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:00 a 11:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles6)

    const miercoles7: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:00 a 12:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles7)

    const miercoles8: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:00 a 13:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles8)

    const miercoles9: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:30 a 14:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles9)

    const miercoles10: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:00 a 14:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles10)

    const miercoles11: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: ' - 14:30 a 15:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles11)

    const miercoles12: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:00 a 15:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles12)

    const miercoles13: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:00 a 15:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(martes13);


    const miercoles14: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:30 a 16:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles14);

    const miercoles15: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:00 a 16:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles15);

    const miercoles16: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:30 a 17:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles16);

    const miercoles17: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:00 a 17:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles17);

    const miercoles18: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:30 a 18:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles18);

    const miercoles19: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: ' - 18:00 a 18:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles19);

    const miercoles20: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:30 a 19:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles20);

     //JUEVES
     const jueves1: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:00 a 08:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves1);

    const jueves2: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:30 a 09:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves2);

    const jueves3: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:00 a 09:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves3);

    const jueves4: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:30 a 10:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves4);

    const jueves5: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:00 a 10:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves5);

    const jueves6: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:00 a 11:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves6);

    const jueves7: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:00 a 12:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves7);

    const jueves8: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:00 a 13:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves8);

    const jueves9: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:30 a 14:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves9);

    const jueves10: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:00 a 14:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves10);

    const jueves11: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:30 a 15:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves11);

    const jueves12: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:00 a 15:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves12);

    const jueves13: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:00 a 15:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves13);

    const jueves14: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:30 a 16:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves14);

    const jueves15: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:00 a 16:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves15)

    const jueves16: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:30 a 17:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves16);

    const jueves17: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:00 a 17:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves17);

    const jueves18: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:30 a 18:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves18);

    const jueves19: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:00 a 18:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves19);

    const jueves20: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:30 a 19:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves20);

    //VIERNES
    const viernes1: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:00 a 08:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes1);

    const viernes2: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:30 a 09:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes2);

    const viernes3: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:00 a 09:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes3);

    const viernes4: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:30 a 10:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes4);

    const viernes5: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:00 a 10:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes5);

    const viernes6: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:00 a 11:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes6);

    const viernes7: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:00 a 12:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes7);

    const viernes8: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:00 a 13:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes8);

    const viernes9: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:30 a 14:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes9);

    const viernes10: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:00 a 14:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes10);

    const viernes11: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:30 a 15:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes11);

    const viernes12: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:00 a 15:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes12);

    const viernes13: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:00 a 15:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes13);

    const viernes14: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:30 a 16:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(jueves14);

    const viernes15: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:00 a 16:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(jueves15);

    const viernes16: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:30 a 17:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes16);

    const viernes17: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:00 a 17:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes17);

    const viernes18: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:30 a 18:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes18);

    const viernes19: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:00 a 18:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes19);

    const viernes20: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:30 a 19:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes20);

    //SÁBADO
    const sabado1: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:00 a 08:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado1);

    const sabado2: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:30 a 09:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado2);

    const sabado3: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:00 a 09:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado3);

    const sabado4: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:30 a 10:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado4);

    const sabado5: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:00 a 10:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado5);

    const sabado6: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:00 a 11:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado6);

    const sabado7: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:00 a 12:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado7);

    const sabado8: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:00 a 13:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado8);

    const sabado9: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:30 a 14:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado9);


    console.log('listaTurno ', this.listaTurno);
  }
}
