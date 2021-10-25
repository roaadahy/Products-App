import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductListComponent } from './app-product-list/app-product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { DeactivateGuard } from './deactivate.guard';


const routes: Routes = [{
  path : "", component : AppProductListComponent
},
{
  path : "register", component : RegisterComponent,
    canDeactivate: [DeactivateGuard]
},
{
  path : "login", component : LoginComponent
},
{
  path: "product/:id", component: ProductDetailsComponent
},
{
  path: "products", component: AppProductListComponent
},
{
  path: "product/:id", component: ProductDetailsComponent,

},
{
  path: "cart", component: CartComponent,
  canActivate: [AuthGuard]
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


