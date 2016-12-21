import { Component } from '@angular/core';
import { ProductService } from './products/products.service';

@Component({
    selector : 'pm-app',
    template : 
    `  
    <div class="main-section">
    <h1 class="app-title">{{pageTitle}}</h1>
    <div class="menu-div" id="menuBar"><a class='menu-item' (click)='toggleImage()'>{{showImage ? 'Show' : 'Hide'}} Image</a>
    </div>
    <pm-productlist [showImage]='showImage'></pm-productlist>
    <div class="footer"></div>
    </div>
    `,
    providers: [ProductService]
})
export class AppComponent {
    pageTitle : string = 'Product Management';
    showImage : boolean = true;

    toggleImage() : void {
        console.log('clicked');
        this.showImage = !this.showImage;
    };
}