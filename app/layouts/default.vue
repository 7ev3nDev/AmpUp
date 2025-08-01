<script setup lang="ts">
const layoutStore = useLayoutStore();

</script>

<template>
  <div>
    <DefaultHeader />
    <main>
      <component
          :is="layoutStore.sidebarContext.component"
          v-if="layoutStore.sidebarContext.component"
          v-bind="layoutStore.sidebarContext.props" />
<!--      <SideBar />-->
      <NuxtPage />
    </main>
    <DefaultFooter />
  </div>
</template>

<style scoped>
main {
  min-height: 100vh;
  max-height: 100vh;
}
</style>