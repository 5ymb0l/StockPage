import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User;
  message : string;
  registerForm : FormGroup;

  constructor(private userService : UserService , private router :Router) { 

    this.user = new User();
    
    this.message ="";
  
     this.registerForm = new FormGroup ({

      firstName : new FormControl ( null, [Validators.required]),

      lastName : new FormControl ( null , [Validators.required]),

      email : new FormControl (null , [Validators.required]),

      password: new FormControl (null, [Validators.required]),

     })

  }

 


  register(): void {

   this.user = Object.assign({}, this.registerForm.value);

   if(this.registerForm.valid){

  //  this.userService.register(this.user).subscribe(result => {

  //   this.message = result.msg;
    
    this.router.navigate(["login"]);


  //  },
  //  (err) =>{
  
  //    this.message =err.msg;

  //  });

   }
   else {

    this.message = "form invalid" ;
  
    }

  } 

   

  ngOnInit(): void {
  }

}
