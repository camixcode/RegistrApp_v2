import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerProfePageRoutingModule } from './ver-profe-routing.module';

import { VerProfePage } from './ver-profe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerProfePageRoutingModule
  ],
  declarations: [VerProfePage]
})
export class VerProfePageModule {}
