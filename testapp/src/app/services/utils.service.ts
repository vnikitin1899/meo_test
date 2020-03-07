import { Injectable } from '@angular/core';
import { UIRouter } from '@uirouter/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    constructor(private readonly router: UIRouter) {
    }

    checkAuth() {
        if (!localStorage.getItem('jwt')) {
            this.router.stateService.go('welcome');
        }
    }
}
