export interface IAuthResponse {
  isAuth: boolean;
}

export interface IAuthData {
  login: string;
  password: string;
}

export interface IAuthError {
  error: string;
}

export interface IAuthState {
  isLoading: boolean;
  isAuth: boolean;
  error: string | null;
}
