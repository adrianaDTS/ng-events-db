import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Aki',
      lastName: '2y2son4'
    };
  }

  isAuthenticated() {
    // '!!' is used to cast to boolean
    return !!this.currentUser;
  }
}