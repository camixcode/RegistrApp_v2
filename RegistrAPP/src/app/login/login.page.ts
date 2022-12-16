import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Usuario } from '../models/usuario';
import { ApiService } from '../services/api.service';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { FirestoreService } from '../services/firestore.service';


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
    public http : HttpClient,
    public fireStore : FirestoreService,
  ) { }
  usuario = new Usuario();
  usuarioBD = new Usuario();
  arrayPosts:any;
  private path = 'Usuario/';
  usuarioFS = [];
  sedes =[];
  correo="";


  ngOnInit() {
    
    this.getSedes();
    
    
  }

  
  getSedes(){
    this.api.getSedes().subscribe(res =>{
      console.log("Res",res)
      this.sedes = res;
    } )
  }
  secondWay(){
    this.http.get("assets/cursos.json").subscribe(data =>{
      console.log(data);      
    })
  }
  
  getPosts() { //llamamos a la funcion getPost de nuestro servicio.
    this.api.getPosts()
    .then(data => {
      this.arrayPosts = data;
    });
  }
  
  async ingresar() {
    
    this.fireStore.getColeccion(this.path,'correo',this.usuario.correo).subscribe(res =>{
      this.usuarioFS= res;
      this.usuarioBD=this.usuarioFS[0];
      console.log(this.usuarioBD.nombre)
      console.log(this.usuarioBD.correo)
    })
    

    if(this.usuario.correo==this.usuarioBD.correo && this.usuario.password==this.usuarioBD.password){
      const res = await this.loadingCtrl.create({
        message: 'Validando datos'
      });
     res.present()

      setTimeout("location.href='/perfil'", 5000);
      localStorage.setItem('ingresado','true');
      localStorage.setItem('id',JSON.stringify(this.usuarioBD.id));
      let secionIniciada = JSON.parse(localStorage.getItem('ingresado'));
      console.log(secionIniciada)



    }else if (this.usuario.correo==this.usuarioBD.correo && this.usuario.password != this.usuarioBD.password){
      const alert = await this.alertController.create({
        subHeader: 'Usuario',
        message: 'Error contraseña incorrecta',
        buttons: ['OK'],
      });
  
      await alert.present();
    }else if(this.usuario.correo!=this.usuarioBD.correo){
      const alert = await this.alertController.create({
        subHeader: 'Usuario',
        message: 'Error Usuario no registrado',
        buttons: ['OK'],
      });
  
      await alert.present();
    }

    
  }

  


}
