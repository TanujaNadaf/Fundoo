import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/registerModel/registerModel';
import { UserServiceService } from '../../services/userService/user-service.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router,private userService: UserServiceService) { }
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
    const registerModel = new Register();
    
    
    registerModel.firstName = this.firstnameFormControl.value;
    registerModel.lastName = this.lastnameFormControl.value;
    registerModel.email = this.emailFormControl.value;
    registerModel.password = this.passwordFormControl.value;
    //registerModel.confirmPassword = this.confirmFormControl.value;
   registerModel.service='Advance';
   
    this.userService.register(registerModel).subscribe(data => {

      console.log("Registration Successfull", data);
      this.router.navigate(['login']);
    },      error => {
          console.log("Error in registration", error);
        })
  }
}