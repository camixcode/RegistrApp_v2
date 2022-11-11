import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; import { Observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "https://jsonplaceholder.typicode.com"

  constructor(private http: HttpClient) { }


  getPosts() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });
  }

  addPost(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, JSON.stringify(data))
        .subscribe(response => {
          resolve(response);
        }, (error) => {
          reject(error);
        });
    });
  }

  obtenerRecurso() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }



  crearRecurso() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  ngOnInit() {
    this.getPosts()
  }


}
