import { inject, Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
    providedIn:'root'
})
export class AuthService{

    isLogged: boolean;
    userService: UserService= inject(UserService);

    login(username:String, password: String) {
        let user = this.userService.users.find(u=>u.username===username&&u.password===password)
        user ? this.isLogged=true : this.isLogged = false;
        return user;
    }
    logout() {
        this.isLogged = false;
    }
    IsAuthenticated() {
        return this.isLogged;
    }
}