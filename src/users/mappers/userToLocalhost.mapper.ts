import type { UserToLocalhostMapper } from "./interface/userToLocalhostMapper";
import type { IUser } from "../models/interface/User";
//TODO: mapear el usuario de nuestro modelo a localhost osea de nuestro modelo a la api
export const userModelToLocalhost:UserToLocalhostMapper = (user:IUser) => {
    const {id, firstName, lastName, balance, avatar, isActive, gender} = user;

    return {
        id,
        first_name: firstName,
        last_name: lastName,
        balance,
        avatar,
        isActive,
        gender
    };

}