<script lang="ts" setup>
import type { PropType } from 'vue'

import type { PostSchema } from '../shared'

const props = defineProps({
  post: {
    type: Object as PropType<PostSchema>,
    required: true
  }
})
</script>

<template>
  <view class="ux-post-toolbar">
    <ux-post-toolbar-item
      class="ux-post-toolbar__icon"
      :text="props.post.stats.diggCount"
    >
      <image
        src="../static/icons/share.svg"
        style="width: 100%; height: 100%"
      />
    </ux-post-toolbar-item>
    <ux-post-toolbar-item
      class="ux-post-toolbar__icon"
      :text="props.post.stats.commentCount"
    >
      <image
        src="../static/icons/comment.svg"
        style="width: 100%; height: 100%"
      />
    </ux-post-toolbar-item>
    <ux-post-toolbar-item
      class="ux-post-toolbar__icon"
      :text="props.post.stats.shareCount"
    >
      <image
        src="../static/icons/share.svg"
        style="width: 100%; height: 100%"
      />
    </ux-post-toolbar-item>
  </view>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('post-toolbar', 'ux') {
  position: relative;
  z-index: 1000;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
