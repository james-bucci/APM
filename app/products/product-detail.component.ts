import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IProduct } from './product';

@Component({
    templateUrl : 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    product : IProduct;
    pageTitle : string = 'Product detail'

    constructor(
        private _route : ActivatedRoute,
        private _router : Router
    ) {};

    ngOnInit() : void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    };

    onBack() : void {
        this._router.navigate(['/products']);
    };
}