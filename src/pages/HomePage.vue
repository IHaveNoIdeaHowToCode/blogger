<script setup>
import { AppState } from '@/AppState.js';
import { blogService } from '@/services/BlogService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted, computed } from 'vue';


const blogs = computed(() => AppState.blogs)

onMounted(getBlogs)


async function getBlogs() {
  try {
    logger.log('GOT THEM BLOGS GIRL')
    await blogService.getBlogs()
  }
  catch (error) {
    logger.error(error)
    Pop.error(error);
  }
}

</script>

<template>
  {{ blogs }}
</template>

<style scoped lang="scss"></style>
