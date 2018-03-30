import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RestaurantServiceService } from "../restaurant-service.service";
import { CartService } from "../cart-service.service";
import { Restaurant } from "../restaurant";

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {
  
  restaurant: Restaurant;
  items : any =[];
  cart : any =[];

  constructor(private route : ActivatedRoute, private service : RestaurantServiceService, private myCart : CartService, private next:Router) {
      let id = this.route.snapshot.paramMap.get("id");
      console.log(id);

      this.getRestaurant(parseInt(id));
      this.getMenu(parseInt(id));
   }

  getMenu(id: number): any {
    debugger;
    this.items = this.service.getMenuItems(id).map(i=>i.menu)[0];
  }

  getRestaurant(id: number) {
    this.restaurant = this.service.get(id);
  }

  addToCart(id, item) {
    console.log(item);
    item["qty"] = 1;
    this.cart.push(item);
  }

  removeFromCart(id, item){
    console.log(item);
    for (var i = 0; i < this.cart.length; ++i) {
      if(this.cart[i].name == item.name){
        this.cart.splice(i, 1);
      }
    }
  }
  goToBilling(){
    this.myCart.addItems(this.cart);
    this.next.navigate(["./billing"]);
  }

  ngOnInit() {
  }

}
