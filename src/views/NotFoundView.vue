<template>
  <section class="mx-auto max-w-3xl px-6 py-20">
    <p class="font-mono text-sm text-magenta">// segfault</p>
    <h1
      data-text="404"
      class="glitch mt-3 font-mono text-4xl font-bold text-slate-100 glow-cyan sm:text-5xl"
    >
      404
    </h1>
    <p class="mt-2 font-mono text-lg text-cyan">signal SIGSEGV, Segmentation fault.</p>
    <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
      This page doesn't exist. Maybe it never did. Maybe you dereferenced
      something you shouldn't have.
    </p>
    <RouterLink to="/" class="mt-6 inline-block font-mono text-sm text-cyan hover:glow-cyan">
      cd ~/ &rarr;
    </RouterLink>
  </section>
</template>
