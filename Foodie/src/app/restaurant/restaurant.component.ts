import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from "../restaurant-service.service";
import { Restaurant } from "../restaurant";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  public customerName : string;
  public customerAddress: string;
  public data : Restaurant[];
  public selecteddata : Restaurant[];
  public allCuisines = [
    { name: "Indian", label: "Indian", selected: true },
    { name: "Chinese", label: "Chinese", selected: false },
    { name: "Italian", label: "Italian", selected: true },
    { name: "Thai", label: "Thai", selected: false },
    { name: "Veg", label: "Veg", selected: false }
  ];

  public selected : boolean;
  constructor(private service :RestaurantServiceService) { }

  ngOnInit() {
    let details = JSON.parse(localStorage.getItem('details'));
    this.customerName = details.name;
    this.customerAddress = details.address;
    this.getAll();
  }

  getAll(){
    this.data = this.service.getAll();
  }

  selectHotels(cuisine: Cuisine): void {
    cuisine.selected = !cuisine.selected;
    let names: string[] = this.allCuisines.filter(c => c.selected).map(c => c.name);
    console.log(names);
    let result = [];
    this.data.forEach(r => {
      names.forEach(n => {
        if (n === r.cuisine) {
          result.push(r);
        }
      });
    });
    this.selecteddata = result;
  }
}
interface Cuisine {
  name: string,
  label: string;
  selected: boolean
}