<script setup lang="ts">
interface Entry {
  title: string
  org: string
  date: string
  description?: string
}

const education: Entry[] = [
  {
    title: 'Degree Name',
    org: 'University Name',
    date: '20XX - 20XX',
    description: 'Brief description of the program or focus area.',
  },
]

const certificates: Entry[] = [
  {
    title: 'Certificate Name',
    org: 'Issuing Organization',
    date: '20XX',
  },
]
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-20">
    <p class="font-mono text-sm text-magenta">// history.log</p>
    <h1
      data-text="Education &amp; Certificates"
      class="glitch mt-3 font-mono text-3xl font-bold text-slate-100 glow-cyan"
    >
      Education &amp; Certificates
    </h1>

    <div class="mt-12">
      <h2 class="font-mono text-lg text-cyan">education</h2>
      <ul class="mt-4 space-y-6">
        <li
          v-for="item in education"
          :key="item.title"
          class="neon-border rounded-lg bg-panel/60 p-5"
        >
          <p class="glitch-target font-medium text-slate-100">{{ item.title }}</p>
          <p class="font-mono text-xs text-slate-500">
            {{ item.org }} &middot; {{ item.date }}
          </p>
          <p v-if="item.description" class="mt-2 text-slate-400">
            {{ item.description }}
          </p>
        </li>
      </ul>
    </div>

    <div class="mt-12">
      <h2 class="font-mono text-lg text-cyan">certificates</h2>
      <ul class="mt-4 space-y-6">
        <li
          v-for="item in certificates"
          :key="item.title"
          class="neon-border rounded-lg bg-panel/60 p-5"
        >
          <p class="glitch-target font-medium text-slate-100">{{ item.title }}</p>
          <p class="font-mono text-xs text-slate-500">
            {{ item.org }} &middot; {{ item.date }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
