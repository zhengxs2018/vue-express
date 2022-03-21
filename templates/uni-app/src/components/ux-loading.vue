<template>
  <view class="ux-loading is-center">
    <view class="ux-loading__inner" style="transform: scale(0.16)">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 160 90"
        width="160"
        height="90"
      >
        <defs>
          <mask id="redhole">
            <rect width="100%" height="100%" fill="white" />
            <circle class="ux-loading__red ux-loading__black" fill="black" />
          </mask>
          <mask id="greenhole">
            <rect width="100%" height="100%" fill="white" />
            <circle class="ux-loading__green ux-loading__black" fill="black" />
          </mask>
        </defs>
        <circle
          class="ux-loading__black-circle"
          stroke-width="2"
          stroke="#3AF2FF"
        />
        <circle class="ux-loading__green" mask="url(#redhole)" />
        <circle class="ux-loading__red" mask="url(#greenhole)" />
      </svg>
    </view>
  </view>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('loading', 'ux') {
  width: 32px;
  height: 32px;
  overflow: hidden;

  @include is('center') {
    margin: 6px auto;
  }

  @include element('inner') {
    display: flex;
    width: 200px;
    height: 200px;
    justify-content: center;
    align-items: center;
    transform-origin: 0 0;
  }

  @include element('black-circle') {
    fill: #0f0f0f;
    stroke-width: 0;
    stroke: #fff;
    r: 36px;
    cx: 40px;
    cy: 44px;
    animation: ux-loading-green 1s cubic-bezier(0.05, 0, 1, 1) infinite;
  }

  @include element('red') {
    fill: #fe2c55;
    stroke-width: 0;
    r: 36px;
    cx: 120px;
    cy: 44px;
    animation: ux-loading-red 1s cubic-bezier(0.05, 0, 1, 1) infinite;
  }

  @include element('black') {
    fill: #000;
  }

  @include element('green') {
    fill: #3af2ff;
    stroke-width: 0;
    r: 36px;
    cx: 40px;
    cy: 44px;
    animation: ux-loading-green 1s cubic-bezier(0.05, 0, 1, 1) infinite;
  }
}

@-webkit-keyframes ux-loading-green {
  25% {
    cx: 80px;
    r: 43.2px;
  }

  50% {
    cx: 120px;
    r: 36px;
  }

  75% {
    cx: 80px;
    r: 21.6px;
  }

  to {
    cx: 40px;
    r: 36px;
  }
}

@keyframes ux-loading-green {
  25% {
    cx: 80px;
    r: 43.2px;
  }

  50% {
    cx: 120px;
    r: 36px;
  }

  75% {
    cx: 80px;
    r: 21.6px;
  }

  to {
    cx: 40px;
    r: 36px;
  }
}

@-webkit-keyframes ux-loading-red {
  25% {
    cx: 80px;
    r: 24px;
  }

  50% {
    cx: 40px;
    r: 36px;
  }

  75% {
    cx: 80px;
    r: 43.2px;
  }

  to {
    cx: 120px;
    r: 36px;
  }
}

@keyframes ux-loading-red {
  25% {
    cx: 80px;
    r: 24px;
  }

  50% {
    cx: 40px;
    r: 36px;
  }

  75% {
    cx: 80px;
    r: 43.2px;
  }

  to {
    cx: 120px;
    r: 36px;
  }
}
</style>
