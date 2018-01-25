import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { User } from './user';

const USERNAME = 'babo';
const PASSWORD = '5marzo99';

@Injectable()
export class AuthService {

   private loggedIn = new BehaviorSubject<boolean>(false);

   get isLoggedIn() {
      return this.loggedIn.asObservable();
   }

   constructor(
      private router: Router
   ) { }

   login(user: User) {
      if (user.userName === USERNAME && user.password === PASSWORD) {
         this.loggedIn.next(true);
         this.router.navigate(['/']);
      }
   }

   logout() {
      this.loggedIn.next(false);
      this.router.navigate(['/login']);
   }

}
