<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPane',
  setup() {
    const query = ref<string>('')

    return {
      query
    }
  }
})
</script>
>

<template>
  <h1>IndexPane</h1>
  <input v-model="query" />
</template>
