<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Music } from '../shared'

const props = defineProps({
  music: {
    type: Object as PropType<Music>,
    required: true
  }
})
</script>

<template>
  <navigator class="ux-music-simple-player" url="/pages/mine/index">
    <view class="ux-music-simple-player__inner">
      <slot name="top"></slot>
      <view class="ux-music-simple-player__music">
        <view class="ux-music-simple-player__icon"></view>
        <view class="ux-music-simple-player__title"
          >{{ props.music.title }} - {{ props.music.authorName }}</view
        >
      </view>
      <slot name="bottom"></slot>
    </view>
    <view class="ux-music-simple-player__album-item">
      <image
        class="ux-music-simple-player__album-item-image"
        src="../static/uploads/28263c16300f462db08e3b84e297d0c1.jpeg"
        mode="scaleToFill"
      />
    </view>
  </navigator>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('music-simple-player', 'ux') {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px 10px 12px;

  @include element('inner') {
    pointer-events: auto;
    max-width: 274px;
    overflow: hidden;
  }

  @include element('music') {
    position: relative;
    display: flex;
    font-weight: normal;
  }

  @include element('icon') {
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAArtJREFUaAXtmj9oFEEUxu8SoxBUohAlQSNiCv9UJiBWVqawEbuAoIWiYCFYpUolgo2VTRori9Q2tqJNtBNETTBeSiGBdAFjwKy/L9yeG3b2Zv/MzkWZB9/N3cy7977vvd25Y+4ajf/Emv+ijiiKxuB9Cqw2m81v0rCnhUD4JBwvJHCe58IhENsLxNzbE0LaFRbBJOlzvE4Sjombxmv7TLN1zEFWRYsrHJM2VbhM+knnQjIIq9JFKlxUzEBlIRAfJus0mAAirCofBF6tkhBEaOd4D0ZqZr1N/BXwBUyBQbDLKgkh0iPgUkSS8Fdii7iwxM60ydigeD8YnAs5o+AlLElYRGPSHcJFY1btiG37FuFWgmhMujThLIFVhZjiLjL5pE3eOWFTQs3VIaTF9TyflbCu+b66AvuOG4T4rrgtX+iIrUK+10NHfFfcli90xFYh3+uhI74rbssXOmKrkO/10BHfFbflCx2xVcj3euiI74rb8oWO2Crke72OU5TCGjg9PMGb7gIddI8DnV5mnZkdZy1lPRXSPgB/CqtbYH+KXYGJnglBxDF4LoCyx667ZKaEkOAwHnfARaA2j4F+YLKjpsmcc3P4ORGhfB0hCFBrZ8FDMARqM3LpHrjhMsGOEAJrfA2uugzeJdZZ1lxu/VEcbMajCOnb0INDW42FPHAYNE+oTzit53HM6fO2r31zax93ZZEtEKf1v/B5bPPLuf6SeEvqyE+gH2Rc2VqeQCR/jt+zPL5dfHRf/72a6Mo74MpudkmcWiLpJfAKbBcg8AHf66Dz6b/zhIkrZHgDsj4vUgQyJj4yf5lqb2WsZ07DYZRF7WbjwPQVRffUd7BMfI1mI9BtsAXK2mfeqH829N4gchrMgU2Q11o43gcHeqmgc40lSUDqCK/1Dwa12fQVRZ8D+rV2GSzS6t+MwVxU4A+ZcZNXUfQErAAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 13px 13px;
    width: 15px;
    height: 15px;
  }

  @include element('title') {
    position: relative;
    margin-left: 32px;
    font-size: 15px;
    overflow: hidden;
    color: rgb(255, 255, 255);
  }

  @include element('album-item') {
    pointer-events: auto;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 8s linear 0s infinite normal none running album-rotate;
    background-image: url(../static/icons/album.svg);
  }

  @include element('album-item-image') {
    width: calc(0.5625 * 48px);
    height: calc(0.5625 * 48px);
    border-radius: 50%;
  }
}

@keyframes album-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
