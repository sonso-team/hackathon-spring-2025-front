export interface IAuthResponse {
    username: string,
    token: string,
    error?: string
}

export interface IAuthData {
    login: string,
    password: string
}

export interface IAuthError {
    error: string
}

export interface IAuthState {
    isLoading: boolean,
    isAuth: boolean,
    userData: IAuthResponse | null,
    error:  string | null
}

