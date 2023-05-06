<template>
  <section class="about-us">
    <div class="container">
      <h2 class="title text-white text-center font-philosopher">Luxmetallic converts your plastic credit/debit card to luxurious metal.</h2>
      <p class="sub-title text-center text-medium-gold pb-5">
        <span>Work in any ATMs</span>
        <span class="mx-2">|</span>
        <span>No hidden fees</span>
        <span class="mx-2">|</span>
        <span>Secure</span>
      </p>
      <div class="row">
        <div class="col-12 col-lg-6 pb-3 pb-md-0">
          <!-- <h2 class="content-title text-gold fw-bolder mt-5">We Are,,,</h2> -->
          <p class="content-desc text-white mb-5" v-html="useTranslate(data, 'content').slice(0, 600) + ' ....'"></p>
          <ElementsTxtMore :url="`/about`" :justifyContent="`flex-start`" />
        </div>
        <div class="col-6 d-lg-block d-none">
          <ElementsImage :classes="['img-fluid']" src="/images/bg-home-about-us-icons.png" :width="`100%`" :height="`100%`" />
        </div>
      </div><!--.row-->
    </div><!--.container-->
  </section>
</template>


<script setup>
  const { data } = defineProps(['data'])
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/scss/theme/variables';
  @import '~/assets/styles/scss/theme/mixin';
  .about-us {
    background: url('/images/bg-home-about-us.webp') center center no-repeat;
    background-size: 100% 100%;
    padding-top: 3rem;
    padding-bottom: 8rem;
    position: relative;
    direction: ltr;
    @include tablet { padding-bottom: 5rem; }
    @include sm-mobile { padding-top: 3rem; padding-bottom: 3rem; }
    .title { 
      font-size: 2.4rem; 
      @include tablet { font-size: 2rem; }
      @include sm-mobile { font-size: 1.6rem; }
    }
    .sub-title { 
      font-size: 1.5rem; 
      @include tablet { font-size: 1.2rem; }
      @include sm-mobile { font-size: 1rem; }
    }
    .content-title { font-size: 3rem; }
    .content-desc { font-size: 25px; text-align: justify; }
  }

</style>