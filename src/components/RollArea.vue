<script setup lang="ts">
import { computed } from 'vue';
import type { Die } from './types';
import DieContainer from './DieContainer.vue';

const props = defineProps<{
  dice: Die[];
}>()

const emit = defineEmits<{
  rollDie: [id: number ];
}>()

const rollTotal = computed(() =>
  props.dice.reduce((acc, die) => acc + die.currentValue, 0)
);

const rollAll = () => {
  for (const die of props.dice) {
    emit("rollDie", die.id);
  }
}
</script>

<template>
  <div class="roll-area">
    <div class="dice-container">
      <DieContainer
        v-for="die in dice"
        :name="die.name"
        :key="die.id"
        @click="$emit('rollDie', die.id)"
      >
        {{ die.currentValue }}
        <div class="die-variant">
          d{{ die.maxValue }}
        </div>
      </DieContainer>
    </div>
    <button class="roll-all-btn" @click="rollAll">Roll all</button>
    <div class="total">
      Total: {{ rollTotal }}
    </div>
  </div>
</template>

<style scoped>
.roll-area {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dice-container {
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

.roll-all-btn {
  border: none;
  outline: none;

  background-color: red;
  color: white;

  font-weight: bold;
}

.total {
  font-weight: bold;
}
</style>
