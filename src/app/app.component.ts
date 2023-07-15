import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'your-application-name';
  color:string='';

  user_retrieved :any=null

  constructor(private router: Router,public userService:UserServiceService ) {
    
   }

  ngOnInit() {
 
    this.userService.shownav=true
     this.user_retrieved = localStorage.getItem('user');  
    this.userService.user= JSON.parse(this.user_retrieved);
    console.log( this.userService.user)
  
  }
  
}


