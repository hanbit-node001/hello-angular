import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate() {
        alert('로그인 해주세요.');
        this.router.navigate(['/']);
        return false;
    }

}