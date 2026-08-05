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