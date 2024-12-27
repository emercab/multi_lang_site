<template>
  <RouterLink :to="route"
    class="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    :class="activeClass">
    {{ text }}
  </RouterLink>
</template>

<script setup>
  import { computed } from 'vue';

  const { text, route, active } = defineProps({
    text: { type: String, required: true },
    route: { type: String, required: true },
    active: { type: Boolean, default: false }
  })

  const activeClass = computed(() => active ? 'active' : '')
</script>

<style lang="css" scoped>
  .active {
    @apply bg-gray-900 text-white;
  }
</style>