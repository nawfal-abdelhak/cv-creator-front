import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles :any 
  _page:number=0;
  cart :any=[];
  article  :any=[];
  constructor(private api:ApiService,private userService:UserServiceService) { }


  addCV(cv:any,file:any) {    
    return new Promise(async (resolve, reject) => {     
       const Cv = JSON.stringify(cv);
      const form = new FormData();
      const image = file
      console.log(Cv)
  
       form.append('image', image);
    
     
      form.append('cv', Cv);
      let headers={
        Authorization: this.userService.user.token,
      Accept: "application/json"
      }
      
      this.api.post("client/add/"+this.userService.user.client.id,form, { headers})
        .then((data: any) => {
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }

  editCv(cv:any,file:any,id:number) {    
    return new Promise(async (resolve, reject) => {     
       const Cv = JSON.stringify(cv);
      const form = new FormData();
      const image = file
      console.log(Cv)
  
       form.append('image', image);
    
     
      form.append('cv', Cv);
      let headers={
        Authorization: this.userService.user.token,
      Accept: "application/json"
      }
      
      this.api.post("client/editCv/"+this.userService.user.client.id+'/'+id,form, { headers})
        .then((data: any) => {
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }

  updateArticle(article:any,id:number){
  
  article.id=id  
    return new Promise(async (resolve, reject) => {
    
      let headers={
        Authorization: this.userService.user.token,
      Accept: "application/json"
      }
      this.api.put("product/updateProduct",article, { headers })
        .then((data: any) => {
         
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }

  getAllArtilces(){

    return new Promise(async (resolve, reject) => {
     
      let headers={
        Authorization: this.userService.user.token,
      Accept: "application/json"
      }
      this.api.get("product/all", { headers })
        .then((data: any) => {
       
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }

  getSearchedArticles(searchKey:string){
    return new Promise(async (resolve, reject) => {
      let headers={
        Authorization: this.userService.user.token,
      Accept: "application/json"
      }
      this.api.get("product/search/"+searchKey, { headers })
        .then((data: any) => {
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }
  


  getArtilces() {    
    return new Promise(async (resolve, reject) => {
      let headers={
        Authorization: this.userService.user.token,
      Accept: "application/json"
      }
      this.api.get("product/all?size=4"+'&page='+this._page, { headers })
        .then((data: any) => {
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }


  getArticle(articleId:any){
    return new Promise(async (resolve, reject) => {
      let headers={
        Authorization: this.userService.user.token,
      Accept: "application/json"
      }
      this.api.get("product/"+articleId, { headers})
        .then((data: any) => {
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }

  deleteArticle(articleId:number){
    return new Promise(async (resolve, reject) => {
      let headers={
        Authorization: this.userService.user.token,
      Accept: "application/json"
      }
      this.api.delete("product/"+articleId, { headers})
        .then((data: any) => {
          resolve(data);
        })
        .catch(err => {
        
        });
    });
  }
}
