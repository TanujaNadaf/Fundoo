import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() allCards: string;
  message:string;
  constructor() {}
  ngOnInit() { }
  
  receiveMessage($event) {
    this.message = $event
  }


}
