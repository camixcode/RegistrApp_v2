import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.page.html',
  styleUrls: ['./sedes.page.scss'],
})
export class SedesPage implements OnInit {

  constructor(
    private http : HttpClient,
    private router: Router,
    public navCtrl : NavController,
    public modalController : ModalController,
    public fireStore : FirestoreService,
    public api : ApiService,
  ) { }
  sedes =[];
  sedesID =[]
  ngOnInit() {
    this.getSede();

  }
  getSedes(){
    this.api.getSedes().subscribe(res =>{
      console.log("Res",res)
      this.sedes = res;
    } )
  }

  getSede(){
    this.api.getSedes().subscribe(res =>{
      console.log("Res",res)
      this.sedes = res;
      const id = this.sedes.filter( (e) => e.id=='1');
      this.sedes= id;
      console.log(this.sedes);
    } )
    
  }

}
