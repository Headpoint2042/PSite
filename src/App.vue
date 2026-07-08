<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import GlitchOverlay from './components/GlitchOverlay.vue'
</script>

<template>
  <div class="min-h-screen">
    <GlitchOverlay />
    <NavBar />
    <RouterView />
  </div>
</template>
