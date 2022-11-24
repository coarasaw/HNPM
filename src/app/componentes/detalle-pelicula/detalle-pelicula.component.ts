import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() peliculaDetalle: Pelicula;
  @Output() onPeliculaADetalle:EventEmitter<Pelicula>= new EventEmitter(); 
  
  constructor() { }

  ngOnInit(): void {
  }
  limpiar(peliculaDetalle:Pelicula){
    this.onPeliculaADetalle.emit(peliculaDetalle);
  }
}
