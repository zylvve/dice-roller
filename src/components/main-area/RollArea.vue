<script setup lang="ts">
import { type DiceVariant, type Die, type RollHistoryData } from './ts/types';
import DieContainer from './DieContainer.vue';

defineProps<{
  diceVariants: DiceVariant[];
  dice: Die[];
  history: RollHistoryData;
  diceNotation: string;
  rollTotal: number;
}>()

defineEmits<{
  rollDie: [id: number];
  rollAll: [];
  deleteDie: [id: number];
}>()

</script>

<template>
  <div class="roll-area">
    <div class="dice-container">
      <DieContainer
        v-for="die in dice"
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
    <button class="roll-all-btn" @click="$emit('rollAll')">Roll all</button>
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
  background-color: var(--color-bg-secondary);
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

  background-color: var(--color-bg-primary);
  color: var(--color-fg-primary);
}
</style>
