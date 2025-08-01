<script setup lang="ts">
import Divisor from "~/components/ui/Divisor.vue";

const mapStore = useMapStore()
</script>

<template>
<aside>
  <h3>Nearby you</h3>
  <Divisor direction="horizontal" length="60%" />
  {{ mapStore.center }}
</aside>
</template>

<style scoped lang="scss">
@use '~/assets/css/global' as *;

aside {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  height: 80%;
  max-height: 700px;
  width: 400px;

  padding: 36px 10px;
  background-color: rgba(90, 90, 90, 0.4);
  border-radius: 24px;

  @extend %glass-base;
}

</style>