import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RContraseniaPage } from './rcontrasenia.page';

const routes: Routes = [
  {
    path: '',
    component: RContraseniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RContraseniaPageRoutingModule {}
