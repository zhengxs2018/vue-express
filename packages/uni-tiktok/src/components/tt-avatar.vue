<script lang="ts" setup>
import { computed, PropType } from 'vue'

const props = defineProps({
  /**
   * 	图片类头像的资源地址
   */
  src: String,
  /**
   * 指定头像的形状
   */
  shape: {
    type: String as PropType<'circle' | 'square'>,
    default: 'circle'
  },
  width: {
    type: [Number, String],
    default: '49px'
  },
  height: {
    type: [Number, String],
    default: '49px'
  }
})

const style = computed(() => {
  const { width, height } = props
  return { width, height }
})
</script>

<template>
  <view class="tt-avatar" :class="`tt-avatar--${shape}`" :style="style">
    <image class="tt-avatar__image" :src="src" mode="scaleToFill" />
  </view>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('avatar', 'tt') {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  line-height: 32px;

  @include modifier('circle') {
    border-radius: 50%;
  }

  @include element('image') {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
