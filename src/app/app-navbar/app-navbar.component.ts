import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  addProductToCartCounter: any;

  constructor(private addToCartService: CartServiceService) { }

  ngOnInit(): void {
    this.addProductToCartCounter = this.addToCartService.currentItemsInCart;

  }

}
