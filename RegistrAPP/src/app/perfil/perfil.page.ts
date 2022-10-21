import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    public loadingCtrl: LoadingController

    ) {}
   usuarioBD = JSON.parse(localStorage.getItem('usuarioBD'));
  ngOnInit() {
  }

  volver(){
    window.location.href='/home'
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

  
}