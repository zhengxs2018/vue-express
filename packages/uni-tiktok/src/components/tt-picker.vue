<script lang="ts" setup>
defineProps({
  bottom: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <view class="tt-picker" :class="{ bottom: bottom }">
    <view class="tt-picker__upside">
      <slot name="picker"></slot>
    </view>
  </view>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('picker', 'ux') {
  position: absolute;
  z-index: 50;
  width: 100vw;

  @include modifier('bottom') {
    bottom: 0px;
    pointer-events: none;

    @include element('upside') {
      min-height: 180px;
      -webkit-box-pack: end;
      justify-content: flex-end;
    }
  }

  @include element('upside') {
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  }
}
</style>
