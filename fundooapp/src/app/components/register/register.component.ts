import { Component, OnInit } from '@angular/core';
//import { Register } from '../../models/registerModel/registerModel';
import { UserServiceService } from '../../services/userService/user-service.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 public registerModel;
  
  constructor(private router: Router,private userService: UserServiceService) { 
    
    
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  firstnameFormControl = new FormControl('', [Validators.required]);
  lastnameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.minLength(5)]);
  confirmFormControl = new FormControl('', [Validators.minLength(5)]);
 
  ngOnInit() {
  }
  signIn() {
    this.router.navigate(['login']);
  }
  register() {
   
   this.registerModel={
     firstName:this.firstnameFormControl.value,
     lastName:this.lastnameFormControl.value,
     email:this.emailFormControl.value,
     password:this.passwordFormControl.value,
     service:'Advance'
   }
    
    
    
   
    this.userService.register(this.registerModel).subscribe(data => {

      console.log("Registration Successfull", data);
      this.router.navigate(['login']);
    },      error => {
          console.log("Error in registration", error);
        })
  }
}