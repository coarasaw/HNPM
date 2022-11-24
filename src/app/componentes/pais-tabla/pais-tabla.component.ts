import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../../interfaces/pais.interface'

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: Country[]=[];
  @Output() newPaisEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  addNewPais(value: string){
    this.newPaisEvent.emit(value);

  }
}
