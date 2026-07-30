
import type { Genero, IUser } from "./interface/User";


export class User implements  IUser {

   // public id: number;
    public id: number;
    public isActive: boolean;
    public balance: number;
    public avatar: string;
    public firstName: string;
    public lastName: string;
    public gender: Genero;

    constructor ({id, isActive, balance, avatar, firstName, lastName, gender}: IUser) {
      this.id = id;
      this.isActive = isActive;
      this.balance = balance;
      this.avatar = avatar;
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;

    }

}