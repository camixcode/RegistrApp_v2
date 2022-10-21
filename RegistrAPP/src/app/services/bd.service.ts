import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
  // import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
  // import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class Bd {
  // private db: SQLiteObject;
  private isDbReady = false;

  constructor(
    private platform: Platform,
    // private sqlite: SQLite,
    // private httpClient: HttpClient,
    // private sqlPorter: SQLitePorter,
  ) { }
  
  //  open() {
  //   return new Promise((resolve, reject) => {
  //     this.sqlite.create({
  //       name: 'data.db',
  //       location: 'default'
  //     })
  //       .then((db: SQLiteObject) => {
      
      
  //         db.executeSql('create table danceMoves(name VARCHAR(32))', [])
  //           .then(() => console.log('Executed SQL'))
  //           .catch(e => console.log(e));
      
      
  //       })
  //       .catch(e => console.log(e));

  //   }).catch(e => console.log(e));
  // }


  // excuteBatch(params: any[]) {
  //   return new Promise((resolve, reject) => {
  //     this.open().then(() => {
  //       this.db.sqlBatch(params).then((response) => {
  //         resolve(response)
  //       }).catch(err => reject(err));
  //     }).catch(err => reject(err));
  //   })
  // }

  // excute(query: string, params: any) {
  //   return new Promise((resolve, reject) => {
  //     this.open().then(() => {
  //       this.db.executeSql(query, params).then((response) => {
  //         resolve(response)
  //       }).catch(err => reject(err));
  //     }).catch(err => reject(err));
  //   })
  // }

  // getData(query: string, params: any) {
  //   return new Promise((resolve, reject) => {
  //     this.open().then(() => {
  //       this.db.executeSql(query, params).then((response) => {
  //         const items = [];
  //         for (let i = 0; i < response.rows.length; i++) {
  //           const element = response.rows.item(i)
  //           items.push(element);
  //         }
  //         resolve(items);
  //       }).catch(err => reject(err));
  //     }).catch(err => reject(err));
  //   })
  }

