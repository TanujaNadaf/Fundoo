import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  dbUrl=environment.url;
  constructor(private http: HttpClient) { }
 post(url,data){
    console.log("login url in http service",url);
    console.log("login details in http service",data);
    const httpOptions = {
      headers: new HttpHeaders(
        {
          Authorization: localStorage.getItem('token'),
         //'Content-Type' : 'application/json'

          
        })
    };
     
    return this.http.post(this.dbUrl+url,data, httpOptions);
  }
  get(url) {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          Authorization: localStorage.getItem('token'),
          'Content-Type' : 'application/json'
        })
    };
    return this.http.get(this.dbUrl+url,httpOptions);
  }
  delete(url){
    const httpOptions = {
      headers: new HttpHeaders(
        {
          Authorization: localStorage.getItem('token'),
          'Content-Type' : 'application/json'
        })
    };
    return this.http.delete(this.dbUrl+url,httpOptions);
  }
  
}
