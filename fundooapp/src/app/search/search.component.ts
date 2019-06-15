import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceService} from '../services/userService/user-service.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  cards=[];
  
@Input() searchText;

/*search(string){
  var searchedCards=this.cards.filter(function(data){
    // console.log(data);
   return data.title==string;
  })
console.log(searchedCards);

}*/
  constructor(private router:Router,private userService:UserServiceService) { 
  
  }

  ngOnInit() {
  this.getAllNotes();
  }
  getAllNotes() {
    
    this.userService.getAllUserNotes().subscribe(data => {
    console.log("Response to getall notes in search component", data['data']['data']);
    this.cards= data['data']['data'];
    console.log(this.cards);
    console.log(this.cards.length);
  }, error => {
    console.log("Error in getting the notes in dashboard component", error);
  });
  
}

}
