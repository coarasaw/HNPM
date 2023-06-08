import { Component, EventEmitter, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-habilitar-inahab-cuenta',
  templateUrl: './habilitar-inahab-cuenta.component.html',
  styleUrls: ['./habilitar-inahab-cuenta.component.css']
})
export class HabilitarInahabCuentaComponent implements OnInit, OnDestroy {
  public listaUsuarioEspecilista: Usuario[] = [];
  suscriptionList: Subscription = new Subscription();
  loading = false;
  //@Output() seleccionado = new EventEmitter();
  
  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private _usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.getList();
  }

  ngOnDestroy(): void {
    //this.suscriptionUser.unsubscribe();
      this.suscriptionList.unsubscribe();
   }

  getList() {
    this.suscriptionList == this._usuarioService.getListadoUsuario().subscribe(data =>{
      //console.log(data);
      this.listaUsuarioEspecilista = [];
      data.forEach((element:any) => {
        this.listaUsuarioEspecilista.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })

        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        //console.log("Lista ",this.listaUsuarioEspecilista);

        //Filtramos los Especilistas
        this.listaUsuarioEspecilista = this.listaUsuarioEspecilista.filter((obj) => {
          return obj.perfil === "Especialista";
        });
        //console.log("Found ", this.listaUsuarioEspecilista);
      });
    })
  }

  habilitarCuenta(item: any) {
    //this.lista = [];
    this._usuarioService.habilitarCuenta(item.id).then((res) => {});
  }
  deshabilitarCuenta(item: any) {
    //this.lista = [];
    this._usuarioService.deshabilitarCuenta(item.id).then((res) => {});
  }

  seleccionar(item: Usuario) {
    //this.seleccionado.emit(item);
  }
 
  ngOnChanges(changes: SimpleChanges): void {
    // no hay dato que se modifique 
  }
}
