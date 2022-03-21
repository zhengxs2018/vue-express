<script lang="ts" setup>
import type { PropType } from 'vue'
import type { User } from '../shared'

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    default: () => ({
      id: '',
      nickname: 'jadealexisxo'
    })
  }
})
</script>

<template>
  <view class="ux-user-profile">
    <ux-avatar
      class="ux-user-profile__avatar"
      src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9701bd0bf9cf262db8dd4ca9b6323349~c5_100x100.jpeg?x-expires=1647849600&x-signature=zYP5vI01c0Y1WGOgbD0BJRxdEec%3D"
      width="96px"
      height="96px"
      circle
    />
    <view class="ux-user-profile__nickname">@{{ props.user.nickname }}</view>
    <view class="ux-user-profile__stats">
      <view class="ux-user-profile__stats-item">
        <view class="ux-user-profile__stats-item-count">986</view>
        <view class="ux-user-profile__stats-item-text">关注</view>
      </view>
      <view class="ux-user-profile__stats-item">
        <view class="ux-user-profile__stats-item-count">986</view>
        <view class="ux-user-profile__stats-item-text">粉丝</view>
      </view>
      <view class="ux-user-profile__stats-item">
        <view class="ux-user-profile__stats-item-count">986</view>
        <view class="ux-user-profile__stats-item-text">赞</view>
      </view>
    </view>
    <view class="follow-container">
      <view class="follow-button-wrap">
        <button class="follow-button">关注</button>
      </view>
      <button class="follow-show-more">
        <svg
          width="22"
          height="22"
          viewBox="0 0 48 48"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.7125 32.0323C24.3109 32.5525 23.5252 32.5505 23.1263 32.0282L14.4015 20.6071C13.8988 19.949 14.368 19 15.1962 19H32.7385C33.569 19 34.0375 19.9537 33.53 20.6111L24.7125 32.0323Z"
          />
        </svg>
      </button>
    </view>
  </view>

  <ux-loading></ux-loading>
</template>

<style lang="scss">
@import 'sass-bem/bem';

@include component('user-profile', 'ux') {
  padding: 8px 0px 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;

  @include element('avatar') {
    margin-bottom: 12px;
  }

  @include element('nickname') {
    color: rgb(22, 24, 35);
    font-size: 17px;
    line-height: 20px;
    margin-bottom: 14px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 600;
  }

  @include element('stats') {
    display: flex;
    padding: 0px 46px;
    width: 100%;
    box-sizing: border-box;
  }

  @include element('stats-item') {
    width: 33.33%;
    position: relative;
    list-style: none;
  }

  @include element('stats-item-count') {
    display: block;
    text-align: center;
    font-weight: 700;
    font-size: 17px;
    // color: rgba(22, 24, 35, 0.5);
    color: rgb(22, 24, 35);
  }

  @include element('stats-item-text') {
    display: block;
    text-align: center;
    color: rgba(22, 24, 35, 0.5);
    font-size: 13px;
  }

  .follow-container {
    margin-top: 16px;
    display: flex;
  }

  .follow-button-wrap {
    overflow: hidden;
  }

  .follow-button {
    user-select: none;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;

    background-color: #fe2c55;
    color: #fff;
    border: none;

    min-width: 144px;
    height: 35px;
    font-weight: 700;

    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    width: 164px;
    height: 44px;

    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 1px 6px;
  }

  .follow-show-more {
    outline: none;
    border: 1px solid rgba(18, 18, 18, 0.12);
    border-radius: 2px;
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    color: rgb(18, 18, 18);
    margin-left: 4px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 44px;
    height: 44px;
  }
}
</style>
