<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <NavAppLogo />

          <NavAppMenu />
        </div>

        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6 gap-x-2">
            <NavAppLanguageSelect />

            <NavAppNotifications />

            <NavAppUserDropdown />
          </div>
        </div>

        <NavAppMobileButton />
      </div>
    </div>

    <NavAppMobileMenu />
  </nav>
</template>

<script setup>
  import NavAppLanguageSelect from './NavAppLanguageSelect.vue';
  import NavAppLogo from './NavAppLogo.vue';
  import NavAppMenu from './NavAppMenu.vue';
  import NavAppMobileButton from './NavAppMobileButton.vue';
  import NavAppMobileMenu from './NavAppMobileMenu.vue';
  import NavAppNotifications from './NavAppNotifications.vue';
  import NavAppUserDropdown from './NavAppUserDropdown.vue';

</script>

<style lang="css" scoped></style>