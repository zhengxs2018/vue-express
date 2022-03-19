<script setup lang="ts">
import { ref } from 'vue'

const title = ref('关于我们')
</script>

<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>
