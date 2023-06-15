import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _refresh$ = new Subject<void>()

  constructor(private _firestore: AngularFirestore) { }

  get refresh$(){
    return this._refresh$;
  }

  crearUsuario(usuarioDato:Usuario){
    //console.log('Grabando Usuario');
    //console.log('estamos en Grabando Usuario:', usuarioDato.email)
    return this._firestore.collection('usuarios').add(usuarioDato);
  }

  getListadoUsuario(): Observable<any>{
    return this._firestore.collection('usuarios').stateChanges();
  }

  getPerfilUsuario(correo: string): Observable<any>{
    return this._firestore.collection('usuarios', ref => ref.where('email','==',correo)).snapshotChanges();
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

  public habilitarCuenta(uid: string) {
    return this._firestore.collection('usuarios').doc(uid).update({ aprobadoPorAdmin: true });
  }

  public deshabilitarCuenta(uid: string) {
    return this._firestore.collection('usuarios').doc(uid).update({ aprobadoPorAdmin: false });
  }

}
