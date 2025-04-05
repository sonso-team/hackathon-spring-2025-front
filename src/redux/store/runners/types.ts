import type { HistoryItem } from '../../../types';

export interface IRunnersState {
  remainBefore: Date;
  history: HistoryItem[][];
  isRunning: boolean;
  lastResults: HistoryItem[];
  currentRun: HistoryItem[];
}

export interface IRunnersResponse {
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
