import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = environment.api;
  
  constructor(
    private http: HttpClient,
   

  ) { }

  getApiUrl() {
    return this.url;
  }

  getHeaders() {
    return new HttpHeaders({
      Accept: "application/json"
    });
  }

  getHeadersData() {
    return new HttpHeaders({
      Accept: "application/json",
      "content-type": "multipart/form-data" ,
      
    });
  }

  // getHeadersWithAuthorization() {
  //   return new HttpHeaders({
  //     Authorization: this.userService.user.accessToken,
  //     Accept: "application/json"
  //   });
  // }

  get(endpoint: string, reqOpts?: any) {
    return this.http.get(this.url + '/' + endpoint, reqOpts).toPromise();
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts).toPromise();
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts).toPromise();
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts).toPromise();
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts).toPromise();
  }
}
