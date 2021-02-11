import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'lista', loadChildren: () => import('./components/usuarios/usuarios.module').then(m => m.UsuariosModule) }, { path: 'new', loadChildren: () => import('./components/new-usuario/new-usuario.module').then(m => m.NewUsuarioModule) }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
