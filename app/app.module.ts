import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy,
    HashLocationStrategy, PathLocationStrategy,
    APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { SubComponent } from './sub.component';
import { MyPageComponent } from './mypage.component';
import { DetailComponent } from './detail.component';
import { DescComponent } from './desc.component';
import { ReviewComponent } from './review.component';
import { WrongComponent } from './wrong.component';
import { LoginGuard } from "./login.guard";
import { LeaveBlocker } from "./leave.blocker";
import {ProductService} from "./service/product.service";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sub', component: SubComponent},
    {path: 'detail/:id', component: DetailComponent,
        children: [
            {path: '', component: DescComponent},
            {path: 'review', component: ReviewComponent},
        ],
        canDeactivate: [LeaveBlocker]
    },
    {path: 'mypage', component: MyPageComponent,
        canActivate: [LoginGuard]},
    {path: '**', component: WrongComponent}, // HashLocationStrategy only
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SubComponent,
        DetailComponent,
        DescComponent,
        ReviewComponent,
        MyPageComponent,
        WrongComponent
    ],
    providers: [{
            provide: LocationStrategy,
            useClass: HashLocationStrategy
            //useClass: PathLocationStrategy
        }, {
            provide: APP_BASE_HREF,
            useValue: '/'
        },
        LoginGuard,
        LeaveBlocker
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}