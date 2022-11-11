import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Usuario } from '../models/usuario';
import { ApiService } from '../services/api.service';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    public loadingCtrl: LoadingController,
    public api : ApiService,
    public http : HttpClient
  ) { }
  usuario = new Usuario();
  usuarioBD = new Usuario();



  ngOnInit() {
    this.getSedes();
    
  }
  
  getSedes(){
    return this.http
    .get("assets/files/cursos.json")
    .pipe(
      map((res:any) =>{
        return res.data
      })
    )
  }
  
  async ingresar() {

    let usuarioBD = JSON.parse(localStorage.getItem('usuarioBD'));
    // let usuario = JSON.parse(localStorage.getItem('usuarioBD'));
    

    if(this.usuario.nombreUsuario==usuarioBD.nombreUsuario && this.usuario.password==usuarioBD.password){
      const res = await this.loadingCtrl.create({
        message: 'Validando datos'
      });
     res.present()

      setTimeout("location.href='/perfil'", 5000);
      localStorage.setItem('ingresado','true')
      let secionIniciada = JSON.parse(localStorage.getItem('ingresado'));
      console.log(secionIniciada)



    }else if (this.usuario.nombreUsuario==usuarioBD.nombreUsuario && this.usuario.password != usuarioBD.password){
      const alert = await this.alertController.create({
        subHeader: 'Usuario',
        message: 'Error contraseña incorrecta',
        buttons: ['OK'],
      });
  
      await alert.present();
    }else if(this.usuario.nombreUsuario!=usuarioBD.nombreUsuario){
      const alert = await this.alertController.create({
        subHeader: 'Usuario',
        message: 'Error Usuario no registrado',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
  }


}
