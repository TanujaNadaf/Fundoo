import { Component, OnInit,} from '@angular/core';
import {UserServiceService} from '../../services/userService/user-service.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  cards;
  
  constructor(private userService:UserServiceService, public data: DataService) { }

  ngOnInit() {
    this.data.currentData.subscribe(card => {
      this.allNotes();

    });
    this.allNotes();
  }
  
  allNotes() {
      this.userService.getAllUserNotes().subscribe(data => {
      console.log("Response to get all notes", data['data']['data']);
      this.cards= data['data']['data'];
      console.log(this.cards);
    }, error => {
      console.log("Error in getting all Notes", error);
    })
    
  }
  eventOccur(){
    this.allNotes();
    
  }
}
