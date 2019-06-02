import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../services/userService/user-service.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  cards;

  constructor(private userService:UserServiceService) { }

  ngOnInit() {
    this.allNotes();
  }
  allNotes() {
    
    this.userService.getAllUserNotes().subscribe(data => {
      console.log("Response to Display", data['data']['data']);
      this.cards= data['data']['data'];
      console.log(this.cards);
    }, error => {
      console.log("Error in Displaying Notes", error);
    })
    
  }
}
