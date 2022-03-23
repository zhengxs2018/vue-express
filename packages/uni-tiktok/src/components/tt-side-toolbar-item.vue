<script lang="ts" setup>
defineProps({
  icon: String,
  text: {} // any
})
</script>

<template>
  <view class="tt-side-toolbar-item">
    <slot>
      <view class="tt-side-toolbar-item__icon">
        <slot name="icon">
          <image :src="icon" mode="scaleToFill" />
        </slot>
      </view>
      <view class="tt-side-toolbar-item__text">
        <slot name="text">{{ text }}</slot>
      </view>
    </slot>
  </view>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('side-toolbar-item', 'tt') {
  position: relative;
  margin-bottom: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;

  @include element('icon') {
    width: 40px;
    height: 40px;
    position: relative;
  }

  @include element('text') {
    display: block;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
