<script setup lang="ts">
import type { Die } from './types';

defineProps<{
  dice: Die[];
}>()
</script>

<template>
  <div>RollArea</div>
  <li v-for="die in dice" :key="die.id">
    {{ die.currentValue }}
  </li>
</template>
