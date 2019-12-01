import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ProductlistComponent } from './products/products.component';
//import { ProductService } from './products/products.service';

import {HttpClientModule} from "@angular/common/http";
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { OfferPriceComponent } from './offer-price/offer-price.component';

@NgModule({
  declarations: [
    AppComponent, IndexComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
