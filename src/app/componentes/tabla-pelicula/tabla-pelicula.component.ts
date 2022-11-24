import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})

export class TablaPeliculaComponent implements OnInit {
  public vista: boolean = true;
  //@Input()  listadoPeliculas:Pelicula[]=[];
  //@Output() onPeliculaSelccionada:EventEmitter<Pelicula>= new EventEmitter();
  @Input()  listadoPeliculas:Pizza[]=[];
  @Output() onPeliculaSelccionada:EventEmitter<Pizza>= new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetallePelicula(pelicula:Pizza){
    this.onPeliculaSelccionada.emit(pelicula);
  }

  /* mostrarDetallePelicula(pelicula:Pelicula){
    this.onPeliculaSelccionada.emit(pelicula);
  } */

  CambiarVista() {
    if (this.vista == true) {
      this.vista = false;
    }
    else {
      this.vista = true;
    }
  }

}