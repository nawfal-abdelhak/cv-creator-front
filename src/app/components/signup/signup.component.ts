import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserServiceService,public router :Router) { }

  form:any= {
    username:"",
    lastName:"",
    mail:"",
    password:"",
  }
  ngOnInit(): void {
  }

  signUp(){
    console.log(this.form)
    this.userService.addUser(this.form).then((data: any) => {
     
      localStorage.setItem('user', JSON.stringify(data));
      this.userService.user=data
      this.router.navigate(["/"])
    });
  
  }

  goTo(){
    
    this.router.navigate(["signin"])
   }

}
