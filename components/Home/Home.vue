<template>
  <div>
    <!-- Header Slider -->
    <!-- <HomeHeaderSlider /> -->
    <!-- <HomeHeaderVideo /> -->

    <!-- About Us -->
    <!-- <HomeAboutUs v-if="about" :data="about" /> -->

    <!-- Gallery -->
    <!-- <HomeGallery v-if="gallery" :data="gallery" /> -->

  </div>
</template>

<script setup>
  const { about, gallery } = defineProps(['about', 'gallery'])
</script>