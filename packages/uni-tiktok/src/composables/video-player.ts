import { inject, getCurrentInstance } from 'vue'
import type { Ref } from 'vue'

export type VideoContext = ReturnType<typeof uni.createVideoContext>

export const VIDEO_INJECTION_KEY = Symbol.for('video-player')

export const DEFAULT_VIDEO_PLAYER_ID = '__UX_DEFAULT_VIDEO_PLAYER__'

export const useVideoContext = (id: string = DEFAULT_VIDEO_PLAYER_ID) => {
  const vm = getCurrentInstance()
  return uni.createVideoContext(id, vm?.proxy)
}

export type VideoPlayer = {
  paused: Ref<boolean>
  play(): void
  pause(): void
  toggle(): void
}

export const useVideoPlayer = (): VideoPlayer => {
  const provider = inject(VIDEO_INJECTION_KEY) as VideoPlayer

  if (provider == null) {
    throw new TypeError(`未找到视频播放器的注入的实例`)
  }

  return provider
}
