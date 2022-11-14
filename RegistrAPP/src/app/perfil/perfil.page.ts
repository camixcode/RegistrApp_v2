import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    public loadingCtrl: LoadingController,
    public menu: MenuController,
    public fireStore: FirestoreService,


  ) { }
  id: any;
  private path = 'Usuario/';
  usuarioFS = [];
  usuario = JSON.parse(localStorage.getItem('id'));
  usuarioBD = this.fireStore.getUsuario(this.path, 'id', this.usuario).subscribe(res => {

    this.usuarioFS = res;
    this.usuarioBD = this.usuarioFS[0];
    console.log(this.usuarioBD)
  })
  ngOnInit() {    
  }

  open() {
    this.menu.open();
  }
  volver() {
    window.location.href = '/home'
  }

  async salir() {
    const res = await this.loadingCtrl.create({
      message: 'Cerrando sesion'
    });
    res.present()
    setTimeout("location.href='/login'", 3000);
    localStorage.removeItem('ingresado');
    let secionIniciada = JSON.parse(localStorage.getItem('ingresado'));
    console.log(false)
  }


}