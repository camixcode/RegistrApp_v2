import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaProfPage } from './lista-prof.page';

const routes: Routes = [
  {
    path: '',
    component: ListaProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaProfPageRoutingModule {}
