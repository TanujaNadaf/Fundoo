import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  

  private messageSource = new BehaviorSubject('default message');
  currentData = this.messageSource.asObservable();
  
  private gridEvent = new Subject<boolean>();
  currentGridEvent = this.gridEvent.asObservable();
  


  sendData(data: any) {
    console.log("In send data service",data);
    this.messageSource.next(data);
  }
  changeGridEvent(message: boolean) {
    this.gridEvent.next(message)
  }
  changeListEvent(message:boolean){
    this.gridEvent.next(message)
  }
}
