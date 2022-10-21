import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  constructor(
    private http : HttpClient,
    private api : ApiService
  ) { }

  arrayPosts:any; //Creamos la variable donde guardaremos los datos que nos retorna el servicio
  ionViewDidLoad() {
    this.getPosts();//Llamamos a la función getPost cuando la vista se cargue
  }

  getPosts() { //llamamos a la funcion getPost de nuestro servicio.
    this.api.getPosts()
    .then(data => {
      this.arrayPosts = data;
    });
  }
  
  ngOnInit() {
  }

  


}
