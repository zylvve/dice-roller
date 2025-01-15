<script setup lang="ts">
import MainArea from './components/main-area/MainArea.vue';
import HeaderPanel from './components/header/HeaderPanel.vue';
import { ref } from 'vue';

const theme = ref<string>("night-owl");
const setTheme = (t: string) => {
  theme.value = t;
}
</script>

<template>
  <div class="app-container" :data-theme="theme">
    <HeaderPanel @set-theme="setTheme"></HeaderPanel>
    <MainArea/>
  </div>
</template>

<style>
@import "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap";

body {
  font-family: 'Open Sans';
}

</style>
