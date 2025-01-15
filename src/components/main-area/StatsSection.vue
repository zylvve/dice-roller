<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Die } from './ts/types';
import { rollDistribution } from './ts/rollDistribution';

const props = defineProps<{
  dice: Die[];
  rollTotal: number;
}>()

const data = computed(() => {
  const maxValues = props.dice.map(die => die.maxValue);
  return rollDistribution(maxValues);
})

const maxCount = computed(() =>
  data.value.rows.reduce((max, row) => ( row.count > max ) ? row.count : max, 0)
)

const currentClass = ref('current');
</script>

<template>
  <section class="stats-section">
    <h2>Stats</h2>
    <div
      class="row"
      :class="[rollTotal === row.rollTotal ? currentClass : '']"
      v-for="row in data.rows"
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
        row.count + ' (' + ( row.count / data.totalOutcomes * 100 ).toFixed(2) + '%)'
      }}</span>
    </div>
  </section>
</template>

<style>
.stats-section {
  padding: 1em;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
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

.row.current .bar {
  background-color: var(--color-hl);
}

.row.current {
  color: var(--color-hl);
}

</style>
