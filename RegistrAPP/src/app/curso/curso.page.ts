import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  constructor(
    private http : HttpClient,
    private router: Router,
    public navCtrl : NavController,
    public modalController : ModalController,
    public fireStore : FirestoreService,
    public api : ApiService,

    ) { }

  private path = 'Curso/';
  cursos = [];
  sedes =[];

  ngOnInit() {

    this.getCursos();
    this.api.obtenerRecurso();


    
    
  }

  
  getCursosLocal(){
    this.api.getUsers().subscribe(res =>{
      console.log("Res",res)
      this.cursos = res;
    } )
  }
  

  getItems($event){
    const valor = $event.target.value;
    console.log(valor)
    if(valor==null){
      this.fireStore.getCollection(this.path).subscribe(res =>{
        console.log(res)
        this.cursos= res;
      })
    }else{
      this.fireStore.getCollectionId(this.path,'curso',valor).subscribe(res =>{
        console.log(res)
        this.cursos= res;
      })
    }
    return valor;
  }


  irEditar(){
 
      this.router.navigate(['/editar-curso'])

  }

  getCursos(){
    this.fireStore.getCollection(this.path).subscribe(res =>{
      console.log(res)
      this.cursos= res;
    })
    

  }

  getCurso(){
    this.fireStore.getCollectionId(this.path,'curso','Etica').subscribe(res =>{
      console.log(res)
      this.cursos= res;
    })
    

  }
  irAgregar(){
 
    this.router.navigate(['/agregar-curso'])

}
}
