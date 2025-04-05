export type Probabilities = {
  pos1: number;
  pos2: number;
  pos3: number;
  pos4: number;
  pos5: number;
  pos6: number;
  inThree: number;
  inTwo: number;
};

export type PairProbabilities = {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
};

export interface HistoryItem {
  id: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | string;
  place: number;
  progress?: number;
  probabilities?: Probabilities;
  pairProbabilities?: PairProbabilities;
}
