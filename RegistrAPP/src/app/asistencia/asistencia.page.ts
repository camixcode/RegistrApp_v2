import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FirestoreService } from '../services/firestore.service';
import { Asistencia } from '../models/asistencia';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})

export class AsistenciaPage implements OnInit {

 
 

  @ViewChild(MatPaginator) paginator! : MatPaginator;


  constructor(
    public loadingCtrl: LoadingController,
    public fireStore: FirestoreService,
  ) { }
  
  asistencia = new Asistencia();
  asistenciaBD = new Asistencia();
  arrayPosts: any;
  private path = 'asistencia/';
  asistenciaFS = [];
  sedes = [];
  correo = "";
  id_asis:any;

cargarAsistencia() {
    this.id_asis = JSON.parse(localStorage.getItem('id'));
    console.log(this.id_asis)
    this.fireStore.getColeccion(this.path, 'id_alumno',this.id_asis).subscribe(res => {
      this.asistenciaFS = res;
      this.asistenciaBD = this.asistenciaFS[0];
      console.log(this.asistencia.id_alumno)
      console.log(this.asistencia.id_asistencia)
    })
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
    this.cargarAsistencia()
  }

}
