<script setup lang="ts">
import LocaleSwitcher from './LocaleSwitcher.vue';
import ThemePicker from './ThemePicker.vue';

</script>

<template>
  <header class="header-panel">
    <h1>{{ $t('message.dice_roller_title') }}</h1>
    <LocaleSwitcher/>
    <ThemePicker/>
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
  height: 50px;
}
</style>
