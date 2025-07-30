<script setup lang="ts">
import SvgLogo from '~/assets/svg/logo.svg'
</script>

<template>
<header>
  <div>
<!--  LEFT  -->
  </div>
  <div>
<!--  CENTER  -->
    <SvgLogo
      :style="{
        height: '44px',
        width: '44px',
      }"
      :font-controlled="false"
      :filled="true"
    />
  </div>
  <div>
<!--  RIGHT  -->
  </div>
</header>
</template>

<style scoped>
header {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  
  z-index: 100;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  max-width: 680px;
  height: 80px;
  padding: 10px 36px;
  background-color: rgba(90, 90, 90, 0.4);
  border-radius: 24px;

  backdrop-filter: blur(8px);

  box-shadow: 
      0 0 25px rgba(0, 0, 0, 0.2),
      0 6px 8px rgba(0, 0, 0, 0.4),
      inset -1px -1px 1px rgba(255, 255, 255, 0.5),
      inset 2px 2px 1px rgba(255, 255, 255, 0.5);
  
  & > div {
    flex: none;
    order: 2;
    flex-grow: 0;
    z-index: 2;
  }
}

</style>