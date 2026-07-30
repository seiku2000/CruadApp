
import type {IUser} from '../../models/interface/User'
export interface State {
    currentPage: number;
    users: IUser[];
}

export interface LoadNextPage {
    (): Promise<void>;
}

export interface LoadPreviusPage {
    (): Promise<void>;
}

export interface OnUserChanged {
    (): Promise<void>;
}

export interface ReloadPage {
    (): Promise<void>;
}


   
