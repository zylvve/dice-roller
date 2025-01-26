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
    <span>{{ $t('message.less', { total: props.rollTotal}) }}</span>
    <span>{{ probabilityCounts.less }}</span>
    <span>{{ formatPercentage(probabilityPercentages.less) }}</span>

    <span>{{ $t('message.less_or_equal', { total: props.rollTotal}) }}</span>
    <span>{{ probabilityCounts.lessOrEqual }}</span>
    <span>{{ formatPercentage(probabilityPercentages.lessOrEqual) }}</span>

    <span>{{ $t('message.equal', { total: props.rollTotal}) }}</span>
    <span>{{ probabilityCounts.equal }}</span>
    <span>{{ formatPercentage(probabilityPercentages.equal) }}</span>

    <span>{{ $t('message.more_or_equal', { total: props.rollTotal}) }}</span>
    <span>{{ probabilityCounts.moreOrEqual }}</span>
    <span>{{ formatPercentage(probabilityPercentages.moreOrEqual) }}</span>

    <span>{{ $t('message.more', { total: props.rollTotal}) }}</span>
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
