<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  src: String,
  circle: Boolean,
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
  return {
    width: props.width,
    height: props.height
  }
})
</script>

<template>
  <view class="ux-avatar ux-avatar--circle" :style="style">
    <image class="ux-avatar__image" :src="props.src" mode="scaleToFill" />
  </view>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('avatar', 'ux') {
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
