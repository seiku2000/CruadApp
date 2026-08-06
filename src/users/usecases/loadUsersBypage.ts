import { localhostUserModel } from "../mappers";
import type { localHostUser } from "../mappers/interface/LocalHostUserMapper";
import type { loadUserBypageInter } from "./interface/loadUserBypageInterface";


//funcion para cargar usuarios por pagina
export const loadUsersBypage:loadUserBypageInter = async(page:number = 0) => {
    const url = `${import.meta.env.VITE_API_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data:localHostUser[] = await  res.json();
    //console.log(data);
    //const users = [...data];
    //console.log(users);
    const users  = data.map(user => localhostUserModel(user));
   // console.log(users);

    return users;
       

    
}