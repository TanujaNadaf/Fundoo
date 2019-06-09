import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService{
  

  private messageSource = new BehaviorSubject('default message');
  currentData = this.messageSource.asObservable();
  sendData(data: any) {
    this.messageSource.next(data);
  }
}
