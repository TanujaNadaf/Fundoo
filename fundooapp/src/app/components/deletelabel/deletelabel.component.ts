import { Component, OnInit,Input} from '@angular/core';
import { UserServiceService } from '../../services/userService/user-service.service';
import { LabelModel } from 'src/app/models/labelModel';
@Component({
  selector: 'app-deletelabel',
  templateUrl: './deletelabel.component.html',
  styleUrls: ['./deletelabel.component.scss']
})
export class DeletelabelComponent implements OnInit {


  constructor(private userService: UserServiceService) {
    
   }
  ngOnInit() {
  }
  
  deleteLabel(){
    console.log("In delete labels function");
    console.log('in delete ',this.data);
    /*const label = {
      'id':this.data['id']
}
    console.log("label in delete label component",label);
    this.userService.delete(label).subscribe(response => {

      console.log("Response to delete label", response);
     // this.messageEvent.emit();
      }, error => {
      console.log("error in deleting label", error);
    })*/
  
  }
}
