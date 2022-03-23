<template>
  <view class="tt-sidebar">
    <slot></slot>
  </view>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('sidebar', 'tt') {
  --icon-size: 40px;

  position: absolute;
  right: 10px;
  bottom: 70px;
  z-index: 30;
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
