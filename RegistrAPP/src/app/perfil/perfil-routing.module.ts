import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SedeAlumnoComponent } from '../sede-alumno/sede-alumno.component';
import { PerfilPage } from './perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage,
    children: [
      {path: 'sede-alumno',
      component: SedeAlumnoComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
