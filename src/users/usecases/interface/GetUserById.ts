import type { User } from "../../models/user";

export interface GetUserById {
    (id: number | string): Promise<User>;
}