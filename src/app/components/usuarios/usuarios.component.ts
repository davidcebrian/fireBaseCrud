import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  editar():void {  }

  verDetalles(item: any):void  {  }

  borrarUsuario(item: any):void {  }

}
