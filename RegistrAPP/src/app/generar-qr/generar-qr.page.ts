import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQRPage implements OnInit {

  constructor() { }

  async getTakePhoto(){
    const image = await Camera.getPhoto({
      quality: 90, 
      source: CameraSource.Prompt,
      width:600,
      resultType: CameraResultType.Uri
    });
  }
  ngOnInit() {
  }

}
