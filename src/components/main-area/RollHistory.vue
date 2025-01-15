<script setup lang="ts">
import type { RollHistoryData } from './ts/types';

defineProps<{
  history: RollHistoryData,
}>()
</script>

<template>
  <section class="history-section">
    <h2>History</h2>
    <div v-for="set in history" :key="set.id">
      <div>{{ set.notation }}</div>
      <div v-for="roll in set.rolls" :key="roll.id">
        {{ roll.dieValues }}
        {{ roll.rollTotal }}
      </div>
    </div>
  </section>
</template>
