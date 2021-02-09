import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: Observable<Usuario[]>;
  private usuarioCol: AngularFirestoreCollection<Usuario>;


  constructor( private afs: AngularFirestore ) {
    this.usuarioCol = afs.collection<Usuario>('usuarios');

  
   }




}
