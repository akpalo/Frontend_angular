import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'haku'
})
export class HakuPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return it.Title.toLowerCase().includes(searchText);
    });
  }
}
