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
