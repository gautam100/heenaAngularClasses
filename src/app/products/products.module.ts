import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './products.component';
import { SliderComponent } from './slider/slider.component';
import { TopDealsComponent } from './top-deals/top-deals.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductService } from './products.service';




@NgModule({
  declarations: [
    ProductlistComponent,
    SliderComponent,
    TopDealsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: [ProductService],
})
export class ProductsModule { }
