<script setup lang="ts">
import { store } from '../../store'
</script>

<template>
  <div class="theme-picker">
    <span class="theme">{{ $t('message.theme') }}</span>
    <span class="dark" @click="store.setTheme('night-owl')">
      {{ $t('message.dark') }}
    </span>
    <span class="light" @click="store.setTheme('night-owl-light')">
      {{ $t('message.light') }}
    </span>
  </div>
</template>

<style>
.theme-picker {
  display: flex;
}

.theme-picker span {
  padding: 0 0.3em;
}

.theme-picker .dark {
  background-color: #011627;
  color: #d6deeb;
}

.theme-picker .light {
  background-color: #ffffff;
  color: #403f53;
}
</style>
