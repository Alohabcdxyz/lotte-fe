import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: any): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchText) ||
        item.infor.toLowerCase().includes(searchText)
      );
    });
  }
}
