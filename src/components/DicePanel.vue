<script setup lang="ts">
import type { DiceVariant } from './types';

defineProps<{
  diceVariants: DiceVariant[];
}>();

defineEmits<{
  addDie: [maxValue: number];
}>();
</script>

<template>
  <div class="dice-panel">
    <div
      class="die-container"
      v-for="variant in diceVariants"
      :key="variant.id"
      @click="$emit('addDie', variant.maxValue)"
    >
      d{{ variant.maxValue }}
    </div>
  </div>
</template>

<style scoped>
.dice-panel {
  display: flex;
  padding: 1rem;
  gap: 1rem;
}

.die-container {
  background-color: blue;
}
</style>
