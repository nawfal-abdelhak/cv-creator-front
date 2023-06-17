import { Component, OnInit,ElementRef, ViewChild, HostListener, HostBinding, Renderer2  } from '@angular/core';


@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements OnInit {

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
    'desc':'',
   }]

  currentIndex:number=0;

  cvSections: any[] = [{ pers_info: { name: '',
  'last_name':'',
  'mail':'',
  'profile_title':'',
  'city':'',
  'desc':'',
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
    'desc':'',
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
    'desc':'',
   }],
   CIs:[{
    'name':'',
   }]
  },
];// Add an initial section
 

  constructor(private elementRef: ElementRef,private renderer: Renderer2) {
    
  }



  ngOnInit() {
    this.renderer.addClass(document.body, 'disable-scroll');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'disable-scroll');
  }

 

  // @HostListener('window:scroll', [])
  // onScroll() {
  //   console.log("nice")
    

  //   // if (scrollTop + containerHeight >= scrollHeight) {
  //   //   this.addNewCVSection();
  //   // }
  // }
 
 

 
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
    console.log(this.cvSections)
  }

  
  onElementScroll($event:any){
    // const cvContainerHeight = this.elementRef.nativeElement.querySelector('#right-element').clientHeight;
    // const cvContainerTop = this.elementRef.nativeElement.querySelector('#right-element').scrollTop;

    // console.log('CV Container Height:', cvContainerHeight);
    // console.log('CV Container top:', cvContainerTop);
    // if(cvContainerTop==1){
    //   this.cvSections.push({ pers_info: { name: '',
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
      'desc':'',
     }
     this.cvSections[this.currentIndex].formations.push(formation_body);
     

  }

  addExperience(){
    const experience_body  = {
      'name':'',
      'hire':'',
      'city':'',
      'start_date':'',
      'end_date':'',
      'desc':'',
     }
     this.cvSections[this.currentIndex].experiences.push(experience_body);

     if(this.cvSections[this.currentIndex].experiences.length==2){
   
      this.cvSections.push({ pers_info: { name: '',
      'last_name':'',
      'mail':'',
      'profile_title':'',
      'city':'',
      'desc':'',
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
        'desc':'',
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
        'desc':'',
       }],
       CIs:[{
        'name':'',
       }]
      });
      this.currentIndex=1;
    
   }
  
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
     this.cvSections[this.currentIndex].comps.push(comp_body);
  }

  addLang(){
    const lang_body  = {
      'name':'',
      'value':0
     
     }
     this.cvSections[this.currentIndex].langs.push(lang_body);
  }

  addCI(){
    const CI_body  = {
      'name':''
        
     }
     this.cvSections[this.currentIndex].CIs.push(CI_body);
  }

  hide_CI(){
    this.show_CI=!this.show_CI
  }
}
