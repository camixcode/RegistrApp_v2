import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Usuario } from '../models/usuario';

import { Bd 
} from '../services/bd.service';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
usuarios = Array<Usuario>()

  constructor(
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private usuarioService: UsuarioService,
    bd : Bd
  ) { }

  usuario = new Usuario();
  usuarioBD = new Usuario();
  storage = Storage;
  async presentAlert() {
    if (this.usuario.nombre.length <= 0 ||
      this.usuario.nombreUsuario.length <= 0 ||
      this.usuario.apellido.length <= 0 ||
      this.usuario.nivelEducacion.length <= 0 ||
      this.usuario.fechaNacimiento.length <= 0 ||
      this.usuario.nombre.length <= 0) {
      const alert = await this.alertController.create({
        subHeader: 'Usuario',
        message: 'Error campos invalidos',
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        subHeader: 'Usuario',
        message: 'Su nombre es ' + this.usuario.nombre + " " + this.usuario.apellido,
        buttons: ['OK'],
      });

      await alert.present();
    }
  }


  limpiar() {
    this.usuarioBD.nombre = "";
    this.usuarioBD.nombreUsuario = "";
    this.usuarioBD.apellido = "";
    this.usuarioBD.correo = "";
    this.usuarioBD.nivelEducacion = "";
    this.usuarioBD.fechaNacimiento = "";
    this.usuarioBD.password = "";

  }

  async guardar() {

    if (this.usuarioBD.nombre.length <= 0 ||
      this.usuarioBD.apellido.length <= 0 ||
      this.usuarioBD.nombreUsuario.length <= 0 ||
      this.usuarioBD.nivelEducacion.length <= 0 ||
      this.usuarioBD.fechaNacimiento.length <= 0 ||
      this.usuarioBD.correo.length <= 0) {

      const alert = await this.alertController.create({
        subHeader: 'Usuario',
        message: 'Error ingrese datos obligatorios',
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      const res = await this.loadingCtrl.create({
        message: 'Creando cuenta'
      });
      res.present()

      setTimeout("location.href='/login'", 3000);
      localStorage.setItem('usuarioBD', JSON.stringify(this.usuarioBD));

    }


  }
  // execute() {
  //   const params = [];
  //   for (let i = 0; i < 100; i++) {
  //     const usuario = new Usuario();
  //       usuario.id= i;
  //       usuario.nombre ='ejemlo';
  //       usuario.apellido = 'ejemplo'
  //       usuario.nombreUsuario = 'ejemplo';
  //       usuario.password = 'ejemplo';
  //       usuario.correo = 'ejemplo';
  //       usuario.fechaNacimiento = 'ejemplo';
  //       usuario.nivelEducacion = 'ejemplo';
  //       usuario.tipoUsuario = 'ejemplo';
  //       params.push(usuario);
  //   }
  //   this.usuarioService.sync(params).then(() => {
  //     this.usuarioService.get().then((data: Usuario[]) => {
  //      console.log(data);
  //       this.usuarios = data;
  //     }).catch((e)=> console.log(e))
  //   }).catch((e)=> console.log(e))
  // }

  open(){
  
  }

  ngOnInit() {
    // this.usuario.nombreUsuario=this.activatedRoute.snapshot.paramMap.get("nombreUsuario");
    console.log('iniciando componente', this.usuario.nombreUsuario)
  }
}