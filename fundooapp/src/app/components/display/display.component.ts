import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { DataService } from "../../services/data.service";



export interface DialogData {
  title: string;
  description: string;
}
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() allCards: string;
  card;
  @Output() messageEvent = new EventEmitter<any>()
  constructor(public dialog: MatDialog, public data: DataService) { }
  ngOnInit() {
    // this.data.currentData.subscribe(card => {

    // });
      //  this.card = card);
  }
  openDialog(card): void {
    console.log("In open dialog");
    this.dialog.open(DialogComponent, {
      data: card
    })
  
  }
  eventOccur() {
    this.messageEvent.emit();
  }

}

