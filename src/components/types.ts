export interface DiceVariant {
  id: number;
  maxValue: number;
  count: number;
}

export interface Die {
  id: number;
  maxValue: number;
  currentValue: number;
}
