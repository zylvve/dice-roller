<script setup lang="ts">

defineProps<{
  type: "add-die" | "roll-die";
  name: string;
}>()

defineEmits(['delete-btn-press'])

</script>

<template>
  <div class="die-container" :class="type">
    <div class="die-shape" :class="name">
      <slot/>
      <div class="inner-shape"></div>
    </div>
    <button
      v-if="type === 'roll-die'"
      class="delete-btn"
      @click="$emit('delete-btn-press')"
    >
    x
    </button>
  </div>
</template>

<style>
.die-container {
  position: relative;
}

.die-shape {
  width: 4rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;

  cursor: default;
  user-select: none;

  position: relative;
}

.inner-shape {
  position: absolute;
  z-index: -1;

  width: 90%;
  height: 90%;

  background-color: var(--color-bg-primary);
}

.d4 {
  clip-path: polygon(50% 5%,0% 90%,100% 90%);
  background-color: var(--color-die-1);
  color: var(--color-die-1);
}
.d4 .inner-shape {
  clip-path: polygon(50% 5%,0% 90%,100% 90%);
}

.d6 {
  clip-path: polygon(10% 10%,90% 10%,90% 90%,10% 90%);
  background-color: var(--color-die-2);
  color: var(--color-die-2);
}
.d6 .inner-shape{
  clip-path: polygon(10% 10%,90% 10%,90% 90%,10% 90%);
}

.d8 {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background-color: var(--color-die-3);
  color: var(--color-die-3);
}
.d8 .inner-shape{
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.d10 {
  clip-path: polygon(50% 0%, 100% 40%, 100% 60%, 50% 100%, 0% 60%, 0% 40%);
  background-color: var(--color-die-4);
  color: var(--color-die-4);
}
.d10 .inner-shape{
  clip-path: polygon(50% 0%, 100% 40%, 100% 60%, 50% 100%, 0% 60%, 0% 40%);
}

.d12 {
  clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
  background-color: var(--color-die-5);
  color: var(--color-die-5);
}
.d12 .inner-shape{
  clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
}

.d20 {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background-color: var(--color-die-6);
  color: var(--color-die-6);
}
.d20 .inner-shape{
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.delete-btn {
  position: absolute;
  top: -35%;
  left: 50%;
  transform: translateX(-50%);

  border: none;
  outline: none;
  background-color: transparent;
  color: var(--color-fg-prmiary);

  display: none;
}

.die-container:hover .delete-btn {
  display: block;
}

</style>
