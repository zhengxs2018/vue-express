<script lang="ts" setup>
const props = defineProps({
  /**
   * 异步加载状态
   */
  loading: Boolean,
  /**
   * 用户头像
   */
  src: String,
  /**
   * 是否关注
   */
  followed: Boolean,
  /**
   * 关注就隐藏按钮
   */
  followedInHidden: Boolean
})

const emit = defineEmits(['click', 'follow', 'unfollow'])

const handleIconClick = () => {
  if (props.loading) return
  emit('follow')
}
</script>

<template>
  <view class="tt-follow-avatar">
    <tt-avatar :src="src" />
    <view
      v-if="props.followed"
      class="tt-follow-avatar__icon"
      @click="handleIconClick"
    >
      <image
        class="tt-follow-avatar__follow-plus"
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
