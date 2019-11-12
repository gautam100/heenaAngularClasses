import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './products.component';


const productsRoutes: Routes = [
    {
        path: '',
        component: ProductlistComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
