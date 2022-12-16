import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { doc, setDoc } from "firebase/firestore";
import { FirestoreService } from '../services/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Asistencia } from '../models/asistencia';
import { Firestore } from 'firebase/firestore';
@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQRPage implements OnInit {

  constructor(public fireStore: AngularFirestore,
    ) { }
    asistencia = new Asistencia();
  async getTakePhoto(){
    this.asistencia.id_alumno=JSON.parse(localStorage.getItem('id'));
    this.asistencia.hora= Date();
    console.log(this.asistencia)

    
    const image = await Camera.getPhoto({
      quality: 90, 
      source: CameraSource.Prompt,
      width:600,
      resultType: CameraResultType.Uri
    });
  
  }
  ngOnInit() {
  }

}
