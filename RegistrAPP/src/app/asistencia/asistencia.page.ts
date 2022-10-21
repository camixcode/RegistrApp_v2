import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  Dia: number;
  Curso: string;
  PorcAsistencia: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Dia: 1, Curso: 'Ingles', PorcAsistencia: '90'},
  {Dia: 2, Curso: 'Mobil', PorcAsistencia: '90'},
  {Dia: 3, Curso: 'Ética', PorcAsistencia: '90'},
  {Dia: 4, Curso: 'Software', PorcAsistencia: '90'},
  {Dia: 5, Curso: 'Calidad', PorcAsistencia: '90'},
  {Dia: 6, Curso: 'Portafolio', PorcAsistencia: '90'},
  {Dia: 7, Curso: 'Estadistica', PorcAsistencia: '90'},
  {Dia: 8, Curso: 'Fe Cristiana', PorcAsistencia: '90'},

];
@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})

export class AsistenciaPage implements OnInit {

  displayedColumns: string[] = ['Dia', 'Curso', 'PorcAsistencia'];
  dataSource = new MatTableDataSource <PeriodicElement> (ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator! : MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    public loadingCtrl: LoadingController

  ) { }

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
  }

}
function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}