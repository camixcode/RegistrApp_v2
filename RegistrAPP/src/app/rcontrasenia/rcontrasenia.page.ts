import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-rcontrasenia',
  templateUrl: './rcontrasenia.page.html',
  styleUrls: ['./rcontrasenia.page.scss'],
})
export class RContraseniaPage implements OnInit {

  constructor(private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  usuario= new Usuario();

  usuarioBD = JSON.parse(localStorage.getItem('usuarioBD'));
  newPassword:string;
  confirmPassword:string;

  async nuevaContrasena(){
    if((this.newPassword.length >0 || this.confirmPassword.length>0)&&(this.newPassword == this.confirmPassword)){
      this.usuario = this.usuarioBD;
      this.usuario.password=this.newPassword;
      localStorage.setItem('usuarioBD', JSON.stringify(this.usuario));

      const res = await this.loadingCtrl.create({
        message: 'Actualizando contraseña'
      });
     res.present()

      setTimeout("location.href='/login'", 3000);
      
      

    }else if(this.newPassword != this.confirmPassword){
      console.log(this.confirmPassword)
      const alert = await this.alertController.create({
        subHeader: 'Usuario',
        message: 'Error contraseñas no coinciden',
        buttons: ['OK'],
      });
  
      await alert.present();
    
    

    
  }
}


}