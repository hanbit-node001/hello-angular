import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'detail',
    template: `<h1>Detail Component</h1>
               Detail ID: {{detailId}}`
})
export class DetailComponent {
    detailId: string;

    constructor(route: ActivatedRoute) {
        this.detailId = route.snapshot.params['id'];
    }
}
