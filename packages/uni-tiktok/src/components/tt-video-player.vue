<script lang="ts" setup>
import { provide, ref } from 'vue'

import {
  VIDEO_INJECTION_KEY,
  DEFAULT_VIDEO_PLAYER_ID,
  useVideoContext
} from '../composables'
import type { VideoPlayer } from '../composables'

const props = defineProps({
  id: {
    type: String,
    default: DEFAULT_VIDEO_PLAYER_ID
  },
  initialTime: {
    type: Number,
    default: 0
  },
  src: String
})

const paused = ref<boolean>(true)
const videoContext = useVideoContext(props.id)

const play = (): void => {
  paused.value = false
  videoContext.play()
}

const pause = (): void => {
  paused.value = true
  videoContext.pause()
}

const toggle = () => {
  paused.value ? play() : pause()
}

const player: VideoPlayer = {
  paused,
  play,
  pause,
  toggle
}

defineExpose(player)
provide(VIDEO_INJECTION_KEY, player)
</script>

<template>
  <video
    v-if="src"
    :id="id"
    class="tt-video-player"
    :src="src"
    loop
    :controls="false"
    :show-center-play-btn="false"
    :show-play-btn="false"
    :show-progress="false"
    :show-fullscreen-btn="false"
    object-fit="cover"
  >
    <cover-view>
      <slot v-bind="{ paused }">
        <tt-video-player-play-btn></tt-video-player-play-btn>
      </slot>
    </cover-view>
  </video>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('video-player', 'tt') {
  position: relative;
  width: 100%;
  height: 100%;

  @include element('video') {
    width: 100%;
    height: 100%;
  }
}
</style>
