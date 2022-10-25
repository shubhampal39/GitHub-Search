import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class DataService {
  userList: User[] = [];

  constructor() {}

  insertUserList(user: any) {
    this.userList.push(user);
  }

  getUserList() {
    return this.userList;
  }

  updateUserList(userList: any[]) {
    this.userList = userList;
  }
}
