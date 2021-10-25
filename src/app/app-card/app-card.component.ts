import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Store } from '@ngrx/store';
import { AddToWishlist } from '../store/wishlist/wishlist.action';



@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {
  
  @Input() productInput: any;
  @Input() starBtnIndex: any;

  itemsInCartCounter: number = 0;
  itemsInWishlist: Array<any> = [];
  checkBtn: Array<boolean> = [];

  constructor(private addToCart: CartServiceService, private store: Store<any>) { }

  ngOnInit(): void {
    this.addToCart.currentItemsInCart.subscribe(
      (value) => (this.itemsInCartCounter = value)
    );
    this.checkBtn = this.addToCart.isClicked;
    this.store.select('wishlist').subscribe(items =>
      this.itemsInWishlist = items);
  }

  addToWishlist(productItem: any) {
    this.store.dispatch(new AddToWishlist(productItem));
  }

  updateCartCounter() {
    this.addToCart.updateItemsCounter(this.itemsInCartCounter + 1);
    this.addToCart.addToCartFun(this.productInput);
    alert("Item is added successfully.");
    this.checkBtn[this.productInput.id - 1] = true;
  }
}
