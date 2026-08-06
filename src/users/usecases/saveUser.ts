import { User } from "../models/user";
import type { IUser } from "../models/interface/User";
import type { CreateUser, NormalicerFormData, SaveUser, UserFormData } from "./interface/SaveUser";
import { userModelToLocalhost } from "../mappers";

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

//funcion para guardar un usuario
export const saveUser: SaveUser = async (userLike: UserFormData) => {
    const normalized = normaliceFormData(userLike);
    const user = new User(normalized);

    if(!user.firstName || !user.lastName){
        throw  `first name:${user.firstName} last name:${user.lastName} is required`;
    }
    const userToSave:IUser = userModelToLocalhost(user);




    if (user.id) {
        throw 'No implementado'
        return
    }
    const updateUser: User = await createUser(userToSave);
    return updateUser;
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

    // return rest.json()
    const newUser: User = await rest.json();
    console.log(newUser);
    return newUser;
}