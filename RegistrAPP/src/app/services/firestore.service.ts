import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  curso =[];
  constructor(private fireStore: AngularFirestore) { 
    
  }

  crearCurso(){
    this.fireStore.collection('Cursos')
  }

  getCollection(path: string){
    console.log('Estoy por leer una coleccion')
    const collection = this.fireStore.collection(path);
    return collection.valueChanges();
  }

  getCollectionId(path:string , parametro: string, value: string){
    const collection = this.fireStore.collection(path, ref => ref.where(parametro, '==',value));
    return collection.valueChanges();
  }

  getColeccion(path:string , parametro: string, value: string){
    const collection = this.fireStore.collection(path, ref => ref.where(parametro, '==',value));
    return collection.valueChanges();
  }

  crearColeccion(path:string , id: string, data: string){
    const collection = this.fireStore.collection(path);
    return collection.valueChanges();
  }

  
}
