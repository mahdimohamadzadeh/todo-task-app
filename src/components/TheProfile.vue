<template>
  <div class="flex flex-col lg:mt-20">
    <input
      type="text"
      placeholder="Name"
      class="input input-bordered input-accent w-full"
      v-model="userName"
      @input="saveUsername"
    />
    <section class="mt-4">
      <select
        id="themeSelect"
        v-model="selectedTheme"
        @change="setTheme"
        data-choose-theme
        class="select select-accent w-full"
      >
        <option value="" selected disabled>Theme</option>
        <option value="light">Light theme</option>
        <option value="dark">Dark theme</option>
        <option value="valentine">Pink theme</option>
      </select>
    </section>
    <section class="mt-4">
      <select
        id="languageSelect"
        v-model="selectedLanguage"
        @change="switchLanguage"
        class="select select-accent w-full"
      >
        <option value="" selected disabled>Locale</option>
        <option value="en">en</option>
        <option value="fa">fa</option>
      </select>
    </section>
  </div>
</template>

<script setup>
import { useProfileStore } from "../store/index";
import { useI18n } from "vue-i18n";

const store = useProfileStore();
const i18n = useI18n();

const selectedTheme = ref(store.theme);
const userName = ref(store.name);
const selectedLanguage = ref(i18n.locale);

const setTheme = () => {
  store.setTheme(selectedTheme.value);
};
const saveUsername = () => {
  store.setUserName(userName.value);
};
const switchLanguage = () => {
  i18n.locale = selectedLanguage.value;
  store.setLocale(selectedLanguage.value);
  let htmlEl = document.querySelector("html");
  if (selectedLanguage.value == "fa") {
    htmlEl.setAttribute("dir", "rtl");
  } else {
    htmlEl.setAttribute("dir", "ltr");
  }
};
</script>

<style lang="scss" scoped></style>
