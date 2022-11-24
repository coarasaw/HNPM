import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pizza } from 'src/app/clases/pizza';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
 
  //peliculas: Pizza[]=[];  

  constructor(private _firestore: AngularFirestore) { }

  crearPizza(pizzaDato:Pizza){
    return this._firestore.collection('pizzas').add(pizzaDato);
  }

  getListadoPizzas(): Observable<any>{
    return this._firestore.collection('pizzas').stateChanges();
  }

  eliminarPizza(idPizza: string): Promise<any>{
    console.log('Id servicio ', idPizza);
    return this._firestore.collection('pizzas').doc(idPizza).delete();
  }

  modificarPizza(idPizza: string,pizzaDato:Pizza):Promise<any>{
    return this._firestore.collection('pizzas').doc(idPizza).update(pizzaDato);
  }

}
