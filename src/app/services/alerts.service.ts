import { Injectable } from '@angular/core';
import  Swal  from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  

  constructor() { }

  lanzarError(msg: string){
    Swal.fire({
      title: 'Error!',
      text: msg,
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }

  lanzarInfo(msg: string){
    Swal.fire({
      title: 'INFO!',
      text: msg,
      icon: 'info',
      confirmButtonText: 'OK'
    })
  }
}
