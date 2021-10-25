import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToWishlist, RemoveFromWishlist } from '../store/wishlist/wishlist.action';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  @Input() starProduct: any;
  @Output() wishlistItems = new EventEmitter<object>();

  itemsInWishlist: Array<any> = [];
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    
    this.store.select('wishlist').subscribe(items =>
      this.itemsInWishlist = items);

  }

  ngOnChanges() {
    this.sendItemsToParent(this.itemsInWishlist);
    if (this.starProduct != undefined && !this.itemsInWishlist.includes(this.starProduct)) {
      this.store.dispatch(new AddToWishlist(this.starProduct));
    }
  }


  sendItemsToParent(wishlistItems: any) {
    
    this.wishlistItems.emit(wishlistItems);
    console.log("de ele bb3tha", wishlistItems);
    console.log(wishlistItems)
  }

  removeFromWishlist(productItem: any) {
    this.store.dispatch(new RemoveFromWishlist(productItem));
    this.sendItemsToParent(this.itemsInWishlist);
  }
}




