<script setup lang="ts">
import { ref, computed } from 'vue';
import { formatPercentage } from '../ts/helpers';
import type { RollDistributionData } from '../ts/types';

const props = defineProps<{
  distributionData: RollDistributionData,
  rollTotal: number,
}>()

const maxCount = computed(() =>
  props.distributionData.rows.reduce((max, row) => ( row.count > max ) ? row.count : max, 0)
)

const currentClass = ref('current');
</script>

<template>
  <div
    class="graph-row"
    :class="[rollTotal === row.rollTotal ? currentClass : '']"
    v-for="row in distributionData.rows"
    :key="row.rollTotal"
  >
    <span class="roll-total">{{ row.rollTotal }}</span>
    <span class="bar-container">
      <span
        class="bar"
        :style="{ width: 90 * row.count / maxCount + '%'}">
      </span>
    </span>
    <span class="count-and-probability">{{
      row.count + ' (' + formatPercentage(row.count / distributionData.totalOutcomes * 100) +')'
    }}</span>
  </div>
</template>

<style>

.graph-row {
  display: flex;
  width: 30rem;
  height: 1.5rem;
}

.roll-total {
  width: 2rem;
}

.bar-container {
  display: flex;
  width: 21rem;
  height: 100%;
}

.count-and-probability {
  width: 7rem;
}

.bar {
  height: 100%;
  background-color: var(--color-fg-primary);
}

.graph-row.current .bar {
  background-color: var(--color-hl);
}

.graph-row.current {
  color: var(--color-hl);
}

</style>
