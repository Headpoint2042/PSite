<script setup lang="ts">
import { ref } from 'vue'
import { useGlitchTimer } from '../composables/useGlitchTimer'

const active = ref(false)

useGlitchTimer(() => {
  active.value = true
  setTimeout(() => {
    active.value = false
  }, 220)
}, 30, 45)

useGlitchTimer(() => {
  const targets = document.querySelectorAll<HTMLElement>('.glitch-target')
  if (targets.length > 0) {
    const el = targets[Math.floor(Math.random() * targets.length)]
    el.classList.add('glitching')
    setTimeout(() => el.classList.remove('glitching'), 220)
  }
}, 2, 4)
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-50" :class="{ 'screen-glitch': active }" aria-hidden="true" />
</template>
