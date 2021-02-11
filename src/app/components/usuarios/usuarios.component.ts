import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public documentId = null;
  public currentStatus = 1;
  userForm = new FormGroup({
  nombre: new FormControl ('', [Validators.required]),
  nickname:  new FormControl ('', [Validators.required]),
  email: new FormControl ('', [Validators.required, Validators.email])
  });
  public usuarios = [];
  
  constructor(
    private alert: AlertsService,
    private firestore: UsuariosService,
    private router: Router,
    private usuarioService: UsuariosService ) { }

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe(usuarios => {
      this.usuarios = [];
      usuarios.forEach(usuario => { this.usuarios.push({
        id: usuario.payload.doc.id,
        data: usuario.payload.doc.data()
      })})
    })

  }

  newUser() {
    if (this.currentStatus == 1) {
      let user = this.userForm.value;
      console.log(user)
      this.firestore.createUser(user).then(() => {
        this.alert.lanzarInfo('Usuario creado.')
        this.userForm.setValue({
          nombre:'',
          nickname: '',
          email: ''
          });
          this.ngOnInit();
      }, err => {
        console.log(err);
      });
    }else {
      let user = this.userForm.value;
      this.firestore.updateUser(this.documentId, user).then(() =>{
        this.currentStatus = 1;
        this.userForm.setValue({
          nombre:'',
          nickname: '',
          email: ''
          });
          this.ngOnInit();
          this.alert.lanzarInfo('Usuario editado.')
      },err => {
        this.alert.lanzarError('Error inesperado')
      })
    }

  }
  editar(nombre: string):void {
    let editSubscribe = this.firestore.getUser(nombre).subscribe(user => {
      this.currentStatus = 2;
      this.documentId = user.payload.data()['nombre'];
      this.userForm.setValue({
        nombre: user.payload.data()['nombre'],
        nickname: user.payload.data()['nickname'],
        email: user.payload.data()['email']
      });
      editSubscribe.unsubscribe();
    })
    }

  deleteUser(nombre: string):void { 
    this.firestore.deleteCat(nombre).then(()=>{
      this.alert.lanzarInfo('Usuario eliminado.')
    });
  }

}
