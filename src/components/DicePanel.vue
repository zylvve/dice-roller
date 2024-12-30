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
  <div>DicePanel</div>
  <li v-for="variant in diceVariants" :key="variant.id">
    <div @click="$emit('addDie', variant.maxValue)">
      {{ variant.maxValue }}
    </div>
  </li>
</template>
