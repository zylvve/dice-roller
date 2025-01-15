<script setup lang="ts">
import ThemePicker from './ThemePicker.vue';

const emit = defineEmits<{
  setTheme: [theme: string]
}>()

const setTheme = (theme: string) => {
  emit('setTheme', theme);
}
</script>

<template>
  <header class="header-panel">
    <h1>Dice Roller</h1>
    <ThemePicker @set-theme="setTheme"/>
  </header>
</template>

<style>
.header-panel {
  background-color: var(--color-bg-secondary);
  color: var(--color-fg-primary);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5px;
}
</style>
