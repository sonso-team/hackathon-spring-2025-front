export interface IParamsState {
  params: Param[];
  active: string;
}

export interface Param {
  personName: string;
  reactionTime?: number;
  acceleration?: number;
  maxSpeed?: number;
  lsf?: number;
}

export interface IParams {
  param: Param;
}

export interface IActive {
  active: string;
}

export interface IParamsError {
  error: string;
}

export interface IParamsResponse {
  message: string;
  error?: string;
}
