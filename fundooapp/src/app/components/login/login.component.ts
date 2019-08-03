import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login} from '../../models/loginModel/loginModel';
import { UserServiceService } from '../../services/userService/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public serviceCards=[];
  emailFormControl=new FormControl('',[Validators.required,Validators.email]);
  passwordFormControl=new FormControl('',[Validators.required,Validators.minLength(8)]);
  constructor(private router:Router,private userService: UserServiceService) { }

  ngOnInit() {
    this.getUserService();
  }
  create(){
    this.router.navigate(['register']);
  }
  login(){
    const loginModel = new Login();
   
    loginModel.email = this.emailFormControl.value;
    loginModel.password = this.passwordFormControl.value;
    loginModel.cartId=localStorage.getItem('cartId')
    console.log(loginModel);
    this.userService.login(loginModel).subscribe(data => {

      console.log("Login Successfull", data);
     localStorage.setItem('token',data["id"]); 
     console.log(data["id"])
     localStorage.setItem('firstname', data['firstName']);
     localStorage.setItem('lastname', data['lastName']);
     localStorage.setItem('email', data['email']);
     localStorage.setItem('userId',data['userId'])
     localStorage.setItem('imageUrl', data['imageUrl']);
     this.router.navigate(['dashboard']);
     
    },      error => {
          console.log("Error in login", error);
        })
  }
  getUserService(){
    this.userService.getUserService().subscribe(response=>{
      console.log("Response to get user service",response);
      this.serviceCards=response['data']['data'];
      //console.log("Service cards",this.serviceCards)
    },error=>{
      console.log("Error in getting user service",error);
    })
    }
    getColor(name) { 
      switch (name) {
        case 'advance':
          return 'true';
        
          
      }
    }
  }

