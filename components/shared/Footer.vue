<template>
  <div>
    <div class="golden-line golden-gradient-background"></div>
    <div class="top-footer bg-black">
      <div class="container">
        <div class="row">
          <div class="col-6 col-md-4 col-lg-3 col-xl-3 order-4 order-md-3 order-lg-0 mx-auto">
            <img class="img-fluid" src="/icons/logo.png" alt="footer logo" />          
          </div>
          <div class="col-12 col-sm-6 col-md-1 col-lg-2 col-xl-1 align-self-end d-none d-md-block d-lg-none d-xl-block"></div>
          <div class="col-6 col-md-3 col-lg-2 col-xl-2 align-self-center text-center text-md-start">
            <ul class="list-unstyled">
              <li>
                <NuxtLink to="/about" class="nav-link bright-white font-philosopher px-0">We are</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/page/1" class="nav-link bright-white font-philosopher px-0">{{ $t('what-we-do') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/page/2" class="nav-link bright-white font-philosopher px-0">{{ $t('how-it-work') }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-12 col-sm-6 col-md-1 d-none d-md-block d-lg-none"></div>
          <div class="col-6 col-md-3 col-lg-2 col-xl-2 align-self-center text-center text-md-start">
            <ul class="list-unstyled">
              <li>
                <NuxtLink to="/gallery" class="nav-link bright-white font-philosopher px-0">{{ $t('gallery') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/faq" class="nav-link bright-white font-philosopher px-0">{{ $t('faq') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact-us" class="nav-link bright-white font-philosopher px-0">{{ $t('contact-us') }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-4 col-lg-3 col-xl-3 mx-auto align-self-center text-center text-md-start">
            <ul class="list-unstyled">
              <li>
                <NuxtLink to="/page/9" class="nav-link bright-white font-philosopher">{{ $t('privacy-policy') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/page/10" class="nav-link bright-white font-philosopher">{{ $t('returns-and-refunds') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/page/8" class="nav-link bright-white font-philosopher">{{ $t('terms-conditions') }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-4 col-lg-2 col-xl-1 align-self-center text-center text-lg-start order-3 order-md-4 order-lg-0 mx-auto">
            <ul class="list-unstyled">
              <li>
                <ElementsImage :classes="['payment-card-image', 'me-1 me-lg-3']" :src="`/images/master-card.png`" :width="`100%`" :height="`500px`"/>
              </li>
              <li>
                <ElementsImage :classes="['payment-card-image', 'me-1 me-lg-3']" :src="`/images/visa-card.png`" :width="`100%`" :height="`500px`"/>
              </li>
              <li>
                <ElementsImage :classes="['payment-card-image', 'me-1 me-lg-3']" :src="`/images/union-pay.png`" :width="`100%`" :height="`500px`"/>
              </li>
            </ul>
          </div>      
        </div>
      </div>
    </div>
    <div class="copyright bg-medium-gold text-center py-3">
      <div class="container py-1">
        <h6 class="text-white font-philosopher mb-0">Copyright @ {{ new Date().getFullYear() }} Luxmetallic LLC</h6>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '~/assets/styles/scss/theme/variables';
  @import '~/assets/styles/scss/theme/mixin';
  .golden-line { height: 7px; }
  .top-footer {
    position: relative;
    padding-top: 50px; 
    padding-bottom: 40px; 
  }
  // .top-footer:before {
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   top: 0;
  //   left: 47%;
  //   width: 80px;
  //   height: 0.1rem;
  //   background: $gold;
  //   transform: rotate(90deg);
  //   @include cmq(650px, 850px) { left: 44%; }
  //   @include cmq(576px, 650px) { left: 43%; }
  //   @include cmq(500px, 650px) { left: 42%; }
  //   @include cmq(500px, 550px) { left: 41%; }
  //   @include cmq(400px, 500px) { left: 40%; }
  //   @include cmq(300px, 400px) { left: 39%; }
  // }
  .payment-card-image {
    width: 60px;
    height: 40px;
  }
</style>