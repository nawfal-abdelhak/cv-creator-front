import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpersService } from 'src/app/services/helpers.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router :Router, public userService:UserServiceService,public helper :HelpersService) { }

  ngOnInit(): void {
    this.getCvs()
  }

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  

  getCvs(){
    this.userService.getCvs().then((data: any) => {
     console.log(data)
     this.helper.cvs=data
  })
  }

  goTo(cv:any){
  this.helper.selectedcv=cv
  this.router.navigate(["create-cv"])

  }
 



}
