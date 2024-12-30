<script setup lang="ts">
import type { Die } from './types';

defineProps<{
  dice: Die[];
}>()

defineEmits<{
  rollDie: [id: number ];
}>()

</script>

<template>
  <div class="roll-area">
    <div
      class="die-container"
      v-for="die in dice"
      :key="die.id"
      @click="$emit('rollDie', die.id)"
    >
      {{ die.currentValue }}
      <div class="die-variant">
        d{{ die.maxValue }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.roll-area {
  display: flex;
  padding: 1rem;
  gap: 1rem;
}

.die-container {
  background-color: red;

  position: relative;
}

.die-variant {
  position: absolute;
  font-size: 0.8rem;
  top: 2.5rem;
}
</style>
