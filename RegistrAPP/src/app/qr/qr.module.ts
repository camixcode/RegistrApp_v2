import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRPageRoutingModule } from './qr-routing.module';

import { QrPage } from './qr.page';

import {MatIconModule} from '@angular/material/icon';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRPageRoutingModule,
    MatIconModule,
    QRCodeModule
  ],
  declarations: [QrPage]
})
export class QrPageModule {}