import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchlabel'
})
export class SearchlabelPipe implements PipeTransform {
  
  transform(items: any[], text: string): any[] {
  if(!items) return [];
  if(!text) return items;
text = text.toLowerCase();
return items.filter( details=> {
    return details.label.toLowerCase().includes(text);
   
  });

}
 
}
