import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let Key = '8Y39gA7fnoJ2TtVrHgKXoEIFuegen3hRd5FoCjgUc1QsLR8qAu_f5YpD40m00dYEqh0E2mysHzU0Rb2TNRDGDWRhTQ-u3fJ2z0ZRoDuljsLUJpvtMsM97fDFUrriXHYx';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class YelpService {

  constructor(private http: HttpClient) { }

  getYelp(endpoint) {
    console.log(endpoint)
    let body = {information: endpoint};
    console.log(body);
    return this.http.put(`http://localhost:3000/yelp/get`, body, httpOptions)
  }
}
