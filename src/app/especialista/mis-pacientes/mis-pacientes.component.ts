import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Excel } from 'src/app/clases/excel';
import { Usuario } from 'src/app/clases/usuario';
import { ExcelExportService } from 'src/app/servicios/ExcelExport.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-mis-pacientes',
  templateUrl: './mis-pacientes.component.html',
  styleUrls: ['./mis-pacientes.component.css']
})
export class MisPacientesComponent implements OnInit {
  public listaUsuarioPaciente: Usuario[] = [];
  public listaUsuarioPacienteExcel: Excel[] = [];
  suscriptionList: Subscription = new Subscription();
  loading = false;
  apellidoEspecialista:string;
  nombreEspecilista:string;
  emailEspecialista:string
  fotoPerfilUnoPaciente:string;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private _usuarioService:UsuarioService,
              public srvExcel:ExcelExportService) { }

  ngOnInit(): void {
    this.obtener_localstorage()
    this.getList();
  }

  ngOnDestroy(): void {
    this.suscriptionList.unsubscribe();
 }

 obtener_localstorage(){
  let datoPerfil = JSON.parse(localStorage.getItem('perfil'));
  this.apellidoEspecialista=datoPerfil.apellido;
  this.nombreEspecilista=datoPerfil.nombre;
  this.emailEspecialista=datoPerfil.email;
  this.fotoPerfilUnoPaciente=datoPerfil.fotoPerfilUno;
  //this.fotoPerfilDosPaciente=datoPerfil.fotoPerfilDos;
  //this.dniPaciente=datoPerfil.dni; */

  console.log('Mis Paceintes Perfil  --> ', datoPerfil);
}

 getList() {
  this.suscriptionList == this._usuarioService.getListadoUsuario().subscribe(data =>{
      console.log('Usuario Adm ',data);
      this.listaUsuarioPaciente = [];
      data.forEach((element:any) => {
        this.listaUsuarioPaciente.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })

        /* console.log('Usuario Adm id',element.payload.doc.id);
        console.log('Usuario Adm data ',element.payload.doc.data());
        console.log('Usuario Adm Lista Pacientes',this.listaUsuarioPaciente); */

        //Filtramos los Paciente
        this.listaUsuarioPaciente = this.listaUsuarioPaciente.filter((obj) => {
          return obj.perfil === "Paciente";
        });
      });
    //console.log('Usuario Adm Lista Pacientes',this.listaUsuarioPaciente);
    })

  }


  seleccionar(item: Usuario) {
    //this.seleccionado.emit(item);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // no hay dato que se modifique
  }

  public async exportexcel()
  {

  for (let i = 0; i < this.listaUsuarioPaciente.length; i++) {
    console.log(' Elemt ', this.listaUsuarioPaciente[i]);
    const excelDato:Excel={
      apellido : this.listaUsuarioPaciente[i].apellido,
      nombre : this.listaUsuarioPaciente[i].nombre,
      dni : this.listaUsuarioPaciente[i].dni,
      edad : this.listaUsuarioPaciente[i].edad,
      obraSocial : this.listaUsuarioPaciente[i].obraSocial,
      altura : this.listaUsuarioPaciente[i].altura,
      peso : this.listaUsuarioPaciente[i].peso,
      presion : this.listaUsuarioPaciente[i].presion,
      temperatura : this.listaUsuarioPaciente[i].temperatura,
      clave1 : this.listaUsuarioPaciente[i].clave1,
      valor1 : this.listaUsuarioPaciente[i].valor1,
      clave2 : this.listaUsuarioPaciente[i].clave2,
      valor2 : this.listaUsuarioPaciente[i].valor2,
      clave3 : this.listaUsuarioPaciente[i].clave3,
      valor3 : this.listaUsuarioPaciente[i].valor3,
      perfil : this.listaUsuarioPaciente[i].perfil
    }
    this.listaUsuarioPacienteExcel.push(excelDato);
  }

    let arrayUsuarios = this.listaUsuarioPacienteExcel;

    this.srvExcel.exportar_ArrayObjetos_toExcel(arrayUsuarios,"Usuarios-Pacientes","Hoja 1");
  }
}
