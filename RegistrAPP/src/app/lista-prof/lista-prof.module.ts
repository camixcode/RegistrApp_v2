import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaProfPageRoutingModule } from './lista-prof-routing.module';

import { ListaProfPage } from './lista-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaProfPageRoutingModule
  ],
  declarations: [ListaProfPage]
})
export class ListaProfPageModule {}
