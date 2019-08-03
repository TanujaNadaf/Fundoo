import { Component, OnInit } from '@angular/core';
//import { Register } from '../../models/registerModel/registerModel';
import { UserServiceService } from '../../services/userService/user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerModel;
  public serviceCards=[];
  public isClicked=false;
  constructor(private router: Router, private userService: UserServiceService) {


  }
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  firstnameFormControl = new FormControl('', [Validators.required]);
  lastnameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.minLength(5)]);
  confirmFormControl = new FormControl('', [Validators.minLength(5)]);

  ngOnInit() {
    this.getUserService();
  }
  signIn() {
    this.router.navigate(['login']);
  }
  register() {

    this.registerModel = {
      firstName: this.firstnameFormControl.value,
      lastName: this.lastnameFormControl.value,
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value,
      service: 'Advance'
    }




    this.userService.register(this.registerModel).subscribe(data => {

      console.log("Registration Successfull", data);
      this.router.navigate(['login']);
    }, error => {
      console.log("Error in registration", error);
    })
  }
  getColor(name) { 
    switch (name) {
      case 'advance':
        return 'true';
      
        
    }
  }
  getUserService(){
    this.userService.getUserService().subscribe(response=>{
      //console.log("Response to get user service",response);
      this.serviceCards=response['data']['data'];
     // console.log("Service cards",this.serviceCards)
    },error=>{
      console.log("Error in getting user service",error);
    })
    }
}