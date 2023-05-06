<template>
  <section id="nav_bar">
    <div class="container-fluid">
      <div class="row bg-black align-items-center">
        <div class="logo text-center px-0">
          <NuxtLink to="/">
            <img class="navbar-logo" src="/icons/logo.png" alt="" />
          </NuxtLink>
        </div>
        <div class="col-12 px-0">
          <div class="top-menu">
            <SharedMenuTop @lang="getLang"/>
          </div>
          <div class="bottom-menu">
            <SharedMenuBottom />
          </div>
        </div><!--.col-10-->
      </div><!--.row-->
    </div><!--.container-fluid-->
    <div v-if="hidden" class="nav-bar-hidden-block"></div>
  </section>
</template>

<script setup>
  const emit = defineEmits(['navLang'])
  const hidden = ref(false)

  // Get Lnaguage from child comonent
  const getLang = (event) => {
    emit('navLang', event)
  }
  
  window.onscroll = () => fixedNavBar()
 
  const fixedNavBar = () => {
    const navBar = window.document.querySelector('#nav_bar');
    if (window.pageYOffset > 0) {
      hidden.value = true
      navBar.firstChild.classList.add('fixed-nav')
    } else {
      hidden.value = false
      navBar.firstChild.classList.remove('fixed-nav')
    }
  }
  
  onMounted(() => {
    fixedNavBar();
  })
</script>

<style lang="scss">
  @import '~/assets/styles/scss/theme/variables';
  @import '~/assets/styles/scss/theme/mixin';
  .fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
  }
  .nav-bar-hidden-block { height: 100px; }
  .logo {
    width: 150px;
    height: 99px;
    position: absolute;
    line-height: 99px;
    top: 0;
    left: 8%;
    background: #000;
    z-index: 1;
    @include tablet {
      width: 130px;
      height: 85px;
      left: 5%;
    }
    @include sm-mobile {
      width: 100px;
      height: 86px;
      line-height: 90px;
    }
    .navbar-logo {
      width: 85%;
      height: 75px;
      @include sm-mobile {
        width: 85%;
        height: 50px;
      }
    }
  }
  .nav-item {
    .nav-link {
      font-size: 18px;
      letter-spacing: -0.01rem;
      &:after { display: none; }
      &:hover { color: $text-color !important; }
      &.router-link-exact-active {
        color: $text-color !important;
      }
      &.icon { 
        font-size: 16px; 
        @include tablet {
          font-size: 14px;
        }
        @include sm-mobile {
          font-size: 13px;
        }
      }
    }
  }
  .nav-search {
    background: transparent;
    border: 1px solid $text-color;
    color: $text-color;
    border-radius: 9px;
    padding: 0 20px;
    &::-webkit-input-placeholder {
        color: $text-color;
        font-size: 14px;
    }
    &::-moz-placeholder {
        color: $text-color;
        font-size: 14px;
    }
    &:moz-placeholder {
        color: $text-color;
        font-size: 14px;
    }
    &:-ms-placeholder {
        color: $text-color;
        font-size: 14px;
    }

  }
</style>