import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'ai-starrating',
    templateUrl : 'app/shared/star.component.html',
    styleUrls : ['app/shared/star.component.css'] 
})
export class StarRatingComponent implements OnChanges {
    @Input() rating: number;
    starWidth : number;
    
    @Output() ratingClicked : EventEmitter<string> = 
        new EventEmitter<string>();

    ngOnChanges() : void {
        this.starWidth = this.rating * 48/5;
    };

    onClick() : void {
        console.log('in clicker smith');
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    };
}