import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from '../products-data.service';
import { CartServiceService } from '../cart-service.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  receicevedData: any;
  itemsCounter: number = 0;
  checkBtn: Array<boolean> = [];

  constructor(private activeRoute: ActivatedRoute, private productData: ProductsDataService, private addToCart: CartServiceService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(param =>
      this.productData.getProductsDetails(param.id).subscribe(
        (response) => {
          this.receicevedData = response;
        },
        (error) => {
          console.log(error);
        }
      )
    );

    this.addToCart.currentItemsInCart.subscribe(
      (value) => (this.itemsCounter = value)
    );
    this.checkBtn = this.addToCart.isClicked;

  }

  updateCartCounter() {
    this.addToCart.updateItemsCounter(this.itemsCounter + 1);
    this.addToCart.addToCartFun(this.receicevedData);
    alert("Item is added to cart successfully.");
    this.checkBtn[this.receicevedData.id - 1] = true;
  }
}