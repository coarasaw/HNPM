import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _firestore: AngularFirestore) { }

  crearUsuario(usuarioDato:Usuario){
    //console.log('Grabando Usuario');
    //console.log('estamos en Grabando Usuario:', usuarioDato.email)
    return this._firestore.collection('usuarios').add(usuarioDato);
  }

  getListadoUsuario(): Observable<any>{
    return this._firestore.collection('usuarios').stateChanges();
  }

  eleminarUsuario(idUsuario: string): Promise<any>{
    //console.log('Id servicio ', idUsuario);
    return this._firestore.collection('usuarios').doc(idUsuario).delete();
  }

  modificarUsuario(idUsuario: string,usuarioDato:Usuario):Promise<any>{
    return this._firestore.collection('usuarios').doc(idUsuario).update(usuarioDato);
  }  

  getUsuario(documentId: string): Observable<any>{ 
    return  this._firestore.collection('usuarios').doc(documentId).snapshotChanges(); 
  }
}
