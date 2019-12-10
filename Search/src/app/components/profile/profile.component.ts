import { Component, OnInit } from '@angular/core';
import { EntryRequestService } from '../../entry-http/entry-request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   profile:any;
   repos:any;
   profil:string;


  constructor(private entryRequestService: EntryRequestService) {

}

findProfile(){
  this.entryRequestService.changeName(this.profil);
  this.entryRequestService.getProfileInfo().subscribe(profile => {
    this.profile = profile;
  });
  this.entryRequestService.getProfileRepos().subscribe(repos => {
    this.repos = repos;
  });
}

  ngOnInit() {
   
  }

}
