<script lang="ts" setup>
import type { PropType } from 'vue'

import type { Author } from '../shared'

const props = defineProps({
  author: {
    type: Object as PropType<Author>,
    required: true
  }
})
</script>

<template>
  <view class="ux-follow-author-avatar">
    <ux-avatar :src="props.author.avatarLarger" />
    <view class="ux-follow-author-avatar__icon">
      <image
        class="ux-follow-author-avatar__follow-plus"
        src="../static/icons/follow-plus.svg"
        mode="scaleToFill"
      />
    </view>
  </view>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('follow-author-avatar', 'ux') {
  position: relative;
  width: 49px;
  height: 49px;

  @include element('icon') {
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    border-color: rgb(255, 255, 255);
    border-width: 1px;
  }

  @include element('follow-plus') {
    font-size: 0px;
    text-align: center;
    width: calc(49px / 2);
    height: calc(49px / 2);
  }
}
</style>
