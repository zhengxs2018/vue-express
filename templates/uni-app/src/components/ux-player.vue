<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { PropType } from 'vue'

import type { VideoPlayer } from '@zhengxs/uni-tiktok'
import type { PostSchema } from '../shared'

// TODO 播放器需要重构
// 1. 支持图集播放
// 2. 支持进度拖拽

const props = defineProps({
  initialTime: Number,
  /**
   * 指定帖子初始索引位置
   */
  initialIndex: {
    type: Number,
    default: 0
  },
  /**
   * 帖子列表
   */
  posts: {
    type: Array as PropType<PostSchema[]>,
    default: () => []
  }
})

const emit = defineEmits(['change'])

const isSwiping = ref<boolean>(false)
const player = ref<VideoPlayer | null>(null)

const index = ref(props.initialIndex)
const item = computed(() => props.posts[index.value])
const videoSrc = computed(() => item.value?.video?.downloadAddr)

const handleChange = (event: CustomEvent<{ current: number }>) => {
  index.value = event.detail.current
  emit('change', event)
}

const handleTransitionStart = () => {
  isSwiping.value = true
  player.value?.pause()
}

const handleTransitionEnd = () => {
  isSwiping.value = false
  player.value?.play()
}
</script>

<template>
  <tt-video-player class="ux-player" :src="videoSrc" ref="player">
    <template v-slot="{ paused }">
      <swiper
        class="ux-player__posts"
        :autoplay="false"
        :current="index"
        vertical
        @change="handleChange"
        @transition="handleTransitionStart"
        @animationfinish="handleTransitionEnd"
      >
        <swiper-item v-for="item of props.posts" :key="item.id">
          <ux-post :show-post-cover="isSwiping || paused" :value="item" />
          <!-- <tt-video-player-play-btn></tt-video-player-play-btn> -->
        </swiper-item>
      </swiper>
    </template>
  </tt-video-player>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('player', 'ux') {
  @include element('posts') {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 4;
  }
}
</style>
