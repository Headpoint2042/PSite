<script setup lang="ts">
interface Entry {
  title: string
  org: string
  date: string
  description?: string
  programLink?: string
  mapLink?: string
}

const education: Entry[] = [
  {
    title: 'MSc Computer Science',
    org: 'TU Delft, Delft, Netherlands',
    date: 'Sep 2025 - Present',
    description: 'Fields of study: Cyber Security, Software Engineering.',
    programLink: 'https://www.tudelft.nl/onderwijs/opleidingen/masters/cs/msc-computer-science',
    mapLink:
      'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c5b58e7e597879:0x3d1e05e58c2c037c?sa=X&ved=1t:8290&ictx=111',
  },
  {
    title: 'BSc Technical Computer Science',
    org: 'University of Twente, Enschede, Netherlands',
    date: 'Sep 2022 - Jul 2025',
    description:
      'Fields of study: Software Systems, Network Systems, Data & Information, Computer Systems, Cyber Security.',
    programLink: 'https://www.utwente.nl/onderwijs/bachelor/opleidingen/technical-computer-science/',
    mapLink:
      'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47b813d992e2ab01:0x790b33d6b663608f?sa=X&ved=1t:8290&ictx=111',
  },
  {
    title: 'Graduation Diploma',
    org: 'IP Theoretical Lyceum "Ion Creangă", Chișinău, Moldova',
    date: 'Aug 2010 - Jun 2022',
    programLink: 'https://creanga.md/',
    mapLink:
      'https://www.google.com/maps/place//data=!4m2!3m1!1s0x40c97ce10cf28533:0x55219c5e41a017ac?sa=X&ved=1t:8290&ictx=111',
  },
]

// TODO: certificates section - not yet populated, wire up when available.
// const certificates: Entry[] = []
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
          <div v-if="item.programLink || item.mapLink" class="mt-3 flex gap-4 font-mono text-xs">
            <a
              v-if="item.programLink"
              :href="item.programLink"
              target="_blank"
              rel="noopener noreferrer"
              class="text-cyan hover:glow-cyan"
            >
              program &rarr;
            </a>
            <a
              v-if="item.mapLink"
              :href="item.mapLink"
              target="_blank"
              rel="noopener noreferrer"
              class="text-violet hover:text-cyan"
            >
              map &rarr;
            </a>
          </div>
        </li>
      </ul>
    </div>

    <!--
      TODO: certificates section, uncomment and populate `certificates` above once available.
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
    -->
  </section>
</template>
