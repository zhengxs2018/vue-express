<template>
  <view class="tt-side-toolbar">
    <slot></slot>
  </view>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('side-toolbar', 'tt') {
  position: relative;
  z-index: 40;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
