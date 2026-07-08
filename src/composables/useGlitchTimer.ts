import { onMounted, onUnmounted } from 'vue'

/** Repeatedly invokes `callback` after a random delay between minSeconds and maxSeconds. */
export function useGlitchTimer(callback: () => void, minSeconds = 30, maxSeconds = 45) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  const scheduleNext = () => {
    const delay = (minSeconds + Math.random() * (maxSeconds - minSeconds)) * 1000
    timeoutId = setTimeout(() => {
      callback()
      scheduleNext()
    }, delay)
  }

  onMounted(scheduleNext)
  onUnmounted(() => clearTimeout(timeoutId))
}
