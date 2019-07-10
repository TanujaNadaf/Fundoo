import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../services/userService/user-service.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
public notes=[];
  constructor(private userService:UserServiceService) { }

  ngOnInit() {
  this.getArchivedNotes();
  }
 getArchivedNotes(){
   
   this.userService.getAllArchivedNotes().subscribe(response => {
    console.log("response in get all archived notes",response);
    this.notes= response['data']['data'];
  }, error => {
    console.log("Error in getting archived notes", error);
  })
 }
}
