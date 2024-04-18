import "./style.css";

import App from "./App.vue";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createPinia } from "pinia";
import router from "./router/index";

const pinia = createPinia();
const app = createApp(App);

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: "en",
  fallbackLocale: "fa",
  messages: {
    en: {
      welcomeMessageForMorning: "Have a good day",
      welcomeMessageForEvening: "Good evening",
      welcomeMessageForNight: "Good night",
      todoList: "TODO list!",
      add: "Add",
      WriteYourTodo: "Write your todo:",
      cancel: "cancel",
      edit: "edit",
      delete: "delete",
      searchForCity: "Search for a city:",
    },
    fa: {
      welcomeMessageForMorning: "روز خوبی داشته باشید",
      welcomeMessageForEvening: "عصر بخیر",
      welcomeMessageForNight: "شب بخیر",
      todoList: "لیست برنامه ها",
      add: "اضافه",
      WriteYourTodo: "برنامه خود را بنویسید",
      cancel: "انصراف",
      edit: "ویرایش",
      delete: "حذف",
      searchForCity: "جستجوی شهر:",
    },
  },
});

app.use(router);
app.use(pinia);
app.use(i18n);
app.mount("#app");
