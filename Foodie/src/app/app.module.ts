import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from "./customer/customer.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms';
import { RestaurantServiceService } from "./restaurant-service.service";
import { CartService } from "./cart-service.service";
import { FilterPipe } from './filter.pipe';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { BillingComponent } from './billing/billing.component';

const appRoutes = [
  {
    path: 'customer', component: CustomerComponent,
  },
  {
    path: 'restaurants', component: RestaurantComponent,
  },
  {
    path: 'menu/:id', component: RestaurantMenuComponent,
  },
  {
    path: 'billing', component: BillingComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    RestaurantComponent,
    FilterPipe,
    RestaurantMenuComponent,
    BillingComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing :true}),
    BrowserModule,
    FormsModule,
  ],
  providers: [RestaurantServiceService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
