import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from "./service/product.service";
import {Product} from "./service/product";

@Component({
    selector: 'detail',
    template: `<h1>Detail Component</h1>
               Detail ID: {{detailId}}
               <div *ngFor="let product of products">
                   {{product.id}}. {{product.name}} ({{product.price}}원)
               </div>
               <router-outlet></router-outlet>
               <a [routerLink]="['./']">Desc</a>
               <a [routerLink]="['./review']">Review</a>`,
    providers: [ProductService]
})
export class DetailComponent {
    detailId: string;
    products: Array<Product>;

    constructor(route: ActivatedRoute,
        private productService: ProductService) {
        this.detailId = route.snapshot.params['id'];

        this.products = productService.getProducts();
    }
}
