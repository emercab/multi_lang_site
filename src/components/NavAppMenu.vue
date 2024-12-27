<template>
  <div class="hidden md:block">
    <div class="ml-10 flex items-baseline space-x-4">
      <!-- <a href="#" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
        aria-current="page">Dashboard</a> -->
      <NavAppMenuItem :text="t('message.home')" route="/" :active="true" />
      <NavAppMenuItem :text="t('message.about')" route="/about" />
      <NavAppMenuItem :text="t('message.contactUs')" route="/contact-us" />
      <NavAppMenuItem :text="t('message.services')" route="/services" />
      <NavAppMenuItem :text="t('message.portfolio')" route="/portfolio" />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import NavAppMenuItem from './NavAppMenuItem.vue';

const { t } = useI18n();
</script>

<style lang="css" scoped></style>