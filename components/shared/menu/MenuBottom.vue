<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-light-gold-v2 py-0">
    <div :class="`col-9 navbar-reverse ${$i18n.locale == 'en' ? 'ms-auto me-3' : 'me-auto ms-3'}`">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse custom-collapse" id="navbarSupportedContent">
        <ul :class="`navbar-nav mb-2 mb-lg-0 py-1 ${$i18n.locale == 'en' ? 'me-auto ps-4 pe-0' : 'ms-auto pe-4 ps-0'}`">
          <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li> -->   
          <li :class="`nav-item ${$i18n.locale == 'en' ? 'me-lg-4 text-start' : 'ms-lg-4 text-end'}`">
            <NuxtLink @click="hideMenuOnNavigate" to="/" class="nav-link text-dark font-philosopher">{{ $t('home') }}</NuxtLink>
          </li>
          <li :class="`nav-item ${$i18n.locale == 'en' ? 'me-lg-4 text-start' : 'ms-lg-4 text-end'}`">
            <NuxtLink @click="hideMenuOnNavigate" to="/gallery" class="nav-link text-dark font-philosopher">{{ $t('gallery') }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
  const hideMenuOnNavigate = () => {
    setTimeout(() => {
      document.getElementById('navbarSupportedContent').classList.remove('show');
    }, 300);
  }
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/scss/theme/variables';
  @import '~/assets/styles/scss/theme/mixin';
  .navbar {
    @include medium {
        height: 51px;
    }
    @include tablet {
      height: 40px;
    }
    @include sm-mobile {
      height: 40px;
    }
    .navbar-reverse {
      @include cmq(200px, 992px) { direction: rtl; }
      .navbar-toggler {
        @include tablet {
          font-size: 1rem;
        }
        &:focus { box-shadow: unset; }
      }
      .custom-collapse {
        @include cmq(200px, 991.98px) {
          width: calc(100vw - 30px);
          transform: translateY(10px);
          background: $light-gold-v2;
          -webkit-filter: drop-shadow(rgb(170, 170, 170) 2px 4px 6px);
          filter: drop-shadow(rgb(170, 170, 170) 2px 4px 6px);
          position: relative;
          z-index: 9;
        }
        @include tablet { transform: unset; }
        @include sm-mobile { transform: unset; }
      }
    }
  }
  .nav-item.dropdown {
    .dropdown-menu {
      background: $light-gold-v2;

      @include medium {
        background: transparent;
      }
    }
  }
  .nav-item.dropdown:hover {
    .dropdown-menu {
      display: block;
      @include cmq(200px, 991.98px) {
        background: transparent;
      }
      
      .dropdown-item:hover {
        padding-left: 25px;
        background-color: $gold;
        color: #fff;
        -webkit-transition: all .5s ease;
        -moz-transition: all .5s ease;
        -o-transition: all .5s ease;
        transition: all .5s ease;
      }
    }
  }
</style>