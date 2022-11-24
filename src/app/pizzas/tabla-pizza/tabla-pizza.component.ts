import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pizza } from 'src/app/clases/pizza';
import { PizzaService } from '../../servicios/pizza.service';

@Component({
  selector: 'app-tabla-pizza',
  templateUrl: './tabla-pizza.component.html',
  styleUrls: ['./tabla-pizza.component.css']
})
export class TablaPizzaComponent implements OnInit {
  listaPizza?:Pizza[]=[];
  suscriptionList: Subscription = new Subscription();
  @Input() listadoPizzas:Pizza[]=[];
  @Output() onPizzaSeleccionada: EventEmitter<Pizza>=new EventEmitter();

  constructor(private _pizzaService:PizzaService) { }

  ngOnInit(): void {
    this.getPizzas();
  }

  getPizzas(){
    this.suscriptionList == this._pizzaService.getListadoPizzas().subscribe(data => {
      this.listaPizza = [];
      data.forEach((element:any) => {
        this.listaPizza.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        console.log(element.payload.doc.id);
        console.log(element.payload.doc.data());
      });
      console.log(this.listaPizza);
    })
  }

  ngOnDestroy(): void {
    //this.suscriptionUser.unsubscribe();
      this.suscriptionList.unsubscribe();
   }

   mostrarDetallePizza(pizzasRecibidas:Pizza){
    this.onPizzaSeleccionada.emit(pizzasRecibidas);
   }

}
