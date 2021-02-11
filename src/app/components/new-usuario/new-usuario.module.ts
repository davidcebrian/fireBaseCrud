import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewUsuarioRoutingModule } from './new-usuario-routing.module';
import { NewUsuarioComponent } from './new-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewUsuarioComponent],
  imports: [
    CommonModule,
    NewUsuarioRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NewUsuarioModule { }
