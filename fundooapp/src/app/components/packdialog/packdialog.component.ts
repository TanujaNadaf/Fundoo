import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material';
import { ServiceComponent } from '../service/service.component';
import { UserServiceService } from '../../services/userService/user-service.service';
import{ Router} from '@angular/router'

@Component({
  selector: 'app-packdialog',
  templateUrl: './packdialog.component.html',
  styleUrls: ['./packdialog.component.scss']
})
export class PackdialogComponent implements OnInit {
public addDetails:Object;
  constructor(@Inject(MAT_DIALOG_DATA) public data,public router:Router,public matdialogRef:MatDialogRef<ServiceComponent>,public userService:UserServiceService) {
    console.log("Mat dialog data is",data);
   }

  ngOnInit() {
   
  }
proceedToCart(){
  this.matdialogRef.close();
  const productId={
      "productId":this.data
    }
    console.log("product id is",productId)
    this.userService.addToCart(productId).subscribe(response=>{
     console.log("Response to add to cart",response);
      this.addDetails=response['data']['details'];
     localStorage.setItem('cartId',this.addDetails['id'])
    },error=>{
      console.log("Error in adding to cart",error);
    })
  
this.router.navigate(['/register'])

}
}
