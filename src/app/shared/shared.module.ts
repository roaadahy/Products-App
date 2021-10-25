import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from '../app-navbar/app-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [AppNavbarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [AppNavbarComponent, FormsModule, ReactiveFormsModule, CommonModule],
})
export class SharedModule { }
