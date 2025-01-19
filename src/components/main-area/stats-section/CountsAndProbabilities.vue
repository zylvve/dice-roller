<script setup lang="ts">
import type { Probabilities } from '../ts/types';
import { formatPercentage } from '../ts/helpers';

const props = defineProps<{
  probabilityCounts: Probabilities,
  probabilityPercentages: Probabilities,
  rollTotal: number,
}>()

</script>

<template>
  <div class="probabilities">
    <span>{{ 'Less than ' + props.rollTotal }}</span>
    <span>{{ probabilityCounts.less }}</span>
    <span>{{ formatPercentage(probabilityPercentages.less) }}</span>

    <span>{{ 'Less or equal to ' + props.rollTotal }}</span>
    <span>{{ probabilityCounts.lessOrEqual }}</span>
    <span>{{ formatPercentage(probabilityPercentages.lessOrEqual) }}</span>

    <span>{{ 'Equal to ' + props.rollTotal }}</span>
    <span>{{ probabilityCounts.equal }}</span>
    <span>{{ formatPercentage(probabilityPercentages.equal) }}</span>

    <span>{{ 'More or equal to ' + props.rollTotal }}</span>
    <span>{{ probabilityCounts.moreOrEqual }}</span>
    <span>{{ formatPercentage(probabilityPercentages.moreOrEqual) }}</span>

    <span>{{ 'More than ' + props.rollTotal }}</span>
    <span>{{ probabilityCounts.more }}</span>
    <span>{{ formatPercentage(probabilityPercentages.more) }}</span>
  </div>

</template>

<style>
.probabilities{
  display: grid;
  grid-template-columns: 12rem 5rem 5em;
}
</style>
