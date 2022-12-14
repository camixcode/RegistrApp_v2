import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPage } from './perfil.page';
import { SedeAlumnoComponent } from '../sede-alumno/sede-alumno.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage,
    children: [
      {path: 'sede-alumno',
      component: SedeAlumnoComponent}]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
