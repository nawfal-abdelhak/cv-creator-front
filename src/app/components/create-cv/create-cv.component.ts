import { Component, OnInit,ElementRef, ViewChild, HostListener, HostBinding, Renderer2  } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';
import { ArticleService } from 'src/app/services/article.service';
import { HelpersService } from 'src/app/services/helpers.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements OnInit {

  file:any;
  color:string='#6466f1';
   show_pers_info:Boolean=false;
   pers_info={
    'username':'',
    'last_name':'',
    'mail':'',
    'profile_title':'',
    'city':'',
    'description':'',
    'address':'',
    'phone_number':'',
    'birth_place':'',
    'birth_date':''
   }
   birth_place:Boolean=false;
   birth_date:Boolean=false;
   show_experience:Boolean=false;
   show_formation:Boolean=false;
   show_comp:Boolean=false;
   show_lang:Boolean=false;
   show_CI:Boolean=false;

   formations:any=[{
    'name':'',
    'school':'',
    'city':'',
    'start_date':'',
    'end_date':'',
    'description':'',
   }]

  currentIndex:number=0;

  cv: any = { 'title':"", pers_info: { 'username': '',
  'last_name':'',
  'mail':'',
  'image':'',
  'address':'',
  'phone_number':'',
  'birth_place':'',
  'birth_date':'' },
  formations:[{
    'name':'',
    'school':'',
    'city':'',
    'start_date':'',
    'end_date':'',
    'description':'',
   }],
  
   comps:[{
    'name':'',
    'value':0
   
   }],
   langs:[{
    'name':'',
    'value':0
   
   }],
   experiences:[{
    'name':'',
    'hire':'',
    'city':'',
    'start_date':'',
    'end_date':'',
    'description':'',
   }],
   interests:[{
    'name':'',
   }]
  }
;// Add an initial section
 
subbed:boolean=false
first_time:boolean=false
  constructor(private elementRef: ElementRef,private renderer: Renderer2,public helper :HelpersService,public userService :UserServiceService,private router:Router,private articleSerice:ArticleService) {
    
  }



  ngOnInit() {
    this.getUser()
    this.renderer.addClass(document.body, 'disable-scroll');
    if(this.helper.selectedcv){
      console.log(this.helper.selectedcv)
      this.cv.formations=this.helper.selectedcv.formations;
      this.cv.formations.forEach((element: { start_date: string | number | Date; end_date: string | number | Date; }) => {
        element.start_date=new Date(element.start_date);
        element.end_date=new Date(element.end_date);
      });

      this.cv.experiences.forEach((element: { start_date: string | number | Date; end_date: string | number | Date; }) => {
        element.start_date=new Date(element.start_date);
        element.end_date=new Date(element.end_date);
      });

      this.cv.comps=this.helper.selectedcv.comps;
      this.cv.experiences=this.helper.selectedcv.experiences;
      this.cv.langs=this.helper.selectedcv.langs;
      this.cv.interests=this.helper.selectedcv.cis;
      this.cv.title=this.helper.selectedcv.title   

      
      console.log(this.cv.pers_info)

    }

  
    if(this.helper.cvs.length>=1){
  
    }
    else{
      this.first_time=true
    }

   
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'disable-scroll');
    this.helper.selectedcv=null
  }
  
  subscribe(){
    this.userService.subscribe().then((data: any) => {
      this.visible = false;
      this.subbed=true
    });
  }
  

  // @HostListener('window:scroll', [])
  // onScroll() {
  //   console.log("nice")
    

  //   // if (scrollTop + containerHeight >= scrollHeight) {
  //   //   this.addNewCVSection();
  //   // }
  // }
 
  getUser(){
    this.userService.getUser().then((data: any) => {
      if(data.subbed){
       console.log(data)
        this.subbed=true

       
      }
if(this.helper.selectedcv){
  this.cv.pers_info.username=data.username
      this.cv.pers_info.mail=data.mail
      this.cv.pers_info.last_name=data.last_name
      this.cv.pers_info.birth_date=new Date(data.birth_date)
      this.cv.pers_info.birth_place=data.birth_place
      this.cv.pers_info.image=data.image
      this.cv.pers_info.phone_number=data.phone_number
      this.cv.pers_info.address=data.address
}
    
    });
  }

 
   addNewCVSection() {
    console.log("nice")
    
   }

   getTextValue(value:number){

if(value==20){
  return "Débutant"
}
else if(value==40){
  return "Intermédiaire"
}
else if(value==60){
  return "Bien"
}

else if(value==80){
  return "Très bien"
}
else if(value==100){
  return "Excellent"
}

else  {
  return "Choissiser"
}

 
   }
 

  

 

  show(){
    console.log(this.cv)
  }

  
  onElementScroll($event:any){
    // const cvContainerHeight = this.elementRef.nativeElement.querySelector('#right-element').clientHeight;
    // const cvContainerTop = this.elementRef.nativeElement.querySelector('#right-element').scrollTop;

    // console.log('CV Container Height:', cvContainerHeight);
    // console.log('CV Container top:', cvContainerTop);
    // if(cvContainerTop==1){
    //   this.cv.push({ pers_info: { name: '',
    //   'last_name':'',
    //   'mail':'',
    //   'profile_title':'',
    //   'city':'',
    //   'desc':'',
    //   'address':'',
    //   'phone_number':'',
    //   'birth_place':'',
    //   'birth_date':'' },
    //   formations:[{
    //     'name':'',
    //     'school':'',
    //     'city':'',
    //     'start_date':'',
    //     'end_date':'',
    //     'desc':'',
    //    }] });
    //   this.currentIndex==1;
    // }
    


 
  } 
  hide_info_pers(){
    this.show_pers_info=!this.show_pers_info;

  }

  hide_formation(){
    this.show_formation=!this.show_formation;
  }

  hide_experience(){
    this.show_experience=!this.show_experience;
  }
 
  
  addFormation(){
   const formation_body  = {
      'name':'',
      'school':'',
      'city':'',
      'start_date':'',
      'end_date':'',
      'description':'',
     }
     this.cv.formations.push(formation_body);
     

  }

  addExperience(){
    const experience_body  = {
      'name':'',
      'hire':'',
      'city':'',
      'start_date':'',
      'end_date':'',
      'description':'',
     }
     this.cv.experiences.push(experience_body);

   
  
  }

  confirmExperience(){
    
  }

  confirmFormation(){
    console.log(this.formations)
  }

  hide_comp(){
    this.show_comp=!this.show_comp
  }

  hide_lang(){
    this.show_lang=!this.show_lang
  }

  addComp(){
    const comp_body  = {
      'name':'',
      'value':0
     
     }
     this.cv.comps.push(comp_body);
  }

  addLang(){
    const lang_body  = {
      'name':'',
      'value':0
     
     }
     this.cv.langs.push(lang_body);
  }

  addCI(){
    const CI_body  = {
      'name':''
        
     }
     this.cv.interests.push(CI_body);
  }

  hide_CI(){
    this.show_CI=!this.show_CI
  }

  visible: boolean = false;

    showDialog() {
        this.visible = true;
       
    }



    handleFileInput(event: any) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.cv.pers_info.image = e.target.result;
      };
      reader.readAsDataURL(file);
      this.file=file
    }

    sendPDF(){
  return
      if(this.helper.selectedcv){
        this.articleSerice.editCv(this.cv,this.file,this.helper.selectedcv.id).then((data: any) => {
          console.log(data)
          this.router.navigate(["/"])
          this.visible = false;
        });
      }

      else{
      console.log(this.cv.pers_info.image)
        this.articleSerice.addCV(this.cv,this.file).then((data: any) => {
          console.log(data)
          this.router.navigate(["/"])
          this.visible = false;
        });
      }
     
    }


    goTo(){
      this.router.navigate(["/signin"])
    }
  
    

    
 
}
