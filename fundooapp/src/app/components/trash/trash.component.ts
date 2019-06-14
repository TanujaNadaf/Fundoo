import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../services/userService/user-service.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  
  cards;
  constructor(private userService:UserServiceService) { }

  ngOnInit() {
    this.allDeletedNotes();
  }
  allDeletedNotes(){
    this.userService.getAllDeletedNotes().subscribe(data => {
      console.log("Response to getting all trash notes", data['data']['data']);
      this.cards= data['data']['data'];
      console.log(this.cards);
    }, error => {
      console.log("Error in getting all trashed Notes", error);
    })
    
  }
  }

