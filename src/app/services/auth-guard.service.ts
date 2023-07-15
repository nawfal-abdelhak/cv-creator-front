import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor( public userService:UserServiceService) { }

  canActivate(): boolean {
    return this.userService.user.client.role[0]!="CLIENT" ;
  }
}
