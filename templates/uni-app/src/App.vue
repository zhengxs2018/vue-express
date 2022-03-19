<script lang="ts" setup>
import { onLaunch, onPageNotFound } from '@dcloudio/uni-app'

onLaunch(() => {
  uni.onTabBarMidButtonTap(() => {
    console.log(1)
  })
})

onPageNotFound(() => {
  uni.navigateTo({ url: '/pages/errors/404' })
})
</script>
