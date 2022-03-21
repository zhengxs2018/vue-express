<script lang="ts" setup>
import { computed } from 'vue'
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

const post = computed(() => props.post)
const author = computed(() => props.post.author)
</script>

<template>
  <view class="ux-post-bottom ux-post-bottom--bottom">
    <view class="ux-post-bottom__upside">
      <ux-music-simple-player :music="props.post.music">
        <template v-slot:top>
          <view class="ux-post-bottom__text ux-post-bottom__author-name">
            <navigator url="/pages/mine/index">{{ author.nickname }}</navigator>
          </view>
          <view class="ux-post-bottom__text ux-post-bottom__desc">
            {{ post.desc }}
          </view>
        </template>
      </ux-music-simple-player>
    </view>
  </view>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('post-bottom', 'ux') {
  position: absolute;
  bottom: 0px;
  width: 100vw;
  z-index: 10;

  @include element('bottom') {
    pointer-events: none;
  }

  @include element('upside') {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    position: relative;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    height: 180px;
    font-size: 14px;
    z-index: 10;
  }

  @include element('text') {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 8px;
  }

  @include element('author-name') {
    font-weight: 600;
    font-size: 17px;
    color: #fff;
  }

  @include element('desc') {
    font-size: 15px;
    line-height: 1.2;
    word-break: break-all;
    font-weight: normal;
    white-space: normal;
    color: #fff;
  }
}
</style>
