export interface IUser {
    id:         number;
    isActive:   boolean;
    balance:    number;
    avatar:     string;
    firstName: string;
    lastName:  string;
    gender:     Genero;
}
/*
export enum Genero {
    Female = "female",
    Male = "male", 
}*/
export type Genero = "female" | "male";
