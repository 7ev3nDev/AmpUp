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
      <div class="icon">
        <Icon name="mdi:cog" size="12" />
      </div>
    </div>
  </div>
</header>
</template>

<style scoped lang="scss">
@use '@/assets/css/global' as *;

%header-shadow {
  filter:
      drop-shadow(0 15px 10px rgba(0, 0, 0, 0.3))
      drop-shadow(0 5px 4px rgba(0, 0, 0, 0.22));
}

header {
  position: fixed;
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
  padding: 13px 36px 10px;
  background-color: rgba(90, 90, 90, 0.4);
  border-radius: 24px;

  @extend %glass-base;
  
  & :is(.left, .right) {
    flex: 1;
  }
  
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
      
      background-color: rgba(76, 76, 76, 0.4);
      
      padding: 8px 14px;
      border-radius: 10px;

      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      transition: all 0.3s;
      
       margin-bottom: 2px;
      
      
      &.router-link-active {
        transform: scale(1.03) translateY(-2px);
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 8px 12px rgba(0,0,0,0.22);
        background-color: #FC0;
        color: black;
      }
      
      &:hover {
        transform: scale(1.03) translateY(-2px);
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 8px 12px rgba(0,0,0,0.22);
        background-color: #FC0;
        color: black;
      }
    }
  }
  
  & > div.center {
    svg {
      @extend %header-shadow;
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
      cursor: pointer;
      
      @extend %header-shadow;
      position: relative;
      
      & > div.icon {
        position: absolute;
        bottom: -3px;
        right: -3px;
        
        width: 18px;
        height: 18px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 50%;
      }
    }
  }
}

</style>