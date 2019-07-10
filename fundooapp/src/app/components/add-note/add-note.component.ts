import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AddNotes } from '../../models/addNotesModel';
import { UserServiceService } from '../../services/userService/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  public cards:[];
  public title:string;
  public description:string;
  @Output() addNoteEvent = new EventEmitter<any>()

  constructor(private userService: UserServiceService) { }

  ngOnInit() {

  }
  public show = false;
  addNotes() {

    const note = {
      title : this.title,
      description : this.description
    }



    this.userService.addNotes(note).subscribe(data => {

      this.addNoteEvent.emit();

    }, error => {


    })
    
  }
}
