import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';

export const AuthGuard: CanActivateFn = () => {
    const router = inject(Router);

    // Get the Login Status from the Local Storage
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userId = localStorage.getItem('userId');

    // Check if user is logged in
    if (isLoggedIn === 'true' && userId !== null) {
        return true;
    } else {
        // Redirect the user to the login page
        router.navigate(['/login']);
        return false;
    }
};
