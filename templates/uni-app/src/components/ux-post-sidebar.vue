<script lang="ts" setup>
import type { PropType } from 'vue'

import type { PostSchema } from '../shared'

const props = defineProps({
  post: {
    type: Object as PropType<PostSchema>,
    required: true
  },
  bottom: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <view class="ux-post-sidebar" style="bottom: 144px">
    <ux-follow-author-avatar :author="props.post.author" />
    <ux-post-toolbar
      class="ux-post-sidebar__toolbar"
      :post="props.post"
    ></ux-post-toolbar>
  </view>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('post-sidebar', 'ux') {
  position: absolute;
  right: 10px;
  bottom: 70px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(var(--icon-size, 40px) + 8px);
  height: 300px;

  @include element('toolbar') {
    margin-top: 20px;
  }
}
</style>
