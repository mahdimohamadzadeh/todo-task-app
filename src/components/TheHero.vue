<template>
  <div>
    <div
      class="card shadow-xl image-full min-h-screen rounded-none overflow-hidden"
    >
      <figure>
        <img class="w-full" src="/tehran.webp" alt="Tehran" />
      </figure>
      <div class="card-body my-auto mx-auto">
        <h2 class="card-title text-2xl md:text-3xl">
          {{ chooseMessage }}, {{ store.getUserName }}.
        </h2>
        <p class="text-xl md:text-2xl md:mt-4">
          {{ `${new Date().getHours()} : ${new Date().getMinutes()}` }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useProfileStore } from "../store/index";

import { useI18n } from "vue-i18n";

const { t } = useI18n();
const store = useProfileStore();
const chooseMessage = computed(() => {
  const hour = new Date().getHours();
  let msg = "";
  switch (true) {
    case hour > 4 && hour < 12:
      msg = t("welcomeMessageForMorning");
      break;
    case hour >= 12 && hour < 19:
      msg = t("welcomeMessageForEvening");
      break;
    default:
      msg = t("welcomeMessageForNight");
  }
  return msg;
});
</script>

<style lang="scss" scoped></style>
