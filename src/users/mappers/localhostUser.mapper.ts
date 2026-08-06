import { User } from "../models/user";
import type { localHostUser, LocalHostUserMapper } from "./interface/LocalHostUserMapper";
//TODO: mapear el usuario de localhost a nuestro modelo 
export const localhostUserModel:LocalHostUserMapper = (localHostUser:localHostUser) => {
    //return new User()
    const {id,isActive,balance,avatar,first_name,last_name,gender} = localHostUser;

    return new User ({
        id,
        isActive,
        balance,
        avatar,
        firstName:first_name,
        lastName:last_name,
        gender:gender
    });
}