import { Component, OnInit,ElementRef, ViewChild  } from '@angular/core';


@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements OnInit {

  constructor() { }

  color:string='#6466f1';
   show_pers_info:Boolean=false;
   pers_info={
    'name':'',
    'last_name':'',
    'mail':'',
    'profile_title':'',
    'city':'',
    'desc':'',
    'address':'',
    'phone_number':'',
    'birth_place':'',
    'birth_date':''
   }
   birth_place:Boolean=false;
   birth_date:Boolean=false;
   show_experience:Boolean=false;
   formation={
    'name':'',
    'school':'',
    'city':'',
    'start_date':'',
    'end_date':'',
    'desc':'',
   }

   formations:any=[{
    'name':'',
    'school':'',
    'city':'',
    'start_date':'',
    'end_date':'',
    'desc':'',
   }]

  ngOnInit(): void {
    
  }

  hide_info_pers(){
    this.show_pers_info=!this.show_pers_info;

  }

  hide_experience(){
    this.show_experience=!this.show_experience;
  }
 
  
  addFormation(){
  this.formations.push(this.formation);
  }

  confirmFormation(){
    console.log(this.formations)
  }
}
