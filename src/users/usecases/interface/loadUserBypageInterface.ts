import type { User } from "../../models/user";

export interface loadUserBypageInter {
    (page: number):Promise<User[]>
}
