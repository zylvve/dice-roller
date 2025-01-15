<script setup lang="ts">
import DieContainer from './DieContainer.vue';
import type { DiceVariant } from './ts/types';

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
      type="add-die"
      :name="variant.name"
      :key="variant.id"
      @click="$emit('addDie', variant.id)"
    >
      d{{ variant.maxValue }}
    </DieContainer>
  </div>
</template>

<style>
.dice-panel {
  display: flex;
  justify-content: center;

  padding: 1rem;
  gap: 1rem;
}
</style>
