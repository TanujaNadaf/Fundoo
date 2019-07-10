import { Component, OnInit,Input,Inject,EventEmitter,Output} from '@angular/core';
import { UserServiceService } from '../../services/userService/user-service.service';
import { LabelModel } from 'src/app/models/labelModel';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { DataService } from "../../services/data.service";
@Component({
  selector: 'app-deletelabel',
  templateUrl: './deletelabel.component.html',
  styleUrls: ['./deletelabel.component.scss']
})
export class DeletelabelComponent implements OnInit {
  @Output() messageEvent =new EventEmitter<any>()

  constructor(private userService: UserServiceService,@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DeletelabelComponent>,public dataService: DataService) {
    
   }
  ngOnInit() {
   
  }
  
  deleteLabel(){
    
    this.userService.deleteLabel(this.data.id).subscribe(response => {

      console.log("Response to delete label", response);
      this.dataService.sendData(this.data);
      }, error => {
      console.log("error in deleting label", error);
    })
  
  }
  onNoClick():
  void {
  this.dialogRef.close();
}
}
