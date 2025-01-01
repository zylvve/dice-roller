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
  data.value.reduce((max, row) => ( row.count > max ) ? row.count : max, 0)
)

const currentClass = ref('current');
</script>

<template>
  <section class="stats-section">
    <h2>Stats</h2>
    <div
      class="row"
      :class="[rollTotal === row.rollTotal ? currentClass : '']"
      v-for="row in data"
      :key="row.rollTotal"
    >
      <span class="roll-total">{{ row.rollTotal }}</span>
      <span class="bar-container">
        <span
          class="bar"
          :style="{ width: 90 * row.count / maxCount + '%'}">
        </span>
        <span class="count">{{ row.count }}</span>
      </span>
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
  width: 20rem;
  height: 1.5rem;
}

.roll-total {
  width: 2rem;
}

.bar-container {
  display: flex;
  width: 18rem;
  height: 100%;
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
