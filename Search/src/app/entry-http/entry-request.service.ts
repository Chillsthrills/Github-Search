import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Fetch data from github
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntryRequestService {

  private username = 'Chillsthrills'  //usename property for service
  private clientid = '51a929a3945a6baa5e6b';
  private clientsecret = 'a11c6fd34756871dfd4b7180444a9aa1c135bf11';

  constructor(private http:HttpClient) {  //inject Http Module
    // console.log("service is ready!");
    // this.username = 'Chillsthrills';
  }
  getProfileInfo(){          //Function to get data from github API
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" +  this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res));
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id= " +  this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res ));
  }
  changeName(username: string){
    this.username = username;
  }

}
