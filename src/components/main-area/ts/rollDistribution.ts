import type { RollDistributionData } from "./types";

export function rollDistribution (maxValues: number[]) : RollDistributionData {
  let countArray = [1];
  let newCountArray;
  let currentMaxTotal = 0;

  for (const maxValue of maxValues) {
    currentMaxTotal += maxValue;
    newCountArray = new Array(currentMaxTotal + 1).fill(0);

    for (let i = 0; i < countArray.length; ++i) {
      for (let j = 1; j <= maxValue; ++j) {
        newCountArray[i + j] += countArray[i];
      }
    }
    countArray = newCountArray;
  }

  const minRollTotal = maxValues.length;
  const maxRollTotal = maxValues.reduce((acc, value) => acc + value, 0);
  const data: RollDistributionData = { rows: [], totalOutcomes: 1 };

  for (let rt = minRollTotal; rt <= maxRollTotal; ++rt) {
    data.rows.push({
      rollTotal: rt,
      count: countArray[rt],
    })
  }

  data.totalOutcomes = maxValues.reduce((acc, maxValue) => acc * maxValue, 1);

  return data;
}
