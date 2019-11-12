import {Injectable} from "@angular/core";
import {Iproduct} from "./products.interface";

import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs';

@Injectable()

export class ProductService{
    /*getData():Iproduct[]{
        return[
            {
                prodId: 1,
                prodName: 'Samsung- XYZ',
                prodCode: 'SG-001',
                prodPrice: 15000,
                prodImg: ''
            },
            {
                prodId: 2,
                prodName: 'Motorola- XYZ',
                prodCode: 'ML-001',
                prodPrice: 22000,
                prodImg: ''
            },
            {
                prodId: 3,
                prodName: 'Xiomi- XYZ',
                prodCode: 'XI-001',
                prodPrice: 12000,
                prodImg: ''
            }
        ];
    }//getData()
    */
   private _productUrl = "https://api.myjson.com/bins/fe2mg";

   constructor(private _http:HttpClient){
   }

   getData():Observable<Iproduct[]>{
    return this._http.get<Iproduct[]>(this._productUrl);
   };
}

//https://api.myjson.com/bins/fe2mg