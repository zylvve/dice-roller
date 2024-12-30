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
    currentValue: maxValue,
  });
}
</script>

<template>
  <main>
    <DicePanel :diceVariants="diceVariants" @addDie="addDie"/>
    <RollArea :dice="dice"/>
  </main>
</template>
