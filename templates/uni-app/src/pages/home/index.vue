<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'

import API from '../../services'
import type { PostSchema } from '../../shared'

const loading = ref<boolean>(false)
const posts = ref<PostSchema[]>([])

const fetcher = async () => {
  try {
    loading.value = true
    posts.value = await API.home.feeds()
  } finally {
    loading.value = false
  }
}

onBeforeMount(fetcher)
</script>

<template>
  <ux-player :loading="loading" :posts="posts"></ux-player>
</template>

<style lang="scss"></style>
