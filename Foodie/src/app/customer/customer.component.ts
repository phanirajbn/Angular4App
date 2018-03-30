import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customerName : string;
  public customerAddress : string;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  onSave(){
    var details = {'name': this.customerName, 'address':this.customerAddress};
    localStorage.setItem("details", JSON.stringify(details));
    alert("Info Saved to Storage");
    this.router.navigate(['/restaurants']); 
  }
}
