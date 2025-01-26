<script setup lang="ts">
defineEmits<{
  setTheme: [theme: string]
}>()
</script>

<template>
  <div class="theme-picker">
    <span class="theme">{{ $t('message.theme') }}</span>
    <span class="dark" @click="$emit('setTheme', 'night-owl')">{{ $t('message.dark') }}</span>
    <span class="light" @click="$emit('setTheme', 'night-owl-light')">{{ $t('message.light') }}</span>
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
