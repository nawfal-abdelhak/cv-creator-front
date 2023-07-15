import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user:any=null
  shownav:boolean=true

  constructor(private api :ApiService) { }

  addUser(user:any) {    
    return new Promise(async (resolve, reject) => {
    
      let headers = this.api.getHeaders();
      this.api.post("auth/signUp",user, { headers })
        .then((data: any) => {
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }

  signIn(user:any) {    
    return new Promise(async (resolve, reject) => {
     
      let headers = this.api.getHeaders();
      this.api.post("auth/LogIn",user, { headers })
        .then((data: any) => {
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }

  changePassword(user1:any){
    return new Promise(async (resolve, reject) => {
     
      let headers={
        Authorization: this.user.token,
      Accept: "application/json"
      }

      const user={
        "id":this.user.client.id,
        "oldPassword":user1.old_password,
        "newPassword":user1.new_password
      }
      this.api.post("client/changePassword",user, { headers })
        .then((data: any) => {
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }


  getCvs(){
    return new Promise(async (resolve, reject) => {
      let headers={
        Authorization: this.user.token,
      Accept: "application/json"
      }
      
      this.api.get("client/getCvs/"+this.user.client.id, { headers })
        .then((data: any) => {
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }


  getUser(){
    return new Promise(async (resolve, reject) => {
      let headers={
        Authorization: this.user.token,
      Accept: "application/json"
      }
      
      this.api.get("client/getUser/"+this.user.client.id, { headers })
        .then((data: any) => {
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }

  subscribe(){
    return new Promise(async (resolve, reject) => {
      let headers={
        Authorization: this.user.token,
      Accept: "application/json"
      }
      
      this.api.get("client/subscribe/"+this.user.client.id, { headers })
        .then((data: any) => {
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }

  getUsers(){
    return new Promise(async (resolve, reject) => {
      let headers={
        Authorization: this.user.token,
      Accept: "application/json"
      }
      
      this.api.get("client/getUsers", { headers })
        .then((data: any) => {
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }

  getUsersWithCVCount(){
    return new Promise(async (resolve, reject) => {
      let headers={
        Authorization: this.user.token,
      Accept: "application/json"
      }
      
      this.api.get("client/getUsersWithCVCount", { headers })
        .then((data: any) => {
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }

  deleteUser(id:number){
    return new Promise(async (resolve, reject) => {
      let headers={
        Authorization: this.user.token,
      Accept: "application/json"
      }
      
      this.api.get("client/deleteUser/"+id, { headers })
        .then((data: any) => {
          resolve(data);
        })
        .catch(err => {
          
        });
    });
  }

}
