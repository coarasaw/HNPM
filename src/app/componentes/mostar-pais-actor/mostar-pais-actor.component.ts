import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { Repartidor } from 'src/app/clases/repartidor';
import { PaisService } from 'src/app/servicios/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-mostar-pais-actor',
  templateUrl: './mostar-pais-actor.component.html',
  styleUrls: ['./mostar-pais-actor.component.css']
})
export class MostarPaisActorComponent implements OnInit {

  termino : string = '';
  hayError: boolean = false;
  paises  : Pais[] = [];
  mostrarSugerencias: boolean = false;

  @Input() actorDetalle: Repartidor;//Actor;

  constructor(private _paisService:PaisService) { }

  ngOnInit(): void {
    this.paises = [];
    this.termino = this.actorDetalle.pais;
    this.buscar(this.termino);
  }

  ngOnChanges(changes: Repartidor) {
    console.log(changes);
    this.paises = [];
    this.termino = this.actorDetalle.pais;
    this.buscar(this.termino);
  }

  buscar( termino: string ) {
    
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino  = termino;
    
    this._paisService.getPaisByName( termino )
      .subscribe( (paisesDevuelto) => {
        console.log('Ver Pais Repartidor ',paisesDevuelto);
        this.paises = paisesDevuelto;
        console.log('Ver Pais Repartidor imprimir ',this.paises);
        
      }, (err) => {
        this.hayError = true;
        this.paises   = [];
      });

  }
  Volver(){
    //this.elent = false;
    this.paises=[];
  }
}
