import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  cartComponent =[];	
  constructor() {
  }

  addItems(items){
  	this.cartComponent = items;
}

  getAll():any{
  	return this.cartComponent;
  }
}
