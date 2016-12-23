import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';

@Component({
    selector : 'pm-productlist',
    templateUrl : 'app/products/product-list.component.html',
})
export class ProductListComponent implements OnInit {
    
    imageWidth : number = 20;
    userFilter : string;
    errorMessage : string;

    @Input() showImage : boolean = true;

    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    products: IProduct[];
    constructor(private _productService : ProductService) {};

    ngOnInit() : void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any> error
            );
    };

    onStarRatingClicked(message : string ) : void {
        console.log('container received message from stars being clicked : ' + message);
        this.ratingClicked.emit(message);
    };
}