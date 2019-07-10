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
  emailFormControl=new FormControl('',[Validators.required,Validators.email]);
  passwordFormControl=new FormControl('',[Validators.required,Validators.minLength(8)]);
  constructor(private router:Router,private userService: UserServiceService) { }

  ngOnInit() {
  }
  create(){
    this.router.navigate(['register']);
  }
  login(){
    const loginModel = new Login();
   
    loginModel.email = this.emailFormControl.value;
    loginModel.password = this.passwordFormControl.value;
    
    console.log(loginModel);
    this.userService.login(loginModel).subscribe(data => {

      console.log("Login Successfull", data);
     localStorage.setItem('token',data["id"]); 
     localStorage.setItem('firstname', data['firstName']);
     localStorage.setItem('lastname', data['lastName']);
     localStorage.setItem('email', data['email']);
   
     localStorage.setItem('imageUrl', data['imageUrl']);
     this.router.navigate(['dashboard']);
    },      error => {
          console.log("Error in login", error);
        })
  }
  }

