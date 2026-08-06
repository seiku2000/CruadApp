import { localhostUserModel } from "../mappers";
import type { localHostUser } from "../mappers/interface/LocalHostUserMapper";
import type { GetUserById } from "./interface/GetUserById";

export const getUserById:GetUserById = async (id: number | string) => {

        const url = `${import.meta.env.VITE_API_URL}/users/${id}`;
        const res = await fetch(url);
        const data:localHostUser = await  res.json();

            const user  = localhostUserModel(data);
           // console.log(users);
           //console.log(user);


    return user
}