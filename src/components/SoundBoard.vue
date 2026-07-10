<script setup lang="ts">
import { ref } from 'vue'

interface Sound {
  label: string
  file: string
}

const sounds: Sound[] = [
  { label: 'Ready to work?', file: 'session_start.mp3' },
  { label: 'Done.', file: 'task_complete.mp3' },
  { label: 'Need your input.', file: 'input_required.mp3' },
  { label: 'Hitting a limit.', file: 'resource_limit.mp3' },
  { label: 'Slow down.', file: 'user_spam.wav' },
]

const audio = ref<HTMLAudioElement>()
const playing = ref<string | null>(null)

function play(file: string) {
  if (!audio.value) return
  audio.value.src = `${import.meta.env.BASE_URL}sounds/agent-smith/sounds/${file}`
  playing.value = file
  audio.value.play().catch(() => {
    // Interrupted by another click or failed to load; only clear if no newer sound took over.
    if (playing.value === file) playing.value = null
  })
}

function onStopped() {
  playing.value = null
}
</script>

<template>
  <div class="mt-16 border-t border-cyan/20 pt-8">
    <p class="font-mono text-sm text-magenta">// agent_smith.pack</p>
    <p class="mt-2 text-sm text-slate-400">
      An Agent Smith sound pack I built for peon-ping. Click one (audio, mind
  your volume).
    </p>
    <div class="mt-3 flex flex-wrap gap-2">
      <button
        v-for="sound in sounds"
        :key="sound.file"
        type="button"
        class="neon-border glitch-target rounded-lg bg-panel/60 px-3 py-2 font-mono text-xs text-slate-300 transition-colors hover:text-cyan"
        :class="{ 'text-cyan glow-cyan': playing === sound.file }"
        @click="play(sound.file)"
      >
        {{ sound.label }}
      </button>
    </div>
    <audio ref="audio" @ended="onStopped" @error="onStopped" />
  </div>
</template>
