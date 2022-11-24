import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Repartidor } from '../../clases/repartidor'

@Component({
  selector: 'app-mostar-detalle-actor',
  templateUrl: './mostar-detalle-actor.component.html',
  styleUrls: ['./mostar-detalle-actor.component.css']
})
export class MostarDetalleActorComponent implements OnInit {

  @Input() actorDetalle: Repartidor;
   
  constructor() { }

  ngOnInit(): void {
  }

  Volver(){

  }
}
