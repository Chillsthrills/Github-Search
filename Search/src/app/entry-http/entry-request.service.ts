import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; //Fetch data from github
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EntryRequestService {

  private username:string;  //usename property for service
  private clientid = '51a929a3945a6baa5e6b';
  private clientsecret = 'a11c6fd34756871dfd4b7180444a9aa1c135bf11';

  constructor(private http:Http) {  //inject Http Module
    console.log("service is ready!");
    this.username = 'Chillsthrills';
  }
  getProfileInfo(){          //Function to get data from github API
    return this.http.get("https://api.github.com/users?Chillsthrills" + this.username + "?client_id=" +  this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users?Chillsthrills" + this.username + "/repos?client_id=" +  this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }
}
