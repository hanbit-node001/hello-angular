import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { SubComponent } from './sub.component';
import { DetailComponent } from './detail.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sub', component: SubComponent},
    {path: 'detail/:id', component: DetailComponent},
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SubComponent,
        DetailComponent
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}