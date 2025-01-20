<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';
import type { Die, Probabilities } from './ts/types';
import { rollDistribution } from './ts/rollDistribution';
import CountsAndProbabilities from './stats-section/CountsAndProbabilities.vue';
import DistributionGraph from './stats-section/DistributionGraph.vue';

const props = defineProps<{
  dice: Die[];
  rollTotal: number;
}>()

const distributionData = computed(() => {
  const maxValues = props.dice.map(die => die.maxValue);
  return rollDistribution(maxValues);
})

const probabilityCounts: ComputedRef<Probabilities> = computed(() => {
  let less = 0, equal = 0;
  for (const row of distributionData.value.rows) {{
    if (row.rollTotal === props.rollTotal) {
      equal = row.count;
      break;
    }
    less += row.count;
  }}

  return {
    less,
    lessOrEqual: less + equal,
    equal,
    moreOrEqual: distributionData.value.totalOutcomes - less,
    more: distributionData.value.totalOutcomes - less - equal,
  }
})

const probabilityPercentages: ComputedRef<Probabilities> = computed(() => {
  const countToPercentage = (count: number) => count / distributionData.value.totalOutcomes * 100;
  return {
    less: countToPercentage(probabilityCounts.value.less),
    lessOrEqual: countToPercentage(probabilityCounts.value.lessOrEqual),
    equal: countToPercentage(probabilityCounts.value.equal),
    moreOrEqual: countToPercentage(probabilityCounts.value.moreOrEqual),
    more: countToPercentage(probabilityCounts.value.more),
  }
})

</script>

<template>
  <section class="stats-section">
    <h2>Stats</h2>

    <CountsAndProbabilities
      :probability-counts="probabilityCounts"
      :probability-percentages="probabilityPercentages"
      :roll-total="rollTotal"
      v-if="rollTotal > 0"
    />

    <DistributionGraph
      :distribution-data="distributionData"
      :roll-total="rollTotal"
      v-if="rollTotal > 0"
    />
  </section>
</template>

<style>
.stats-section {
  padding: 1em;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
