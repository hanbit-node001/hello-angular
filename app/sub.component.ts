import { Component } from '@angular/core';

@Component({
    selector: 'sub',
    template: `<h1>Sub Component</h1>
               <input [(ngModel)]="text">{{text}}`
})
export class SubComponent {

    text: string;

    constructor() {
        this.text = 'this is sub';
    }

}
