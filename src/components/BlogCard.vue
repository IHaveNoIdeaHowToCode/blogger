<script setup>
import { Blogs } from '@/models/Blogs.js';


defineProps({
  blogProp: { type: Blogs, required: true }
})

</script>


<template>
  <div class="blog-card">
    <img class="profile-img" :src="blogProp.creator.picture" :alt="`A picture of ${blogProp.creator.name}`">
    <img height="200" :src="blogProp.imgUrl" class="img-fluid">
    <label class="blog-title">{{ blogProp.title }}</label>
    <p>{{ blogProp.body }}</p>
  </div>
</template>


<style lang="scss" scoped>
.blog-card {
  margin-bottom: 1rem;
  border-radius: 0px;
  overflow: hidden;
  position: relative;

  img {
    height: auto;
  }

}


.profile-img {
  position: absolute;
  top: 5px;
  right: 5px;
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
}
</style>