import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RContraseniaPageRoutingModule } from './rcontrasenia-routing.module';

import { RContraseniaPage } from './rcontrasenia.page';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RContraseniaPageRoutingModule,
    MatIconModule
  ],
  declarations: [RContraseniaPage]
})
export class RContraseniaPageModule {}