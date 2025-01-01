<script setup lang="ts">
import { computed } from 'vue';
import type { DiceVariant, Die } from './types';
import DieContainer from './DieContainer.vue';

const props = defineProps<{
  dice: Die[];
  diceVariants: DiceVariant[];
}>()

const emit = defineEmits<{
  rollDie: [id: number];
  deleteDie: [id: number];
}>()

const diceNotation = computed(() => {
  let notation = props.diceVariants.reduce((acc, variant) => {
    if (variant.count > 1) acc += variant.count;
    if (variant.count > 0) acc += 'd' + variant.maxValue + '+';
    return acc;
  }, "");

  if (notation.slice(-1) === '+') {
    notation = notation.slice(0, -1);
  }
  return notation;
})

const sortedDice = computed(() => {
  const compareByMaxValue = (a: Die, b: Die) => a.maxValue - b.maxValue;
  return [...props.dice].sort(compareByMaxValue);
});

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
        v-for="die in sortedDice"
        type="roll-die"
        :name="die.name"
        :key="die.id"
        @click="$emit('rollDie', die.id)"
        @delete-btn-press="$emit('deleteDie', die.id)"
      >
        {{ die.currentValue || "?" }}
        <div class="die-variant">
          d{{ die.maxValue }}
        </div>
      </DieContainer>
    </div>
    <button class="roll-all-btn" @click="rollAll">Roll all</button>
    <div class="dice-notation">
      {{ diceNotation }}
    </div>
    <div class="total">
      Total: {{ rollTotal }}
    </div>
  </div>
</template>

<style>
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

.die-variant {
  position: absolute;
  font-size: 0.8rem;
  top: 2.5rem;
}

.roll-all-btn {
  border: none;
  outline: none;

  background-color: var(--color-bg-secondary);
  color: var(--color-fg-primary);
}
</style>
