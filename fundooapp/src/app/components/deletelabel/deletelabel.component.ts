import { Component, OnInit,Input,Inject} from '@angular/core';
import { UserServiceService } from '../../services/userService/user-service.service';
import { LabelModel } from 'src/app/models/labelModel';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-deletelabel',
  templateUrl: './deletelabel.component.html',
  styleUrls: ['./deletelabel.component.scss']
})
export class DeletelabelComponent implements OnInit {


  constructor(private userService: UserServiceService,@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DeletelabelComponent>,) {
    
   }
  ngOnInit() {
    console.log(this.data);
  }
  
  deleteLabel(){
    console.log("In delete labels function");
    console.log('in delete labels function ',this.data);
    this.userService.deleteLabel(this.data.id).subscribe(response => {

      console.log("Response to delete label", response);
     // this.messageEvent.emit();
      }, error => {
      console.log("error in deleting label", error);
    })
  
  }
  onNoClick():
  void {
  this.dialogRef.close();
}
}
