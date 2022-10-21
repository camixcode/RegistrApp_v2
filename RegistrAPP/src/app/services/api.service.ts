import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; import { Observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "https://jsonplaceholder.typicode.com"

  constructor(private http: HttpClient) { }


  getPosts(){
    return new Promise(resolve=>{
      this.http.get(this.apiUrl).subscribe(data=>{
          resolve(data);
      },error=>{
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
  ngOnInit() {
    this.getPosts()
  }

  
}
