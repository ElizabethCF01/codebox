<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponent from './components/shared/NavbarComponent.vue'
</script>

<template>
  <NavbarComponent />
  <main class="pt-[74px]">
    <RouterView />
  </main>
</template>

<style scoped></style>
