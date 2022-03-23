<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import type { PropType } from 'vue'

import type { PostSchema, Video } from '../shared'

const props = defineProps({
  /**
   * 帖子ID
   *
   * 如：直接打开某个帖子详情
   */
  id: String,
  /**
   * 帖子数据
   *
   * 如：首页列表
   */
  value: Object as PropType<PostSchema>,
  /**
   * 显示封面图
   */
  showPostCover: {
    type: Boolean,
    default: true
  }
})

const post = ref<PostSchema | undefined>(props.value)
const video = computed<Video | undefined>(() => post.value?.video)

watchEffect(() => {
  if (props.id == null) return

  // TODO 逻辑待实现
})
</script>

<template>
  <view class="ux-post">
    <image
      v-show="showPostCover"
      class="ux-post__cover"
      :src="video?.cover"
      mode="scaleToFill"
    />
    <ux-post-sidebar :post="post"></ux-post-sidebar>
    <ux-post-bottom :post="post"></ux-post-bottom>
  </view>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('post', 'ux') {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;

  @include element('cover') {
    position: absolute;
    top: 50%;
    left: 0px;
    width: 100%;
    height: 100%;
    object-position: 50% 50%;
    transform: translateY(-50%);
    z-index: 2;
    background: #000;
  }
}
</style>
