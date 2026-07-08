<script setup lang="ts">
interface Project {
  name: string
  description: string
  link?: string
  tags: string[]
}

const projects: Project[] = [
  {
    name: 'Project One',
    description: 'A short description of what this project does and why you built it.',
    link: 'https://github.com/your-username/project-one',
    tags: ['Vue', 'TypeScript'],
  },
]
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-20">
    <p class="font-mono text-sm text-magenta">// build_log</p>
    <h1
      data-text="Projects"
      class="glitch mt-3 font-mono text-3xl font-bold text-slate-100 glow-cyan"
    >
      Projects
    </h1>

    <div class="mt-12 grid gap-5 sm:grid-cols-2">
      <a
        v-for="project in projects"
        :key="project.name"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="neon-border block rounded-lg bg-panel/60 p-5"
      >
        <h2 class="glitch-target font-mono font-medium text-slate-100">{{ project.name }}</h2>
        <p class="mt-2 text-sm text-slate-400">{{ project.description }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="rounded-full border border-violet/40 bg-violet/10 px-2 py-0.5 font-mono text-xs text-violet"
          >
            {{ tag }}
          </span>
        </div>
      </a>
    </div>
  </section>
</template>
