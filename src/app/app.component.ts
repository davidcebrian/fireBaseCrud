import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fireBaseCrud';
  logged: boolean = false;
  constructor(
    private service: UsuariosService ) { }
  logGoogle(){
    this.service.googleLog();
    this.logged = !this.logged;
  }

  deslog(){
    this.service.logout()
    this.logged = !this.logged;
  }



}
