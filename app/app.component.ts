import { Component } from '@angular/core';

@Component({
    selector : 'pm-app',
    template : 
    `  
    <div class="main-section">
     <h1 class="app-title">{{pageTitle}}</h1>
     <div class="menu-div"><a class="menu-item" href="#">CONTACT</a><a class="menu-item" href="#">DELETE</a><a class="menu-item" href="#">NEW</a></div>
     <pm-productlist></pm-productlist>
     <div class="footer"></div>
    </div>
    `
})
export class AppComponent {
    pageTitle : string = 'Product Management';
}