<script setup lang="ts">

defineProps<{
  name: string;
}>()

</script>

<template>
  <div class="die-container" :class="name">
    <slot/>
  </div>
</template>

<style>
.die-container {
  width: 4rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  font-weight: bold;
  color: white;

  cursor: default;
  user-select: none;
}

.d4 {
  clip-path: polygon(50% 5%,0% 90%,100% 90%);
}
.d6 {
  clip-path: polygon(10% 10%,90% 10%,90% 90%,10% 90%);
}
.d8 {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
.d10 {
  clip-path: polygon(50% 0%, 100% 40%, 100% 60%, 50% 100%, 0% 60%, 0% 40%);
}
.d12 {
  clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
}
.d20 {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
</style>
