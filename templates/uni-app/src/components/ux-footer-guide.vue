<template>
  <view class="ux-footer-guide">
    <text class="ux-footer-guide__message">在应用上获得完整体验</text>
    <button class="ux-footer-guide__enable-button">打开</button>
  </view>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('footer-guide', 'ux') {
  font-weight: 600;
  box-sizing: border-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  z-index: 1010;
  bottom: var(--window-bottom);
  left: 0px;
  width: 100%;
  height: 52px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;

  @include modifier('message') {
    margin-right: 12px;
    font-size: 15px;
    line-height: 18px;
  }

  @include element('enable-button') {
    margin-right: 0;
    font-weight: 600;
    box-sizing: border-box;
    min-width: 52px;
    height: 28px;
    padding: 4px 8px;
    border: none;
    background: rgb(254, 44, 85);
    border-radius: 4px;
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
