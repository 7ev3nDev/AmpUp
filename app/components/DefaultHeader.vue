<script setup lang="ts">
import SvgLogo from '~/assets/svg/logo.svg'
</script>

<template>
<header>
  <div class="left">
    <NuxtLink to="/about">About</NuxtLink>
  </div>
  <div class="center">
    <NuxtLink to="/">
      <SvgLogo
          :style="{
        height: '44px',
        width: '44px',
      }"
          :font-controlled="false"
          :filled="true"
      />
    </NuxtLink>
  </div>
  <div class="right">
    <div class="profile">
      <!--   TODO: make profile image change if user is not logged in   -->
      <img src="" alt="">
    </div>
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
  padding: 16px 36px 10px;
  background-color: rgba(90, 90, 90, 0.4);
  border-radius: 24px;

  backdrop-filter: blur(8px);
  
  & :is(.left, .right) {
    flex: 1;
  }

  box-shadow: 
      0 0 25px rgba(0, 0, 0, 0.2),
      0 6px 8px rgba(0, 0, 0, 0.4),
      inset -1px -1px 1px rgba(255, 255, 255, 0.5),
      inset 2px 2px 1px rgba(255, 255, 255, 0.5);
  
  & > div.left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    
    & > a {
      font-size: 17px;
      font-weight: 500;
      color: #fff;
      text-decoration: none;
      line-height: 16px;
      
      &.router-link-active {
        color: #FFCC00;
      }
      
      &:hover {
        text-decoration: underline;
        text-decoration-color: #FFCC00;
      }
    }
  }
  
  & > div.right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    
    gap: 8px;
    
    & > span.username {
      font-size: 16px;
      font-weight: bold;
    }
    
    & > div.profile {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
}

</style>