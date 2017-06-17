import {Injectable} from "@angular/core";
import {Product} from "./product";

@Injectable()
export class ProductService {

    products: Array<Product>;

    constructor() {
        this.products = new Array<Product>();
        this.products.push(new Product(1, 'Pencil', 1000));
        this.products.push(new Product(2, 'Ballpen', 2000));
    }

    getProducts(): Product[] {
        return this.products;
    }

}