<template>
  <h1 class="text-4xl font-bold text-center mt-12 text-orange-800">
    {{ t('message.services') }}
  </h1>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
</script>

<style lang="css" scoped></style>