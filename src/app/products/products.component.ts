import {Component} from "@angular/core";
import {Iproduct} from "./products.interface";
import { ProductService } from './products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'product-list',
    templateUrl: './products.component.html'
})

export class ProductlistComponent{
    pageTitle:string = "Product List";
    listFilter:string = '';
    products:Iproduct[];
    discount:number = 20;
    userClickMsg:String;
    constructor(private _prodObj:ProductService,private _activatedRoute:ActivatedRoute, private _navi:Router){
        //this.products = _prodObj.getData();
    }
    ngOnInit():void{
        this._prodObj.getData().subscribe(p=>this.products = p);
    }
    onOfferPriceClicked(message:String):void{
        this.userClickMsg = message;
    }
}