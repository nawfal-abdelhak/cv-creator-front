import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router:Router,public usersrvice :UserServiceService) { }

  ngOnInit(): void {
    console.log(this.usersrvice.user.client.role[0])
  }

  items = [
    { name: 'Tableau de bord',path:'' },
    { name: 'Cv' ,path:'cvs'},
    { name: 'Lettre de motivation' ,path:'cover-letter'},
    { name: 'Parametre' ,path:'para'},
    { name: 'statistique' ,path:'statistique'}
    // Add more items as needed
  ];

 public activeItem : string = this.items[0].name; // Set the first item as active initially

  isActive(item: any): boolean {
    return item == this.activeItem;
  }

  goTo(destination:any){
    this.activeItem=destination.name
   this.router.navigate([destination.path])
  }

  logout(){
    this.router.navigate(["/signin"])
    localStorage.removeItem('user');
  }

}
