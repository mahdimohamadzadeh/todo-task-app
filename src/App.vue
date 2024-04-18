<template>
  <div :data-theme="store.theme" class="min-h-screen overflow-hidden">
    <nav-bar class="z-50"></nav-bar>
    <router-view />
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import { useProfileStore } from "./store/index";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
const store = useProfileStore();
const i18n = useI18n();

onMounted(() => {
  store.loadUserData();
  i18n.locale.value = store.getLocale;
  let htmlEl = document.querySelector("html");
  if (i18n.locale.value == "fa") {
    htmlEl.setAttribute("dir", "rtl");
    htmlEl.setAttribute("lang", "fa");
  }
});
</script>
<style scoped></style>
