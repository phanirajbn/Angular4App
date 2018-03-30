import { Injectable } from '@angular/core';
import { Restaurant } from "./restaurant";
@Injectable()
export class RestaurantServiceService {
  public data : Restaurant[] = [];
  public menuItems : any[];
  constructor() { 
    this.data.push(new Restaurant({'id':111, 'name':'Chutney Chang','cuisine':'Chinese', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({'id':112, 'name':'Shanti Sagar','cuisine':'Indian', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({'id':113, 'name':'Little Italy','cuisine':'Italian', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({'id':114, 'name':'Chow Min Kow','cuisine':'Thai', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({'id':115, 'name':'Chutney Chang','cuisine':'Chinese', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({'id':116, 'name': 'Chutney Chang', 'cuisine':'Thai', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({'id':117, 'name':'Chutney Chang','cuisine':'Indian', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({'id':118, 'name':'Chutney Chang','cuisine':'Chinese', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({'id':119, 'name':'Chutney Chang','cuisine':'Chinese', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({'id':120, 'name':'Chutney Chang','cuisine':'Chinese', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({ 'id':111, 'name': 'Chutney Chang', 'cuisine':'Thai', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({ 'id':122, 'name': 'Chutney Chang', 'cuisine':'Indian', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({'id':123, 'name':'Chutney Chang','cuisine':'Chinese', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({ 'id':124, 'name': 'Chutney Chang', 'cuisine':'Indian', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({ 'id':125, 'name': 'Chutney Chang', 'cuisine':'Indian', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({'id':126, 'name':'Chutney Chang','cuisine':'Chinese', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({ 'id':127, 'name': 'Chutney Chang', 'cuisine':'Indian', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))
    this.data.push(new Restaurant({ 'id':128, 'name': 'Chutney Chang', 'cuisine':'Thai', 'rating' :3.9, 'address' :' Musuem Road, Bangalore', 'picture':'chutneychang.png'}))

    //create dummy menu items....
    this.menuItems = [
      {
        "id": 111,
        "menu": [
          { "name": "1_item 1", "price": 458 },
          { "name": "1_item 2 ", "price": 892 },
          { "name": "1_item 3", "price": 120 },
          { "name": "1_item 4", "price": 800 },
          { "name": "1_item 5", "price": 300 }
        ]
      },
      {
        "id": 112,
        "menu": [
          { "name": "2_item 1", "price": 788 },
          { "name": "2_item 2 ", "price": 532 },
          { "name": "2_item 3", "price": 120 },
          { "name": "2_item 4", "price": 800 }
        ]
      },
      {
        "id": 113,
        "menu": [
          { "name": "3_item 1", "price": 788 },
          { "name": "3_item 2 ", "price": 532 },
          { "name": "3_item 3", "price": 120 },
          { "name": "3_item 4", "price": 800 }
        ]
      },
      {
        "id": 114,
        "menu": [
          { "name": "4_item 1", "price": 788 },
          { "name": "4_item 2 ", "price": 532 },
          { "name": "4item 3", "price": 120 },
          { "name": "4item 4", "price": 800 }
        ] 
      },
    ];

  }
  getAll(){
    return this.data;
  }

  get(id:number){
    return this.data.filter(r=>r.id == id)[0];
  }

  getMenuItems(id:number){
    return this.menuItems.filter(m=>m.id == id);
    }
}
