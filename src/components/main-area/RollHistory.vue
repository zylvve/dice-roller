<script setup lang="ts">
import type { RollHistoryData } from './ts/types';

defineProps<{
  history: RollHistoryData,
}>()
</script>

<template>
  <section class="history-section">
    <h2>{{ $t('message.history_title') }}</h2>
    <div v-for="set in history" :key="set.id">
      <div>{{ set.notation }}</div>
      <div v-for="roll in set.rolls" :key="roll.id">
        {{ roll.dieValues }}
        {{ roll.rollTotal }}
      </div>
    </div>
  </section>
</template>

<style>
.history-section {
  padding: 1em;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
