import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './products.component';
import { SliderComponent } from './slider/slider.component';
import { TopDealsComponent } from './top-deals/top-deals.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductService } from './products.service';
import { FormsModule } from '@angular/forms';
import {ProductFilterPipe } from './productDataPipe'
import { OfferPriceComponent } from '../offer-price/offer-price.component';


@NgModule({
  declarations: [
    ProductlistComponent,
    SliderComponent,
    TopDealsComponent,
    ProductFilterPipe,
    OfferPriceComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
})
export class ProductsModule { }
