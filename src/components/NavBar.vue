<script setup lang="ts">
const links = [
  { to: '/', label: 'about' },
  { to: '/education', label: 'education' },
  { to: '/projects', label: 'projects' },
]
</script>

<template>
  <nav class="border-b border-cyan/20 backdrop-blur-sm">
    <div class="mx-auto flex max-w-3xl items-center gap-8 px-6 py-5 font-mono text-sm">
      <span class="text-magenta">~/</span>
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="glitch-target tracking-wide text-slate-400 transition-colors duration-200 hover:text-cyan"
        active-class="text-cyan glow-cyan"
      >
        {{ link.label }}
      </RouterLink>
    </div>
  </nav>
</template>
