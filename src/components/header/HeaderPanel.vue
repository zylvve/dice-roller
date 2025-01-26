<script setup lang="ts">
import LocaleSwitcher from './LocaleSwitcher.vue';
import ThemePicker from './ThemePicker.vue';

</script>

<template>
  <header class="header-panel">
    <h1>{{ $t('message.dice_roller_title') }}</h1>
    <div class="settings-container">
      <LocaleSwitcher/>
      <ThemePicker/>
    </div>
  </header>
</template>

<style lang="scss">
.header-panel {
  background-color: var(--color-bg-secondary);
  color: var(--color-fg-primary);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5px;
  height: 50px;
}

.settings-container {
  display: flex;
  gap: 5px;

  span {
    font-weight: bold;
  }
}

.setting {
  display: flex;
  justify-content: flex-end;

  gap: 3px;
  width: 10rem;

  span {
    padding: 0.2rem;
  }

  select {
    appearance: none;
    border: 0;
    outline: 0;
    font: inherit;

    width: 5rem;
    padding: 0.2rem;
    background: var(--color-bg-primary);
    color: var(--color-fg-primary);
    cursor: pointer;

    &::-ms-expand {
      display: none;
    }
    &:focus {
      outline: none;
    }

    option {
      color: inherit;
      background-color: var(--color-bg-primary);
    }
  }
}

</style>
