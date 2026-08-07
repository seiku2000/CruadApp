export interface DeleteUserById {
    (id: number | string): Promise<boolean>
}