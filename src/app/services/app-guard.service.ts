import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from './user-service.service';
@Injectable({
  providedIn: 'root'
})
export class AppGuardService {

  constructor( public userService:UserServiceService,public router:Router) { }

  // canActivate(): boolean {
  //   return this.userService.user!=null ;
  // }

   canActivate(): boolean {
    
    if (this.userService.user!=null ) {
      return true;
    } else {
      this.router.navigate(['/signin']);
    }
    return false;
  }
  
}



