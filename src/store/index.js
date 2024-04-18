import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useProfileStore = defineStore("profile", {
  state: () => ({ name: "", theme: "", locale: "" }),
  getters: {
    getUserName: (state) => {
      return state.name === "" ? "User" : state.name;
    },
    getLocale: (state) => {
      return state.locale === "" ? "en" : state.locale;
    },
  },
  actions: {
    setTheme(theme) {
      this.theme = theme;
      localStorage.setItem("theme", theme); // Save theme to localStorage
    },
    setUserName(name) {
      this.name = name;
      localStorage.setItem("name", name);
    },
    setLocale(locale) {
      this.locale = locale;
      localStorage.setItem("locale", locale);
    },
    loadUserData() {
      const savedTheme = localStorage.getItem("theme");
      const savedName = localStorage.getItem("name");
      const savedLocale = localStorage.getItem("locale");

      if (savedTheme) {
        this.theme = savedTheme;
      }
      if (savedName) {
        this.name = savedName;
      }
      if (savedLocale) {
        this.locale = savedLocale;
      }
    },
  },
});
