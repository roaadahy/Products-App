import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from '../cart-service.service'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  productsInCart: Array<any> = [];
  quantityNumber: Array<number> = [];
  addProductToCartCounter: any;

  constructor(private addToCartService: CartServiceService) { }

  ngOnInit(): void {
    this.productsInCart = this.addToCartService.getProductsInCart();
    this.quantityNumber = this.addToCartService.getQuantity();
    this.addProductToCartCounter = this.addToCartService.currentItemsInCart;
  }

  removeItem(item: any) {
    this.addToCartService.setQuantity(item.id - 1, 0, "reset");
    this.addToCartService.removeFromCartFun(item);
    this.productsInCart = this.addToCartService.getProductsInCart();
    this.addToCartService.updateItemsCounter(this.productsInCart.length);
  }

  minus(itemQuantity: number, productId: number) {
    this.quantityNumber[productId] = itemQuantity - 1;
    this.addToCartService.setQuantity(productId, this.quantityNumber[productId], "minus");
  }

  plus(itemQuantity: number, productId: number) {
    this.quantityNumber[productId] = itemQuantity + 1;
    this.addToCartService.setQuantity(productId, this.quantityNumber[productId],
      "plus");
  }

  calculateTotal() {
    return this.addToCartService.totalPrice;
  }

}


 