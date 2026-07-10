<script setup lang="ts">
interface Project {
  name: string
  description: string
  link?: string
  tags: string[]
}

const projects: Project[] = [
  {
    name: 'Agent Smith (peon-ping pack)',
    description:
      'A custom voice/sound pack for peon-ping, giving Claude Code an Agent Smith-themed audio cue for session start, task completion, input requests, and more.',
    link: 'https://github.com/Headpoint2042/PSite/tree/main/public/sounds/agent-smith',
    tags: ['Audio', 'Tooling'],
  },
  {
    name: 'Dockerfile Carbon Optimizer (DCO)',
    description:
      'CLI tool that scans Dockerfiles for energy-wasteful patterns and estimates the CO2 cost of inefficient container images. Group project.',
    link: 'https://github.com/cs4575-g228/cs4575-g228-implementation',
    tags: ['Python', 'Docker', 'Research'],
  },
  {
    name: 'Zip Wars',
    description:
      'Empirical study benchmarking the energy consumption of 7-Zip, gzip, and Zstandard across data types and workloads. Group project.',
    link: 'https://github.com/prajusth/SSE_P1',
    tags: ['Python', 'Research'],
  },
  {
    name: 'lisa-library',
    description:
      'Real-world project built for the University of Twente library: ingests sensor data, runs analysis and calculations, and presents it through role-based dashboards (admin/student) with data visualizations and graphs.',
    // link intentionally omitted: repository is private
    tags: ['Private', 'Vue', 'Python', 'Data Visualization'],
  },
  {
    name: 'Rythmly',
    description:
      'Rhythm-training tool with a built-in metronome and AI-powered feedback for musicians. Built as an HCI course prototype.',
    link: 'https://github.com/Headpoint2042/Rythmly',
    tags: ['Vue', 'Flask'],
  },
  {
    name: 'stack-my-lang',
    description:
      'Haskell compiler boilerplate for a custom language, including a parser and code generation targeting SPRIL.',
    link: 'https://github.com/Headpoint2042/stack-my-lang',
    tags: ['Haskell'],
  },
  {
    name: 'CarboCore',
    description:
      '2D-focused game engine built in C++ with OpenGL, structured as a shared library with a Hazel-style architecture and a Sandbox app for testing.',
    link: 'https://github.com/Headpoint2042/CarboCore',
    tags: ['C++', 'OpenGL'],
  },
  {
    name: 'ToDoApp',
    description:
      'Task management app for creating, organizing, and tracking tasks across workflow stages.',
    link: 'https://github.com/Headpoint2042/ToDoApp',
    tags: ['Laravel', 'PHP', 'Vue'],
  },
  {
    name: 'PrologSudoku',
    description:
      'Sudoku solver in SWI-Prolog with three approaches: brute-force candidate generation, constraint propagation via naked/hidden singles, and a clpfd-based version that is dramatically faster.',
    link: 'https://github.com/Headpoint2042/PrologSudoku',
    tags: ['Prolog'],
  },
  {
    name: 'DODA-practice',
    description:
      'DevOps practice exercises covering Docker, virtual machine provisioning with Vagrant and Ansible, and Kubernetes deployment patterns.',
    link: 'https://github.com/Headpoint2042/DODA-practice',
    tags: ['DevOps', 'Docker', 'Kubernetes'],
  },
  {
    name: 'PCloud',
    description: 'Personal cloud/DevOps project, currently in early stages.',
    link: 'https://github.com/Headpoint2042/PCloud',
    tags: ['DevOps'],
  },
  {
    name: 'DodgeIT',
    description:
      '2D platformer built in GameMaker Studio where you dodge spikes and ghost fire, surviving as long as possible while difficulty escalates over time.',
    link: 'https://github.com/Headpoint2042/DodgeIT',
    tags: ['GameMaker', 'Game Dev'],
  },
  {
    name: 'Tikkie',
    description:
      'Personal learning project recreating the core functionality of the Tikkie app, letting users split bills and request money from friends within organized groups.',
    link: 'https://github.com/Headpoint2042/Tikkie',
    tags: ['Laravel', 'PHP', 'Vue'],
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
      <component
        :is="project.link ? 'a' : 'div'"
        v-for="project in projects"
        :key="project.name"
        :href="project.link"
        :target="project.link ? '_blank' : undefined"
        :rel="project.link ? 'noopener noreferrer' : undefined"
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
      </component>
    </div>
  </section>
</template>
