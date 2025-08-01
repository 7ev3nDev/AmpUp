<script setup lang="ts">
defineProps<{
  direction?: 'horizontal' | 'vertical'
  margin?: string
  length?: string
}>()
</script>

<template>
  <div
      :class="[direction]"
      :style="{
    '--margin': margin || '1rem',
    '--length': length || '70%'
  }">
    <!--    -->
  </div>
</template>

<style scoped>
div {
  --margin: 1rem;
  --length: 70%;
  
  display: block;
  background-color: rgba(255, 255, 255, 0.6);
  margin: var(--margin);

  &.vertical {
    width: 2px;
    height: var(--length);
    margin-block: 0;
  }

  &.horizontal {
    height: 2px;
    width: var(--length);
    margin-inline: 0;
  }
}
</style>