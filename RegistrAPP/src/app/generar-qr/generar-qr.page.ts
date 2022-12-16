import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { doc, setDoc } from "firebase/firestore";
import { FirestoreService } from '../services/firestore.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Asistencia } from '../models/asistencia';
import { Firestore } from 'firebase/firestore';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQRPage implements OnInit {

  constructor(public fireStore: AngularFirestore,
    ) { }
    asistencia = new Asistencia();
    private path = 'asistencia/';
    fecha:any;
    hora:any;

    

  async getTakePhoto(){
    
    this.asistencia.id_alumno=JSON.parse(localStorage.getItem('id'));
    this.asistencia.fecha= JSON.stringify(this.fecha);
    this.asistencia.hora= JSON.stringify(this.hora);
    console.log(this.asistencia)
    this.fireStore.collection('asistencia').doc().set(Object.assign({}, this.asistencia))
    
    const image = await Camera.getPhoto({
      quality: 90, 
      source: CameraSource.Prompt,
      width:600,
      resultType: CameraResultType.Uri
    });
  
  }
  ngOnInit() {
    this.fecha = formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
    this.hora = formatDate(new Date(), 'H:MM', 'en-US')
  }

}
