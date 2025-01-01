import type { RollDistributionData } from "./types";

export const rollDistribution = (maxValues: number[]) : RollDistributionData => {
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
  const data: RollDistributionData = [];

  for (let rt = minRollTotal; rt <= maxRollTotal; ++rt) {
    data.push({
      rollTotal: rt,
      count: countArray[rt],
    })
  }

  return data;
}
