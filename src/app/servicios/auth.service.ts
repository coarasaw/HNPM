import { Injectable } from '@angular/core';
import { User } from '../../app/interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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

  /* async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(
        new auth.GoogleAuthProvider()
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  } */

  async envandoVerificacionEmail(): Promise<void>{
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email,
      /* emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: 'ADMIN', */
    };

    return userRef.set(data, { merge: true });
  }

  perfilBuscado():string {

    let datoUsuario = JSON.parse(localStorage.getItem('userPerfil'));
    this.perfil = datoUsuario;
    console.log('Imprimo Perfil Leido:', this.perfil);
    return this.perfil;
  }

  isActualSessionAdministrador(){

    const esperando = this.perfilBuscado();
    console.log('Imprimo Perfil esperado:', esperando);

    if (esperando === 'Administrador') {
      console.log('Paso 7 auth Servicio auth - perfil  ',this.perfil);
      return true;
    }else{
      console.log('Paso 8 auth Servicio auth -  NO',this.perfil);
      return false;
    }

  }
}
