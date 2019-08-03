import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/userService/user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { PackdialogComponent } from '../packdialog/packdialog.component';
import{Router} from '@angular/router'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  public isClicked = false;
  public serviceCards:[];
  public select:Boolean=false;
  public data:Object;
  getColor(name) { 
    switch (name) {
      case 'advance':
        return 'true';
     
        
    }
  }
  constructor(public userService:UserServiceService,public router:Router,public dialog:MatDialog) { }

  ngOnInit() {
  this.getUserService();
  }
getUserService(){
this.userService.getUserService().subscribe(response=>{
  console.log("Response to get user service",response);
  this.serviceCards=response['data']['data'];
 console.log("Service cards",this.serviceCards)
},error=>{
  console.log("Error in getting user service",error);
})
}



openPackDialog(service){
  this.dialog.open(PackdialogComponent,{
    width:'550px',
    data:service.id
  })
}

}
