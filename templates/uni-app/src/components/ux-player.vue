<script lang="ts" setup>
import { ref } from 'vue'
import type { PropType } from 'vue'
import type { PostSchema } from '../shared'

const props = defineProps({
  /**
   * 加载状态
   */
  loading: {
    type: Boolean,
    default: false
  },
  /**
   * 索引位置
   */
  index: {
    type: Number,
    default: 0
  },
  /**
   * 当前时间
   */
  currentTime: {
    type: Number,
    default: 0
  },
  /**
   * 文章列表
   */
  posts: {
    type: Array as PropType<PostSchema[]>,
    default: () => []
  }
})

const playing = ref(false)

const handleTransitionStart = () => {
  playing.value = false
}

const handleTransitionEnd = () => {
  playing.value = true
}
</script>

<template>
  <swiper
    class="ux-player"
    :autoplay="false"
    vertical
    @transition="handleTransitionStart"
    @animationfinish="handleTransitionEnd"
  >
    <swiper-item v-for="item of props.posts" :key="item.id">
      <ux-post :value="item"></ux-post>
    </swiper-item>
  </swiper>

  <!-- <ux-video-player class="ux-player__video"></ux-video-player> -->
</template>

<style lang="scss">
@import 'sass-bem/bem';

$--window-content: calc(100vh - var(--window-top) - var(--window-bottom));

@include component('player', 'ux') {
  height: $--window-content;

  @include is('swiping') {
    @include element('video') {
      opacity: 0;
    }
  }

  @include element('video') {
    opacity: 1;
    top: 0px;
    position: absolute;
    width: 100vw;
    height: $--window-content;
    pointer-events: none;
  }
}
</style>
