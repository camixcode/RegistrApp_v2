import { Component, OnInit } from '@angular/core';
import { RestProfeService } from '../services/rest-profe.service';

@Component({
  selector: 'app-ver-profe',
  templateUrl: './ver-profe.page.html',
  styleUrls: ['./ver-profe.page.scss'],
})
export class VerProfePage implements OnInit {

  public listaProf:any = []

  constructor(private leerprof:RestProfeService) { }

  ngOnInit(): void{
    this.cargarData();
  }

  public cargarData(){
    this.leerprof.get('http://localhost:3000/posts')
    .subscribe(respuesta=>{
      console.log(respuesta);
      this.listaProf = respuesta;
    })
  }
}