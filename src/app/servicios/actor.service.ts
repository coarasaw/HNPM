import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Repartidor } from '../clases/repartidor';
import { Observable } from 'rxjs';
//import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private _firestore: AngularFirestore) { }

  crearRepartidor(repartidorDato:Repartidor){
    return this._firestore.collection('repartidores').add(repartidorDato);
  }

  getListadoRepartidores(): Observable<any>{
    return this._firestore.collection('repartidores').stateChanges();
  }

   /* crearActor(actorDato:Actor){
    return this._firestore.collection('actores').add(actorDato);
  }  */

  getListadoActores(): Observable<any>{
    return this._firestore.collection('actores').stateChanges();
  }

  getActores() {
    return this._firestore.collection("actores").snapshotChanges();
  }
}
