import {Pipe, PipeTransform} from "@angular/core";
import {Iproduct} from "./products.interface";

@Pipe({
    name:'ProductFilter'
})

export class ProductFilterPipe implements PipeTransform{
    transform(value:Iproduct[],filterBy:string):Iproduct[]{
        filterBy = filterBy?filterBy.toLocaleLowerCase():null;
        return filterBy? value.filter((p:Iproduct)=>p.productName.toLocaleLowerCase().indexOf(filterBy)!== -1):value;
    }
}