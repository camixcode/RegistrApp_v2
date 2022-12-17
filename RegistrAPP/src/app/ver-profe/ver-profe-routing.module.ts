import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerProfePage } from './ver-profe.page';

const routes: Routes = [
  {
    path: '',
    component: VerProfePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerProfePageRoutingModule {}
