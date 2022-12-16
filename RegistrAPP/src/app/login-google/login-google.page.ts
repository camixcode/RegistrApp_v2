import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { AlertController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import {HttpClient} from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.page.html',
  styleUrls: ['./login-google.page.scss'],
})
export class LoginGooglePage implements OnInit {

  constructor(private authSvc: AuthService,
    private router: Router,
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    public loadingCtrl: LoadingController,
    public api: ApiService,
    public http: HttpClient,
    public fireStore: FirestoreService,) { }

    
  usuario = new Usuario();
  usuarioBD = new Usuario();
  arrayPosts: any;
  private path = 'Usuario/';
  usuarioFS = [];
  sedes = [];
  correo = "";

  async ingresar() {

    this.fireStore.getColeccion(this.path, 'correo', this.usuario.correo).subscribe(res => {
      this.usuarioFS = res;
      this.usuarioBD = this.usuarioFS[0];
      console.log(this.usuarioBD.nombre)
      console.log(this.usuarioBD.correo)
    })


    if (this.usuario.correo == this.usuarioBD.correo && this.usuario.password == this.usuarioBD.password) {
      const res = await this.loadingCtrl.create({
        message: 'Validando datos'
      });
      res.present()
      setTimeout("location.href='/perfil'", 5000);
      localStorage.setItem('ingresado', 'true');
      localStorage.setItem('id', JSON.stringify(this.usuarioBD.id));
      console.log(this.usuarioBD.id)
      let secionIniciada = JSON.parse(localStorage.getItem('ingresado'));
      console.log(secionIniciada)



    } else if (this.usuario.correo == this.usuarioBD.correo && this.usuario.password != this.usuarioBD.password) {
      const alert = await this.alertController.create({
        subHeader: 'Usuario',
        message: 'Error contraseña incorrecta',
        buttons: ['OK'],
      });

      await alert.present();
    } else if (this.usuario.correo != this.usuarioBD.correo) {
      const alert = await this.alertController.create({
        subHeader: 'Usuario',
        message: 'Error Usuario no registrado',
        buttons: ['OK'],
      });

      await alert.present();
    }


  }


  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        if (isVerified) {
          localStorage.setItem('ingresado', 'true');
          let secionIniciada = JSON.parse(localStorage.getItem('ingresado'));
          console.log(secionIniciada);
          this.router.navigate(['perfil']);
        } else {
          this.router.navigate(['login-google']);
        }
      }
        console.log(user.email)
      }
     catch (error) {
      console.log('Error->', error);
    }
  }   

 

  ngOnInit() {
  }

}
