<template>
  <div class="w-80 min-h-full bg-base-200 text-base-content">
    <ul class="menu p-4">
      <!-- Sidebar content here -->
      <li><router-link to="/"> > Dashboard</router-link></li>
      <li><router-link to="todos"> > Todos</router-link></li>
      <li><router-link to="weather"> > Weather</router-link></li>
      <li><router-link to="profile"> > Profile</router-link></li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-active,
.router-link-exact-active {
  color: chartreuse;
  font: bold;
  font-size: 20px;
  cursor: pointer;
}
</style>
