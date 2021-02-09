import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewUsuarioRoutingModule } from './new-usuario-routing.module';
import { NewUsuarioComponent } from './new-usuario.component';


@NgModule({
  declarations: [NewUsuarioComponent],
  imports: [
    CommonModule,
    NewUsuarioRoutingModule
  ]
})
export class NewUsuarioModule { }
