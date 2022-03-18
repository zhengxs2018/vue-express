<script lang="ts" setup>
import { ref } from 'vue'

// TODO 仅缓存首页内容
const cacheViews = ref(['HomeView'])
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="cacheViews">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
