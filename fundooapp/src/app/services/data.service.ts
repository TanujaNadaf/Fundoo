import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  

  private messageSource = new BehaviorSubject('default message');
  currentData = this.messageSource.asObservable();

  


  sendData(data: any) {
    console.log("In send data service",data);
    this.messageSource.next(data);
  }
 

}
