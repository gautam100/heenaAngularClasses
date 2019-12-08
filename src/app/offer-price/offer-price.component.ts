import { Output } from "@angular/core";
import { Component, OnInit, Input, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-offer-price',
  templateUrl: './offer-price.component.html',
  styleUrls: ['./offer-price.component.css']
})
export class OfferPriceComponent implements OnInit {

  @Input() MRP:number;
  @Input() prodDiscount:number;
  offerPrice:number;

  @Output() offerPriceClicked:EventEmitter<String> = new EventEmitter<String>();
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges():void{
    this.offerPrice = this.MRP - (this.MRP *(this.prodDiscount/100));
  }

  userClick():void{
    this.offerPriceClicked.emit(`clicked on ${this.MRP}`);
  }

}
