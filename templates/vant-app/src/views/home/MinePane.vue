<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Cell } from 'vant'

export default defineComponent({
  name: 'MinePane',
  setup() {
    const query = ref<string>('')

    return {
      query
    }
  },
  components: {
    Cell
  }
})
</script>
>

<template>
  <h1>MinePane</h1>
  <input v-model="query" />
  <Cell to="/mine/settings" title="我的设置"></Cell>
</template>
