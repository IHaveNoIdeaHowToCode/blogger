<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/BlogCard.vue';
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
  <div class="mx-2 mx-md-5">
    <section v-if="blogs.length" class="blog-cards p-3">
      <BlogCard v-for="blogProp in blogs" :key="`blog-card-${blogProp.id}`" :blogProp />

    </section>
  </div>
</template>

<style scoped lang="scss"></style>
