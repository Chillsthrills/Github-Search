import { Component, OnInit } from '@angular/core';
import { EntryRequestService } from '../../entry-http/entry-request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   profile:any[];

   
  constructor(private entryRequestService: EntryRequestService) {
  this.entryRequestService.getProfileInfo().subscribe(profile => {
  console.log(profile);
  this.profile = profile;
});
}

  ngOnInit() {
  }

}
