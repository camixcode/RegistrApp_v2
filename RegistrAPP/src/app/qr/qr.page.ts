import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  constructor(
    public loadingCtrl: LoadingController

  ) { }

  async salir(){
    const res = await this.loadingCtrl.create({
      message: 'Cerrando sesion'
    });
   res.present()
      setTimeout("location.href='/login'", 3000);
      localStorage.removeItem('ingresado');
      let secionIniciada = JSON.parse(localStorage.getItem('ingresado'));
      console.log(secionIniciada)
  }

  ngOnInit() {
  }

}
