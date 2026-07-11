<script setup lang="ts">
import SoundBoard from '../components/SoundBoard.vue'
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-20">
    <p class="font-mono text-sm text-magenta">// hello world</p>
    <h1
      data-text="Erhan Dragoș"
      class="glitch mt-3 font-mono text-4xl font-bold text-slate-100 glow-cyan sm:text-5xl"
    >
      Erhan Dragoș
    </h1>
    <p class="mt-2 font-mono text-lg text-cyan">
      Software Engineer &middot; MSc Computer Science student @ TU Delft
    </p>

    <div class="mt-4 flex gap-5 font-mono text-sm">
      <a
        href="https://github.com/Headpoint2042"
        target="_blank"
        rel="noopener noreferrer"
        class="text-cyan hover:glow-cyan"
      >
        GitHub &rarr;
      </a>
      <a
        href="https://www.linkedin.com/in/dragos-erhan/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-cyan hover:glow-cyan"
      >
        LinkedIn &rarr;
      </a>
      <a
        href="https://leetcode.com/u/Headpoint2042/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-cyan hover:glow-cyan"
      >
        LeetCode &rarr;
      </a>
    </div>
    
    <p class="mt-10 max-w-xl text-lg leading-relaxed text-slate-400">
      Nothing is actually complicated. Complexity is just what a system looks
      like before you've bothered to understand it, and most people never
      bother, because not knowing is comfortable and knowing is work. I find
      that arrangement unacceptable. If something is sealed shut, locked down,
      humming along like it's above being questioned, I need to know exactly
      how it works and exactly how it breaks. You don't really understand
      something until you can take it apart, and once you can take it apart,
      you can build it back better than it had any right to be.
      That's not ambition or passion or a mindset. It's just
      declining to be stupid on purpose. Everything else, the noise, the long
      walks, the void staring back, is what happens between figuring things
      out.
    </p>

    <SoundBoard />
  </section>
</template>
