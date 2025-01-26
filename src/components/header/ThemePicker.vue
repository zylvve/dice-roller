<script setup lang="ts">
import { store } from '../../store'
import { availableThemes } from '../../themes';

</script>

<template>
  <div class="setting theme-picker">
    <span class="theme">{{ $t('message.theme') }}</span>
    <select v-model="store.theme">
      <option v-for="theme in availableThemes" :key="`theme-${theme.label}`" :value="theme.value">
        {{ $t(`message.${theme.label}`) }}
      </option>
    </select>
  </div>
</template>
