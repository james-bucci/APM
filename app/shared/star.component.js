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
var StarRatingComponent = (function () {
    function StarRatingComponent() {
        this.ratingClicked = new core_1.EventEmitter();
    }
    StarRatingComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 48 / 5;
    };
    ;
    StarRatingComponent.prototype.onClick = function () {
        console.log('in clicker smith');
        this.ratingClicked.emit("The rating " + this.rating + " was clicked");
    };
    ;
    return StarRatingComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StarRatingComponent.prototype, "rating", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], StarRatingComponent.prototype, "ratingClicked", void 0);
StarRatingComponent = __decorate([
    core_1.Component({
        selector: 'ai-starrating',
        templateUrl: 'app/shared/star.component.html',
        styleUrls: ['app/shared/star.component.css']
    }),
    __metadata("design:paramtypes", [])
], StarRatingComponent);
exports.StarRatingComponent = StarRatingComponent;
//# sourceMappingURL=star.component.js.map