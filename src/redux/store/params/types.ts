export interface IParamsState {
  params: Param[];
  active: string;
}

export interface Param {
  name: string;
  reactionTime: number;
  acceleration: number;
  maxSpeed: number;
  decay: number;
}

export interface IParams {
  param: Param;
}

export interface IActive {
  active: string;
}
