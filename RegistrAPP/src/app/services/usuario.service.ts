import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Bd } from './bd.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private bd: Bd
  ) { }

  // create() {
  //   const query = 'CREATE TABLE IF NOT EXISTS USUARIO';
  //   return this.bd.excute(query, [])
  // }

  // drop() {
  //   const query = 'DROP TABLE IF EXISTS USUARIO';
  //   return this.bd.excute(query, [])
  // }

  // get() {
  //   const query = 'SELECT * FROM USUARIO';
  //   return this.bd.getData(query, [])
  // }

  // multiplesInsert(params: Usuario[]) {
  //   const query = 'INSERT INTO usuario (nombreUsuario, nombre, apellido, correo, nivelEducacion, fechaNacimiento, tipoUsuario , password) VALUES (?,?,?,?,?,?,?,?';
  //   const data = params.map((u: Usuario) => {
  //     const values = [];
  //     values.push(query);
  //     values.push([
  //       u.id,
  //       u.nombre,
  //       u.apellido,
  //       u.nombreUsuario,
  //       u.password,
  //       u.correo,
  //       u.fechaNacimiento,
  //       u.nivelEducacion,
  //       u.tipoUsuario
  //     ]);
  //     return values
  //   })

  //   return this.bd.excuteBatch(data)
  // }

  // sync(params: Usuario[]) {
  //   return new Promise((resolve, reject) => {
  //     this.drop().then(() => {
  //       this.create().then(() => {
  //         this.multiplesInsert(params).then(() => {

  //         }).catch(e => reject(e))
  //       }).catch(e => reject(e))
  //     }).catch(e => reject(e))
  //   })
  // }
}