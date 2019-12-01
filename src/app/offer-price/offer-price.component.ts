import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-offer-price',
  templateUrl: './offer-price.component.html',
  styleUrls: ['./offer-price.component.css']
})
export class OfferPriceComponent implements OnInit {

  @Input() MRP:number;
  @Input() prodDiscount:number;
  offerPrice:number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges():void{
    this.offerPrice = this.MRP - (this.MRP *(this.prodDiscount/100));
  }

}
