<script setup lang="ts">
import DieContainer from './DieContainer.vue';
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
    <DieContainer
      v-for="variant in diceVariants"
      :name="variant.name"
      :key="variant.id"
      @click="$emit('addDie', variant.id)"
    >
      d{{ variant.maxValue }}
    </DieContainer>
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
