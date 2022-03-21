<script lang="ts" setup>
const props = defineProps({
  icon: String,
  text: {} // any
})
</script>

<template>
  <view class="ux-post-toolbar-item">
    <view class="ux-post-toolbar-item__icon">
      <slot>
        <image :src="props.icon" mode="scaleToFill" />
      </slot>
    </view>
    <view class="ux-post-toolbar-item__text">
      <slot name="text">{{ props.text }}</slot>
    </view>
  </view>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('post-toolbar-item', 'ux') {
  --icon-gap: 8px;
  position: relative;
  margin-bottom: var(--icon-gap, 16px);
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

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
