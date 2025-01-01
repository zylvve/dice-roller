<script setup lang="ts">
import { ref } from 'vue';
import DicePanel from './DicePanel.vue';
import RollArea from './RollArea.vue';
import { type Die, type DiceVariant } from './ts/types';

const diceVariants = ref<DiceVariant[]>([
  { id: 1, name: 'd4', maxValue: 4, count: 0 },
  { id: 2, name: 'd6', maxValue: 6, count: 0 },
  { id: 3, name: 'd8', maxValue: 8, count: 0 },
  { id: 4, name: 'd10', maxValue: 10, count: 0 },
  { id: 5, name: 'd12', maxValue: 12, count: 0 },
  { id: 6, name: 'd20', maxValue: 20, count: 0 },
]);

const dice = ref<Die[]>([]);

let dieId = 0;
const addDie = (variantId: number) => {
  const variant = diceVariants.value.find(v => v.id === variantId);
  if (!variant) return;

  variant.count++;
  dice.value.push({
    id: ++dieId,
    name: variant.name,
    maxValue: variant.maxValue,
    currentValue: 0,
  });
}

const rollDie = (id: number) => {
  const die = dice.value.find(d => d.id === id);
  if (!die) return;

  die.currentValue = Math.floor(Math.random() * die.maxValue) + 1;
}

const deleteDie = (id: number) => {
  const die = dice.value.find(d => d.id === id);
  if (!die) return;

  const variant = diceVariants.value.find(v => v.maxValue === die.maxValue);
  if (!variant) return;

  dice.value = dice.value.filter(d => d.id !== id);
  variant.count--;
}
</script>

<template>
  <main>
    <DicePanel
      :dice-variants="diceVariants"
      @addDie="addDie"
    />
    <RollArea
      :dice-variants="diceVariants"
      :dice="dice"
      @rollDie="rollDie"
      @deleteDie="deleteDie"
    />
  </main>
</template>

<style>
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: bold;

  background-color: var(--color-bg-primary);
  color: var(--color-fg-primary);
}
</style>
