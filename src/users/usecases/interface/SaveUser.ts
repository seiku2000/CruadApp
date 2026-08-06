import type { Genero, IUser } from "../../models/interface/User";
import type { User } from "../../models/user";
//import type { UserLike } from "../../presentacion/interface/RenderModal";

export interface NormalicerFormData {
    (userLike: UserFormData): IUser
}





export interface UserFormData {
    id?: number;
    isActive?: boolean;
    balance?: number;
    avatar?: string;
    firstName?: string;
    lastName?: string;
    gender?: Genero;
}






export interface SaveUser {
    (userLike: UserFormData): Promise<User | undefined>
}



export interface CreateUser {
    (user: IUser): Promise<User>
}


export interface UpdateUser {
    (user: IUser): Promise<User>
}
