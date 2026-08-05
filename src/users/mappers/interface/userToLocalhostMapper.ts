import type { IUser } from "../../models/interface/User";

export interface UserToLocalhostMapper {
    (user: IUser): any;
}