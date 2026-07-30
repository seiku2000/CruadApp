/*
export interface localHostUser {
    id:         number;
    isActive:   boolean;
    balance:    number;
    avatar:     string;
    firstName: string;
    lastName:  string;
    gender:     Genero;
}*/
/*
export enum Genero {
    Female = "female",
    Male = "male", 
}*/
//export type Genero = "female" | "male";

import type { IUser } from "../../models/interface/User";

export interface localHostUser {
    id:         number;
    isActive:   boolean;
    balance:    number;
    avatar:     string;
    first_name: string;
    last_name:  string;
    gender:     Genero;
}

export type Genero = "female" | "male";





export interface LocalHostUserMapper {
    (localHostUser:localHostUser):IUser

}