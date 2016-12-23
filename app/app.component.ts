import { Component } from '@angular/core';
import { ProductService } from './products/products.service';

@Component({
    selector : 'pm-app',
    template : 
    `  
    <div class="main-section">
        <h1 class="app-title">{{pageTitle}}</h1>
        <div class="menu-div" id="menuBar">
            <a class='menu-item' [routerLink]="['/welcome']">HOME</a>
            <a class='menu-item' [routerLink]="['/products']">PRODUCT LIST</a>
        </div>
        <div class="main-section">
            <router-outlet></router-outlet>
        </div>
        <div class="footer"></div>
    </div>
    `,
    providers: [ ProductService ]
})
export class AppComponent {
    pageTitle : string = 'Product Management';

}