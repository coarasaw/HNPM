import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor.service';
import { Subscription } from 'rxjs';
import { element } from 'protractor';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-pelicula-actor',
  templateUrl: './pelicula-actor.component.html',
  styleUrls: ['./pelicula-actor.component.css']
})
export class PeliculaActorComponent implements OnInit {
  actorNombre: string;
  actorDetalle?:Repartidor;
  repartidoresEnviados?:Repartidor[]=[];
  suscriptionList: Subscription = new Subscription();
  elent:boolean = false;
  actualDetalleActor?:Repartidor;

  constructor(private _actorService:ActorService) { }

  ngOnInit(): void {
    this.getActores();
  }

  mostrarDetalleActor(repartidoresEnviados:Repartidor){
    this.actualDetalleActor= repartidoresEnviados;
    this.elent = true;
  }
  
  getActores(){
    this.suscriptionList == this._actorService.getListadoRepartidores().subscribe(data =>{
      this.repartidoresEnviados = [];
      data.forEach((element:any) => {
        this.repartidoresEnviados.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        console.log(element.payload.doc.id);
        console.log(element.payload.doc.data());
      });
      console.log(this.repartidoresEnviados);
    })
  }

  ngOnDestroy(): void {
     //this.suscriptionUser.unsubscribe();
      this.suscriptionList.unsubscribe();
   }
}
