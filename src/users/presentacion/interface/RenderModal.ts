import type { User } from "../../models/user"

export interface ShowModal {
    (id:string| null): Promise<void>
}

export interface CloseModal {
    ():void
}

export interface SetUserFromValues {
    (user:User): void
}


export interface  RenderModal {
    (element: HTMLElement,callBack?: (userLike: UserLike) => Promise<void>): void
}

export interface UserLike {
    

    [key: string]: string | number | boolean | undefined


}
/**
 * 
 * 
 * 
 */