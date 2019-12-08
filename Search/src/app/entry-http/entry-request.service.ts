import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http'; //Fetch data from github
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EntryRequestService {

  private username:string;  //usename property for service
  // private clientid = '';
  // private clientsecret = '';

  constructor(private http:Http) {  //inject Http Module
    console.log("service is ready!");
    this.username = 'Chillsthrills';
  }
  
}
