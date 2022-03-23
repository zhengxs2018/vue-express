<script lang="ts" setup>
import { useVideoPlayer } from '../composables'

const { paused, toggle } = useVideoPlayer()
</script>

<template>
  <view class="tt-video-player-play-btn" @click="toggle()">
    <view v-if="paused" class="tt-video-player-play-btn__icon"></view>
  </view>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('video-player-play-btn', 'tt') {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  @include element('icon') {
    width: 64px;
    height: 64px;
    background-image: url(../static/images/player-play.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>
