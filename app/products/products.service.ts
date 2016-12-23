import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    
    private _productServiceUrl = 'api/products/products.json';

    constructor(private _http : Http) {};

    getProducts() : Observable<IProduct[]> {
        return this._http
            .get(this._productServiceUrl)
            .map((response : Response) => <IProduct[]> response.json())
            .do(data => console.log('ALL:' + JSON.stringify(data)))
            .catch(this.handleError);
    };

    handleError(error : Response) {
        console.error('This just happened!' + error);
        return Observable.throw(error.json().error || 'Server error');
    };  
}