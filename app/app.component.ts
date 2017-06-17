import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    name: string;

    constructor(private router: Router) {
        this.name = 'Angular 4';
    }

    changeName() {
        this.name = 'Nodejs';
    }

    gotoSub() {
        this.router.navigate(['/sub']);
    }
}
