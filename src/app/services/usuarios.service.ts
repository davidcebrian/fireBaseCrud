import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/interfaces';
import { AngularFireAuth } from '@angular/fire/auth';
import  firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: Observable<Usuario[]>;
  
  
  constructor( private afs: AngularFirestore, private aut: AngularFireAuth ) {
  
   }

   //Crea usuario
  public createUser(usuario: Usuario) {
    return this.afs.collection('usuarios').doc(`${usuario.nombre}`).set(usuario);
  };

   //obtiene usuario
  public getUser(nombre: string) {
    return this.afs.collection('usuarios').doc(nombre).snapshotChanges();
  }

  //obtiene todos usuarios
  public getUsers(){
    return this.afs.collection('usuarios').snapshotChanges();
  }

  public updateUser(nombre:string, data: Usuario){
    return this.afs.collection('usuarios').doc(nombre).set(data);
  }

  public deleteCat(nombre:string){
    return this.afs.collection('usuarios').doc(nombre).delete()
  }

  public googleLog(){
    this.aut.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.aut.signOut();
  }
}
