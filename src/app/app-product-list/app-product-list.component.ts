import { Component, OnInit, ViewChild, Input, Output  } from '@angular/core';
import { Router } from '@angular/router';
import { AppCardComponent } from '../app-card/app-card.component';
import { ProductsDataService } from '../products-data.service';
import { Store } from '@ngrx/store';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { AddToWishlist, RemoveFromWishlist } from '../store/wishlist/wishlist.action';


@Component({
  selector: 'app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./app-product-list.component.css']
})
export class AppProductListComponent implements OnInit {

  productsList: any;
  itemsInWishlist: Array<any> = [];

  @ViewChild(AppCardComponent) productCardComponent: any;

  constructor(private router: Router, private productsData: ProductsDataService, private store: Store<any>) { }

  ngOnInit(): void {
    this.productsData.getProductsData().subscribe(
      (response) => {
        this.productsList = response;
      },
      (error) => {
        console.log(error);
      }
    );

    this.store.select('wishlist').subscribe(items =>
      this.itemsInWishlist = items);
  }

  removeFromWishlist(productItem: any) {
    this.store.dispatch(new RemoveFromWishlist(productItem));
  }

  redirctToRegister() {
    this.router.navigate(['/register']);
  }

  redirctToLogin() {
    this.router.navigate(['/login']);
  }

}






  







