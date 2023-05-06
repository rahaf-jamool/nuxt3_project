<template>
  <section class="header-slider">
    <ElementsVideo :title="`Home Page video`" :src="`/images/home-page-video-2.mp4`" :poster="`/images/land-page.webp`" :width="`100%`" :height="`600px`" />
    <!-- <ElementsImage :classes="['responsive']" :src="`/images/bg-header.webp`" :width="`100%`" :height="`500px`"/>
    <div class="header-content text-center">
      <ElementsLinearIcon :src="`/icons/sm-white-logo.png`"  :width="`100%`" />
      <h1 class="text-uppercase">{{ $t('craft-your-prepaid-card') }}</h1>
    </div> -->
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>  
  @import '~/assets/styles/scss/theme/variables';
  @import '~/assets/styles/scss/theme/mixin';
  .header-slider {
    width: 100%;
    height: 87vh;
    @include medium {
      height: 80vh;
    }
    @include tablet {
      height: 60vh;
    }
    @include cmq(500px, 575.98px) {
      height: 55vh;
    }
    @include cmq(400px, 499.98px) {
      height: 50vh;
    }
    @include cmq(200px, 399.98px) {
      height: 40vh;
    }
  }
//  .header-content {
//    color: #fff; 
//    position: absolute;
//    top: 30%;   
//    left: 10%;
//    padding-bottom: 5px;
//    border-bottom: 1px solid $gold;
//    .header-content-logo { vertical-align: middle; }
//    h1 { font-size: 3.3rem; }
//   } 
</style>