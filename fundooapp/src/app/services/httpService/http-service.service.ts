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
    console.log(url);
    console.log('data in http service  ', data);
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': localStorage.getItem('token'),
          'Content-Type' : 'application/json'
        })
    };
      console.log(httpOptions);
    return this.http.post(this.dbUrl+url,data, httpOptions);
  }
  get(url) {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization':localStorage.getItem('token'),
          'Content-Type' : 'application/json'
        })
    };
    return this.http.get(this.dbUrl+url,httpOptions);
  }
  delete(url){
    return this.http.delete(this.dbUrl+url);
  }
}
