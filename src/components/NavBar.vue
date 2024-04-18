<template>
  <div class="absolute top-0 w-full">
    <div class="navbar bg-base-200">
      <div class="flex-none">
        <div class="drawer">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <!-- Page content here -->
            <label
              for="my-drawer"
              class="btn btn-square btn-ghost drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path></svg
            ></label>
          </div>
          <div class="drawer-side">
            <label
              for="my-drawer"
              aria-label="close sidebar"
              class="drawer-overlay"
            ></label>
            <side-bar></side-bar>
          </div>
        </div>
      </div>
      <div class="flex-1 navbar-end">
        <a class="btn btn-ghost text-xl 2xl:text-3xl">TaskApp</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "./SideBar.vue";
</script>

<style lang="scss" scoped></style>
