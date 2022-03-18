<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Tabbar, TabbarItem } from 'vant'

export default defineComponent({
  name: 'HomeView',
  setup() {
    // TODO 缓存主页面板
    const cacheViews = ref(['IndexPane'])

    return {
      cacheViews
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="cacheViews">
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <Tabbar route>
    <TabbarItem replace to="/home/index" icon="home-o">首页</TabbarItem>
    <TabbarItem replace to="/home/mine" icon="setting-o">我的</TabbarItem>
  </Tabbar>
</template>
