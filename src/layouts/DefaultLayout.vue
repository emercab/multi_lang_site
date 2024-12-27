<template>
  <div class="min-h-full">
    <NavApp />

    <HeaderApp />

    <MainContent>
      <router-view />
    </MainContent>
  </div>
</template>

<script setup>
  import HeaderApp from '@/components/HeaderApp.vue';
  import MainContent from '@/components/MainContent.vue';
  import NavApp from '@/components/NavApp.vue';
</script>

<style lang="css" scoped></style>