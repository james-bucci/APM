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
var products_service_1 = require("./products/products.service");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Product Management';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "  \n    <div class=\"main-section\">\n        <h1 class=\"app-title\">{{pageTitle}}</h1>\n        <div class=\"menu-div\" id=\"menuBar\">\n            <a class='menu-item' [routerLink]=\"['/welcome']\">HOME</a>\n            <a class='menu-item' [routerLink]=\"['/products']\">PRODUCT LIST</a>\n        </div>\n        <div class=\"main-section\">\n            <router-outlet></router-outlet>\n        </div>\n        <div class=\"footer\"></div>\n    </div>\n    ",
        providers: [products_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map