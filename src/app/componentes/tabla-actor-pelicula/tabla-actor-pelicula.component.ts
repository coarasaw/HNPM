import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-tabla-actor-pelicula',
  templateUrl: './tabla-actor-pelicula.component.html',
  styleUrls: ['./tabla-actor-pelicula.component.css']
})
export class TablaActorPeliculaComponent implements OnInit {
  public vista: boolean = true;
  @Input()  listadoActores:Repartidor[]=[];
  @Output() onActorSelccionado:EventEmitter<Repartidor>= new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetalleActor(repartidoresRecibidos:Repartidor){
    this.onActorSelccionado.emit(repartidoresRecibidos);
  }

  CambiarVista() {
    if (this.vista == true) {
      this.vista = false;
    }
    else {
      this.vista = true;
    }
  }


}
