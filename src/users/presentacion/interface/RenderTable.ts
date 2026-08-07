export interface RenderTable {
    (element: HTMLElement): void;
}

export interface CreateTable {
    (): HTMLTableElement;
}

export interface TableSelectUser {
    (event: Event): void;
}
export interface TableDeleteUser {
    (event: Event): void;
}  