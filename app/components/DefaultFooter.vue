<script setup lang="ts">
import SvgLogo from '~/assets/svg/logo.svg'
</script>

<template>
<footer>
  <NuxtLink to="/">
    <div class="logomark">
      <SvgLogo
          :style="{
        height: '26px',
        width: '26px',
        marginBottom: '2px',
      }"
          :font-controlled="false"
      />
      AmpUp
    </div>
  </NuxtLink>
</footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  
  z-index: 100;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  & > a {
    text-decoration: none;
    color: inherit;
  }
  
  & div.logomark {
    font-size: 22px;
    font-weight: 700;
    
    color: #FC0;
    
    display: flex;
    align-items: center;
    gap: 8px;
    
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
    filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.6));
  }
}
</style>