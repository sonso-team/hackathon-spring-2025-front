type Probabilities = {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  inThree: number;
  inTwo: number;
};

type PairProbabilities = {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
};
interface HistoryItem {
  id: 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
  place: number;
  progress?: number;
  probabilities?: Probabilities;
  pairProbabilities?: PairProbabilities;
}

interface DTO {
  type: 'history' | 'sync' | 'update';
  remainBefore: Date;
  history: [
    [HistoryItem],
    [HistoryItem],
    [HistoryItem],
    [HistoryItem],
    [HistoryItem],
    [HistoryItem],
    [HistoryItem],
    [HistoryItem],
    [HistoryItem],
    [HistoryItem],
  ];
  isRunning: boolean;
  lastResults: [HistoryItem];
  currentRun: [HistoryItem];
}
