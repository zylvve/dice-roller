<script setup lang="ts">
import { ref } from 'vue';
import DicePanel from './DicePanel.vue';
import RollArea from './RollArea.vue';
import { type Die, type DiceVariant } from './types';

const diceVariants = ref<DiceVariant[]>([
  { id: 1, maxValue: 4, count: 0 },
  { id: 2, maxValue: 6, count: 0 },
  { id: 3, maxValue: 8, count: 0 },
  { id: 4, maxValue: 10, count: 0 },
  { id: 5, maxValue: 12, count: 0 },
  { id: 6, maxValue: 20, count: 0 },
]);

const dice = ref<Die[]>([]);

let dieId = 0;
const addDie = (maxValue: number) => {
  dice.value.push({
    id: ++dieId,
    maxValue,
    currentValue: 0,
  });
}

const rollDie = (id: number) => {
  const die = dice.value.find(d => d.id === id);
  if (!die) return;

  die.currentValue = Math.floor(Math.random() * die.maxValue) + 1;
}
</script>

<template>
  <main>
    <DicePanel :diceVariants="diceVariants" @addDie="addDie"/>
    <RollArea :dice="dice" @rollDie="rollDie"/>
  </main>
</template>

<style>
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.die-container {
  width: 4rem;
  height: 4rem;

  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  font-weight: bold;
  color: white;

  cursor: default;
  user-select: none;
}

</style>
