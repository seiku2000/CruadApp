import { User } from "../models/user";
import type { IUser } from "../models/interface/User";
import type { CreateUser, NormalicerFormData, SaveUser, UserFormData } from "./interface/SaveUser";

//esto es como el mapper de usuario del formulario
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



export const saveUser: SaveUser = async (userLike: UserFormData) => {
    const normalized = normaliceFormData(userLike);

    const user = new User(normalized);

    //todo aqui falta el mapper


    if (user.id) {
        throw 'No implementado'
        return
    }
    const updateUser: User = await createUser(user);
    return updateUser;
}

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
    return newUser;
}