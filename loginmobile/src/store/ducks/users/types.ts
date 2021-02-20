export enum UsersTypes {
    LOAD_REQUEST = '@users/LOAD_REQUEST',
    LOAD_SUCCESS = '@users/LOAD_SUCCESS',
    LOAD_FAILURE = '@users/LOAD_FAILURE'
}

export interface Users {
    email: string,
    password: string
}

export interface UsersState {
    readonly data: Users[],
    readonly loading: boolean,
    readonly error: boolean
}