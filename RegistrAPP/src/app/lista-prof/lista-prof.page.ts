import { Component, OnInit } from '@angular/core';
import { LeerProfService } from '../leer-prof.service';

@Component({
  selector: 'app-lista-prof',
  templateUrl: './lista-prof.page.html',
  styleUrls: ['./lista-prof.page.scss'],
})
export class ListaProfPage implements OnInit {

  public listaProf:any = []

  constructor(private leerprof:LeerProfService) { }

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
