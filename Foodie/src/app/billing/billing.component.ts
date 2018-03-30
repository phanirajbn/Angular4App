import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart-service.service';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  billAmount:number =0
  cart: any;
  constructor(private route : ActivatedRoute, private myCart : CartService, private nav: Router) { }

  ngOnInit() {
  	debugger;
  	if(this.myCart.cartComponent.length == 0)
  		this.cart = JSON.parse(localStorage.getItem('Cart'));
  	else{
  		this.cart = this.myCart.cartComponent;
  		localStorage.setItem("Cart",JSON.stringify(this.cart));
  	}
  	for (var i = 0; i < this.cart.length; ++i) {
  		this.billAmount += this.cart[i].price
  	}
  }

  completeProcess(){
  	localStorage.removeItem("Cart");
  	alert("Payment is made");
  	this.nav.navigate(["customer"]);
  }
}
