import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user : User
  message : string;
  loginForm : FormGroup;
  constructor(private userService: UserService , private router : Router) {

    
    this.user = new User();
    
    this.message ="";
     this.loginForm = new FormGroup({

       email : new FormControl(null,[Validators.required , Validators.email]),

       password : new FormControl(null,[Validators.required])

        

     });
   }

   login(): void {
    

   this.user = Object.assign({}, this.loginForm.value);

    if(this.loginForm.valid){

    this.router.navigate(["stockItem"]);


  //  this.userService.login(this.user).subscribe(result => {

  //   this.message = result.msg;
    
  //   this.router.navigate(["stockItem"]);


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
