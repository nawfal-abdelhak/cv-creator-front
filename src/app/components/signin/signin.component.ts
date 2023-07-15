import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router :Router, private userService:UserServiceService) { }

  ngOnInit(): void {
  }

  form:any= {
    username:"",
    password:"",
  }

  signIn(){
    this.userService.signIn(this.form).then((data: any) => {
      localStorage.setItem('user', JSON.stringify(data));
      this.userService.user=data;
    
      this.router.navigate(["/"])
        
    });
  
  }
  goTo(){
    
   this.router.navigate(["signup"])
  }

}
