"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var products_service_1 = require("./products.service");
var ProductListComponent = (function () {
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.imageWidth = 20;
        this.showImage = true;
        this.ratingClicked = new core_1.EventEmitter();
    }
    ;
    ProductListComponent.prototype.ngOnInit = function () {
        this.products = this._productService.getProducts();
    };
    ;
    ProductListComponent.prototype.onStarRatingClicked = function (message) {
        console.log('container received message from stars being clicked : ' + message);
        this.ratingClicked.emit(message);
    };
    ;
    return ProductListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProductListComponent.prototype, "showImage", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProductListComponent.prototype, "ratingClicked", void 0);
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'pm-productlist',
        templateUrl: 'app/products/product-list.component.html',
    }),
    __metadata("design:paramtypes", [products_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map