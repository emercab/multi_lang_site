<template>
  <div class="flex items-center">
    <select
      class="rounded-md border border-gray-400 bg-gray-700 text-gray-300 h-8 px-3 focus:outline-none focus:ring focus:ring-blue-500"
      ref="selectLanguages" v-model="selectedLocale" @change="changeLanguage">
      <option v-for="language in languages" :key="language.locale" :value="language.locale">
        {{ language.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';

  import languages from '@/utils/languages';

  const { locale } = useI18n();
  const selectLanguages = ref(null); // Ref to the select element
  const selectedLocale = ref('en'); // Selected locale
  const selectedLang = ref(''); // Selected language name

  const allLanguages = Object.values(languages);

  // Set the default language when the component is mounted
  onMounted(() => {
    const defaultLanguage = allLanguages.find((lang) => lang.locale === selectedLocale.value);

    if (defaultLanguage) {
      selectedLang.value = defaultLanguage.name; // Set the initial language name
      locale.value = selectedLocale.value; // Cambia el idioma global
    }
  });

  const changeLanguage = () => {
    // Get the language name from the locale selected
    const selectedLanguage = allLanguages.find((lang) => lang.locale === selectedLocale.value);

    if (selectedLanguage) {
      // Update the reactive variables
      selectedLocale.value = selectedLanguage.locale; // Save the selected locale
      locale.value = selectedLocale.value; // Change the global language
      selectedLang.value = selectedLanguage.name; // Save the selected language name
    } else {
      console.warn("Idioma seleccionado no encontrado.");
    }
  }
</script>

<style lang="css" scoped></style>