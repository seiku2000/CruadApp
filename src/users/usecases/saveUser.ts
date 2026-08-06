import { User } from "../models/user";
import type { IUser } from "../models/interface/User";
import type { CreateUser, NormalicerFormData, SaveUser, UpdateUser, UserFormData } from "./interface/SaveUser";
import { userModelToLocalhost,localhostUserModel } from "../mappers";

//esto es como el mapper de usuario del formulario para validar campos a usar
const normaliceFormData: NormalicerFormData = (userLike: UserFormData): IUser => {
    return {
        id: userLike.id ?? 0,
        isActive: userLike.isActive ?? true,
        balance: userLike.balance ?? 0,
        avatar: userLike.avatar ?? '',
        firstName: userLike.firstName ?? '',
        lastName: userLike.lastName ?? '',
        gender: userLike.gender ?? 'male',
    }
}

export const updateUser: UpdateUser = async (user: IUser) => {
    const url = `${import.meta.env.VITE_API_URL}/users/${user.id}`
    const rest = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    const apiData = await rest.json() as any
    const updatedUser: User = new User(localhostUserModel(apiData))
    // const updatedUser: User = await rest.json();
   // console.log(updatedUser);
    return updatedUser;
}






//funcion para guardar un usuario
export const saveUser: SaveUser = async (userLike: UserFormData) => {
    const normalized = normaliceFormData(userLike);
    const user = new User(normalized);

    if(!user.firstName || !user.lastName){
        throw  `first name:${user.firstName} last name:${user.lastName} is required`;
    }
    const userToSave:IUser = userModelToLocalhost(user);



   let updatedUser: User;
    if (user.id) {
       // throw 'No implementado'
        updatedUser = await updateUser(userToSave)
     
    }else{
        updatedUser = await createUser(userToSave)
    }
    console.log(updatedUser);

    return updatedUser;
    
   // return updatedUser;


    
    /*
    const newUser: User = await createUser(userToSave);
    return newUser;*/
}
//funcion para crear un usuario
const createUser: CreateUser = async (user: IUser) => {
    const url = `${import.meta.env.VITE_API_URL}/users`
    const rest = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    const apiData = await rest.json() as any
    const newUser: User = new User(localhostUserModel(apiData))
    // const newUser: User = await rest.json();
    console.log(newUser);
    return newUser;
}