import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Especialidad } from 'src/app/clases/especialidad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor(private _firestore:AngularFirestore) { }
  
  crearEspecilidad(especilidadDato:Especialidad){
    return this._firestore.collection('especialidades').add(especilidadDato);
  }

  getListadoEspecialidad(): Observable<any>{
    return this._firestore.collection('especialidades').stateChanges();
  }

  eliminarEspecialidad(idEspecialidad: string): Promise<any>{
    console.log('Id servicio ', idEspecialidad);
    return this._firestore.collection('especialidades').doc(idEspecialidad).delete();
  }

  modificarEspecialidad(idEspecialidad: string,especialidadDato:Especialidad):Promise<any>{
    return this._firestore.collection('especialidades').doc(idEspecialidad).update(especialidadDato);
  }
  
}
