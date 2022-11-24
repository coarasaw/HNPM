import { Component,Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from '../../clases/pelicula';
import { PeliculaService } from '../../servicios/pelicula.service';
import { pipe, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-mostar-pelicula-actor',
  templateUrl: './mostar-pelicula-actor.component.html',
  styleUrls: ['./mostar-pelicula-actor.component.css']
})
export class MostarPeliculaActorComponent implements OnInit {

  @Input() actorDetalle: Actor;
  datoActor:string;
  peliculas?:Pelicula[]=[];
  lasPeliculas?:Pelicula[]=[];
  suscriptionList: Subscription = new Subscription();
  elent:boolean = false;

  
  constructor(private _peliculaService:PeliculaService) { }

  ngOnInit(): void {
    this.datoActor = this.actorDetalle.nombre +' '+this.actorDetalle.apellido;
    console.log('Dato Actor para filtrar Peliculs ',this.datoActor);
    this.getPeliculas();
  }

  getPeliculas(){
    //this.datoActor = this.actorDetalle.nombre +' '+this.actorDetalle.apellido;
    this.suscriptionList == this._peliculaService.getListadoPeliculas().subscribe(data =>{
      //console.log(data);
      this.peliculas = [];
      //this.loading = false;
      data.forEach((element:any) => {
        this.peliculas.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        //console.log('Id ',element.payload.doc.id);
        //console.log('data ',element.payload.doc.data());
      });
      console.log('Listado Peliculas',this.peliculas);
      this.lasPeliculas = this.peliculas.filter(dato => dato.actor === this.datoActor);
      console.log('Peliculas ',this.lasPeliculas);
    })

  }

  Volver(){
    this.lasPeliculas = [];
  }
}
