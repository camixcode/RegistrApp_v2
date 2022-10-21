import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController, LoadingController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {


  qrCodeString = 'este es un mensaje de prueba'
  scannerResult: any;


  constructor(
    public loadingCtrl: LoadingController
  ) { }

    async checkPermission(){
      try {
        const status = await BarcodeScanner.checkPermission ({force: true})
        if (status.granted){
          return true;
        }
        return false;
      } catch(e){
        console.log
      }
    }

    async startScan(){
      try{
        const permission = await this.checkPermission();
        if(!permission){
          return;
        }
        await BarcodeScanner.hideBackground();
        const result = await BarcodeScanner.startScan();
        console.log(result);
        if(result?.hasContent){
          this.scannerResult = result.content;
          console.log(this.scannerResult);
        }
      } catch (e) {
        console.log(e);
        this.startScan();
      }
    }







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
