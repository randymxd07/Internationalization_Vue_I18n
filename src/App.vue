<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// AVAILABLE LANGUAGES //
const languages = ['en', 'es'];

// SELECTED LANGUAGE BY DEFAULT //
const selectedLanguage = ref(locale.value);

// CHANGE THE SELECTED LANGUAGE //
const changeLanguage = () => {
  locale.value = selectedLanguage.value;
};
</script>

<template>

  <!-- HEADER -->
  <header>

    <!-- VUE LOGO -->
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <!-- HELLO WORLD COMPONENT AND SELECT -->
    <div class="wrapper">

      <!-- HELLO WORLD COMPONENT -->
      <HelloWorld :msg="$t('HelloWorld.message1')" />

      <!-- SELECT -->
      <select class="custom-select" v-model="selectedLanguage" @change="changeLanguage">
        <option v-for="(lang, index) in languages" :key="index" :value="lang">
          {{ lang }}
        </option>
      </select>

    </div>

  </header>

  <!-- THE WELCOME COMPONENT -->
  <main>
    <TheWelcome />
  </main>

</template>

<style scoped>

/* PERSONALIZED STYLES FOR THE SELECT */
.custom-select {
  margin-top: 20px;
  display: inline-block;
  width: 200px;
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: #fff url('data:image/svg+xml,<svg viewBox="0 0 4 5" xmlns="http://www.w3.org/2000/svg"><path d="M2 0L0 2h4zm0 5L0 3h4z" fill="%23343a40" fill-opacity="0.54"/></svg>') no-repeat right 0.75rem center;
  background-size: 8px 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.custom-select:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
