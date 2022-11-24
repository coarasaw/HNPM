import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Pizza } from '../../clases/pizza';
import { PizzaService } from '../../servicios/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  actualPizza?:Pizza={id:'',nombre:'',ingredientes:'',peso:0,precio:0};
  //salud?: string = "Pizza";
  //pizzasEnviadas?:Pizza[]=[];
  listaPizza?:Pizza[]=[];
  suscriptionList: Subscription = new Subscription();

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
        //console.log("ID ",element.payload.doc.id);
        //console.log("Data ",element.payload.doc.data());
      });
      console.log("Lista de Pizzas ",this.listaPizza);
    })
  }

  mostrarDetallePizza(pizzasEnviadas:Pizza){
    //this.salud = "Le click al Boton";
    this.actualPizza = pizzasEnviadas;

    console.log('Papa:',this.actualPizza);
  }
  /* pizzaABorrar(pizza:Pizza){
    const result = this.listaPizza.filter((obj) => {
      return obj.nombre != pizza.nombre;
    })
    this.listaPizza = result;
    console.log('Lista Pizza ', this.listaPizza);
  }  */
  
  ngOnDestroy(): void {
    //this.suscriptionUser.unsubscribe();
      this.suscriptionList.unsubscribe();
   }
   
}
