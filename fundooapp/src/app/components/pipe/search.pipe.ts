import { Pipe, PipeTransform,Input } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class SearchPipe implements PipeTransform {
  filteredNotes:any;
    transform(items: any[], text: string): any[] {
    if(!items) return [];
    if(!text) return items;
text = text.toLowerCase();
return items.filter( data => {
      return data.title.toLowerCase().includes(text);
     
    });
  console.log(this.filteredNotes);
  }
  
  }