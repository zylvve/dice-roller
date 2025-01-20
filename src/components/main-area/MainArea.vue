<script setup lang="ts">
import { ref, computed } from 'vue';
import DicePanel from './DicePanel.vue';
import RollArea from './RollArea.vue';
import StatsSection from './StatsSection.vue';
import RollHistory from './RollHistory.vue';
import { type Die, type DiceVariant, type RollHistoryData } from './ts/types';

const diceVariants = ref<DiceVariant[]>([
  { id: 1, name: 'd4', maxValue: 4, count: 0 },
  { id: 2, name: 'd6', maxValue: 6, count: 0 },
  { id: 3, name: 'd8', maxValue: 8, count: 0 },
  { id: 4, name: 'd10', maxValue: 10, count: 0 },
  { id: 5, name: 'd12', maxValue: 12, count: 0 },
  { id: 6, name: 'd20', maxValue: 20, count: 0 },
]);

const dice = ref<Die[]>([])

const sortedDice = computed(() => {
  const compareByMaxValue = (a: Die, b: Die) => a.maxValue - b.maxValue;
  return [...dice.value].sort(compareByMaxValue);
});

const history = ref<RollHistoryData>([]);

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

const rollAll = () => {
  for (const die of dice.value) {
    rollDie(die.id);
  }

  let setId = 0;
  const lastRecordedSet = history.value.slice(-1)[0]?.notation;
  if (diceNotation.value !== lastRecordedSet) {
    history.value.push({
      id: setId++,
      notation: diceNotation.value,
      rolls: [],
    })
  }

  let rollId = 0;
  history.value[history.value.length - 1].rolls.push({
    id: rollId++,
    dieValues: dice.value.map(die => die.currentValue),
    rollTotal: rollTotal.value,
  })
}

const deleteDie = (id: number) => {
  const die = dice.value.find(d => d.id === id);
  if (!die) return;

  const variant = diceVariants.value.find(v => v.maxValue === die.maxValue);
  if (!variant) return;

  dice.value = dice.value.filter(d => d.id !== id);
  variant.count--;
}

const diceNotation = computed(() => {
  let notation = diceVariants.value.reduce((acc, variant) => {
    if (variant.count > 1) acc += variant.count;
    if (variant.count > 0) acc += 'd' + variant.maxValue + '+';
    return acc;
  }, "");

  if (notation.slice(-1) === '+') {
    notation = notation.slice(0, -1);
  }
  return notation;
})

const rollTotal = computed(() =>
  dice.value.reduce((acc, die) => acc + die.currentValue, 0)
);

</script>

<template>
  <main>
    <section class="main-section">
      <DicePanel
        :dice-variants="diceVariants"
        @addDie="addDie"
      />
      <RollArea
        :dice-variants="diceVariants"
        :dice="sortedDice"
        :history="history"
        :dice-notation="diceNotation"
        :roll-total="rollTotal"

        @roll-die="rollDie"
        @roll-all="rollAll"
        @delete-die="deleteDie"
      />
    </section>
    <RollHistory :history="history"/>
    <StatsSection
      :dice="sortedDice"
      :roll-total="rollTotal"
    />
  </main>
</template>

<style>
main {
  height: calc(100vh - 50px);

  display: grid;

  font-weight: bold;

  background-color: var(--color-bg-primary);
  color: var(--color-fg-primary);
}

@media screen and (min-width: 641px) and (max-width: 1007px) {
  main {
    grid-template-columns: repeat(2, 1fr);
  }
  .main-section {
    grid-column: span 2;
  }
}

@media screen and (min-width: 1007px) {
  main {
    grid-template-columns: repeat(3, 1fr);
  }
  .history-section {
    order: -1;
  }
}
</style>
