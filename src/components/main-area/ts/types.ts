export interface DiceVariant {
  id: number;
  name: string;
  maxValue: number;
  count: number;
}

export interface Die {
  id: number;
  name: string;
  maxValue: number;
  currentValue: number;
}

export interface RollDistributionData {
  rows: DataRow[];
  totalOutcomes: number;
}

interface DataRow {
  rollTotal: number;
  count: number;
}

export type RollHistoryData = SetHistoryData[];

interface SetHistoryData {
  id: number;
  notation: string;
  rolls: Roll[];
}

interface Roll {
  id: number;
  dieValues: number[];
  rollTotal: number;
}
