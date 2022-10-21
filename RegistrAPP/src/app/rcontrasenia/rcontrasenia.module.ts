import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RContraseniaPageRoutingModule } from './rcontrasenia-routing.module';

import { RContraseniaPage } from './rcontrasenia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RContraseniaPageRoutingModule
  ],
  declarations: [RContraseniaPage]
})
export class RContraseniaPageModule {}
