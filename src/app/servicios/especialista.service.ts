import { Injectable } from '@angular/core';
import { User } from '../../app/interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaService {
  user$: Observable<any>;
  suscriptionList: Subscription = new Subscription();
  listUsuario: Usuario[] = [];
  email:string;
  perfil:string;
  devuelvoEstado: boolean;

constructor(public afAuth: AngularFireAuth,
            private afs: AngularFirestore,
            ) {
              this.user$ = this.afAuth.authState.pipe(
                switchMap((user) => {
                  if (user) {
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                  }
                  return of(null);
                })
              );
}

  perfilBuscado():string {

    let datoUsuario = JSON.parse(localStorage.getItem('userPerfil'));
    this.perfil = datoUsuario;
    console.log('Imprimo Perfil Leido:', this.perfil);
    return this.perfil;
  }

  isActualSessionEspecilista(){

    const esperando = this.perfilBuscado();
    console.log('Imprimo Perfil esperado:', esperando);

    if (esperando === 'Especialista') {
      console.log('Paso 7 auth Servicio Especialista - perfil  ',this.perfil);
      return true;
    }else{
      console.log('Paso 8 auth Servicio Especialista -  NO',this.perfil);
      return false;
    }

  }

}
