import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../services/data.service'
import { DisplayComponent } from '../display/display.component';
import { UserServiceService } from '../../services/userService/user-service.service';
@Component({
  selector: 'app-updatenoteslabel',
  templateUrl: './updatenoteslabel.component.html',
  styleUrls: ['./updatenoteslabel.component.scss']
})
export class UpdatenoteslabelComponent implements OnInit {
public label:Object
  constructor(public dialogRef: MatDialogRef<DisplayComponent>, public data: DataService,
    private userService: UserServiceService, @Inject(MAT_DIALOG_DATA) public Label) {
      //console.log("Label in update notes label",this.Label);
     if(this.Label){
      this.label =Label.label
     }
     }

  ngOnInit() {
  }
  updateNotesLabel(){
    const labelModel={
      'label':this.label,
      'isDeleted':false,
      'id':this.Label.id,
      'userId':this.Label.userId
      
    }
    console.log("label model",labelModel)
  this.userService.updateLabelofNotes(this.Label.id,labelModel).subscribe(response=>{
    console.log("Response to update note labels",response)
    this.data.sendData('');
  },error=>{
    console.log("error in updating notes label",error)
  })
  this.dialogRef.close();
}
}
