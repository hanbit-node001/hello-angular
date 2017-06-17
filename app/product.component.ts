import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from "./service/product";

interface PriceHolder {
    name: string;
    price: number;
}

@Component({
    selector: 'product',
    template: `{{product.id}}:{{product.name}}({{getPrice()}})`
})
export class ProductComponent {

    @Input() product: Product;
    @Output() price: EventEmitter<PriceHolder> = new EventEmitter();

    constructor() {
        setInterval(() => {
            this.product.price
                = parseInt(String(Math.random() * 10)) * 1000;
            this.price.emit({
                name: this.product.name,
                price: this.product.price
            });
        }, 3000);
    }

    getPrice(): string {
        return this.product.price.toLocaleString() + "원";
    }
}
