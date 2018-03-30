import { Pipe, PipeTransform } from '@angular/core';
import { Restaurant } from "./restaurant";
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(hotels: Restaurant[], args?: Cuisine[]): Restaurant[] {
    return hotels.filter(h=>{
      return null; 
    });
  }
}

interface Cuisine {
  name: string,
  label: string;
  selected: boolean
}
