import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppProductListComponent } from './app-product-list/app-product-list.component';
import { AppCardComponent } from './app-card/app-card.component';
import { EgyCurrencyPipe } from './egy-currency.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import{StoreModule}from'@ngrx/store';
import { wishlistReducer } from './store/wishlist/wishlist.reducer';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LoaderComponent } from './loader/loader.component';
import { LoadInterceptor } from './load.interceptor';
import { AuthenticationModule } from './authentication/authentication.module';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppProductListComponent,
    AppCardComponent,
    EgyCurrencyPipe,
    ProductDetailsComponent,
    CartComponent,
    WishlistComponent,
    LoaderComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({wishlist: wishlistReducer}),
    AuthenticationModule,


  ],
  
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadInterceptor,
      multi: true,
    },
  ],
})
export class AppModule { }
