<script setup lang="ts">
const mapStore = useMapStore()
</script>

<template>
<aside>
  <h3>Events nearby</h3>
  {{ mapStore.center }}
</aside>
</template>

<style scoped>
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

  backdrop-filter: blur(8px);
  box-shadow:
      0 0 25px rgba(0, 0, 0, 0.2),
      0 6px 8px rgba(0, 0, 0, 0.4),
      inset -1px -1px 1px rgba(255, 255, 255, 0.5),
      inset 2px 2px 1px rgba(255, 255, 255, 0.5);
}

</style>