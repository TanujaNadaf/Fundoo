import { Component, OnInit,} from '@angular/core';
import {UserServiceService} from '../../services/userService/user-service.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { DataService } from "../../services/data.service";
import { Params, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  cards;
  public label:Object
  public labelName:string;
 
  constructor(private userService:UserServiceService, public data: DataService,  private router: ActivatedRoute,) { }

  ngOnInit() {
    this.data.currentData.subscribe(result => {
     
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
