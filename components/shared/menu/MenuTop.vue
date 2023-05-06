
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black py-0">
    <div class="container-fluid">
      <ul :class="`navbar-nav align-items-center d-none d-sm-flex ${$i18n.locale == 'en' ? 'ms-auto' : 'me-auto'}`">
        <!-- <li class="nav-item">
          <input class="nav-search" type="text" name="search" placeholder="Search product..." />
          <i class="fa fa-search fa-lg mx-2 text-white"></i>
        </li> -->        
        <template v-if="!isAuth.isAuthenticated">
          <li class="nav-item mx-2">
            <NuxtLink to="/auth/register" class="nav-link text-medium-gold text-uppercase font-philosopher">
              <!-- <i :class="`fa fa-sign-in fa-fw mx-1 ${$i18n.locale == 'ar' ? 'rtl' : ''}`"></i> -->
              <img class="mx-2 mb-1" src="/icons/login.png" alt="Login Icon" width="15" height="15" />
              <span>{{ $t('sign-up') }}</span>
            </NuxtLink>
          </li>
          <li class="nav-item mx-2">
            <NuxtLink to="/auth/login" class="nav-link text-medium-gold text-uppercase font-philosopher">
              <!-- <i :class="`fa fa-user fa-fw mx-1 ${$i18n.locale == 'ar' ? 'rtl' : ''}`"></i> -->              
              <img class="mx-1 mb-1" src="/icons/user-add.png" alt="user Icon" width="18" height="16" />
              <span>{{ $t('login') }}</span>
            </NuxtLink>
          </li>
        </template>
        <template v-if="isAuth.isAuthenticated">
          <li class="nav-item mx-2">
            <a @click.prevent="logout" href="#" class="nav-link text-medium-gold text-uppercase font-philosopher">
              <!-- <i :class="`fa fa-sign-in fa-fw mx-1 ${$i18n.locale == 'ar' ? 'rtl' : ''}`"></i> -->
              <img class="mx-2 mb-1" src="/icons/login.png" alt="Login Icon" width="15" height="15" />
              <span>{{ $t('logout') }}</span>
            </a>
          </li>            
          <li class="nav-item mx-2">
            <NuxtLink to="/my-account" class="nav-link text-medium-gold text-uppercase font-philosopher">              
              <!-- <i :class="`fa fa-user fa-fw mx-1 ${$i18n.locale == 'ar' ? 'rtl' : ''}`"></i> -->                        
              <img class="mx-1 mb-1" src="/icons/user-add.png" alt="user Icon" width="18" height="16" />
              <span>{{ $t('my-account') }}</span>
            </NuxtLink>
          </li>
        </template>
      </ul>
      <ul class="navbar-nav bg-medium-gold d-none d-sm-flex px-1 px-md-3 py-sm-1" v-if="data">
        <li class="nav-item mx-1 mx-sm-2" v-for="item in data" :key="item.id">
          <a v-if="item?.nameEn == 'facebook'" :href="item?.pageUrl" target="_blank" class="nav-link icon text-dark">
            <font-awesome-icon icon="fa-brands fa-facebook-f fa-2x" class="black-hover" />
          </a>
          <a v-else-if="item?.nameEn == 'instagram'" :href="item?.pageUrl" target="_blank" class="nav-link icon text-dark">
            <font-awesome-icon icon="fa-brands fa-instagram" class="black-hover" />
            <!-- <i class="fa fa-instagram black-hover"></i> -->
          </a>
          <a v-else-if="item?.nameEn == 'twitter'" :href="item?.pageUrl" target="_blank" class="nav-link icon text-dark">
            <font-awesome-icon icon="fa-brands fa-twitter" class="black-hover" />
          </a>      
          <a v-else-if="item?.nameEn == 'youtube'" :href="item?.pageUrl" target="_blank" class="nav-link icon text-dark">
            <font-awesome-icon icon="fa-brands fa-youtube" class="black-hover" />
          </a>
          <a v-else :href="item?.pageUrl" target="_blank" class="nav-link icon text-gold">
            <i :class="`fa fa-${item?.nameEn} black-hover`"></i>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav mb-2 d-none mb-lg-0">
        <NuxtLink to="/" class="nav-link">
          <font-awesome-icon icon="far fa-heart" class="gold-hover" />
        </NuxtLink>
        <a class="nav-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <font-awesome-icon icon="fas fa-bag-shopping" class="gold-hover" />
        </a>
        <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> -->
      </ul>
      <ul class="navbar-nav align-items-center nav-mobile-auth ms-auto d-sm-none" style="flex-direction: unset;" v-if="data">        
          <li class="nav-item mx-2" v-for="item in data" :key="item.id">
          <a v-if="item?.nameEn == 'facebook'" :href="item?.pageUrl" target="_blank" class="nav-link icon text-gold">
            <font-awesome-icon icon="fa-brands fa-facebook-f fa-2x" class="black-hover" />
          </a>
          <a v-else-if="item?.nameEn == 'instagram'" :href="item?.pageUrl" target="_blank" class="nav-link icon text-gold">
            <font-awesome-icon icon="fa-brands fa-instagram" class="black-hover" />
          </a>
          <a v-else-if="item?.nameEn == 'twitter'" :href="item?.pageUrl" target="_blank" class="nav-link icon text-gold">
            <font-awesome-icon icon="fa-brands fa-twitter" class="black-hover" />
          </a>
          <a v-else-if="item?.nameEn == 'youtube'" :href="item?.pageUrl" target="_blank" class="nav-link icon text-gold">
            <font-awesome-icon icon="fa-brands fa-youtube" class="black-hover" />
          </a>
          <a v-else :href="item?.pageUrl" target="_blank" class="nav-link icon text-gold">
            <i :class="`fa fa-${item?.nameEn}`" class="black-hover"></i>
          </a>
        </li>

        <li class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle ms-1" id="navbarDropdownUserCircle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <template v-if="isAuth.isAuthenticated">
                <span class="user-login-circle">{{ String(user.enName).split('')[0] }}</span>
            </template>
            <template v-if="!isAuth.isAuthenticated">
              <i class="fa fa-user fa-lg"></i>
            </template>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownUserCircle">
            <template v-if="isAuth.isAuthenticated">              
              <li class="nav-item mx-2">
                <NuxtLink to="/my-account" class="nav-link text-medium-gold text-uppercase font-philosopher">              
                  <i :class="`fa fa-user fa-fw mx-1 ${$i18n.locale == 'ar' ? 'rtl' : ''}`"></i>
                  <span>{{ $t('my-account') }}</span>
                </NuxtLink>
              </li>
              <li class="nav-item mx-2">
                <a @click.prevent="logout" href="#" class="nav-link text-medium-gold text-uppercase font-philosopher">
                  <i :class="`fa fa-sign-in fa-fw mx-1 ${$i18n.locale == 'ar' ? 'rtl' : ''}`"></i>
                  <span>{{ $t('logout') }}</span>
                </a>
              </li>
            </template>
            <template v-if="!isAuth.isAuthenticated">
              <li class="nav-item mx-2">
                <NuxtLink to="/auth/login" class="nav-link text-medium-gold text-uppercase font-philosopher">              
                  <!-- <i :class="`fa fa-user fa-fw mx-1 ${$i18n.locale == 'ar' ? 'rtl' : ''}`"></i> -->
                  <img class="" src="/icons/user-add.png" alt="user Icon" width="18" height="16" />
                  <span>{{ $t('login') }}</span>
                </NuxtLink>
              </li>
              <li class="nav-item mx-2">
                <NuxtLink to="/auth/register" class="nav-link text-medium-gold text-uppercase font-philosopher">
                  <!-- <i :class="`fa fa-sign-in fa-fw mx-1 ${$i18n.locale == 'ar' ? 'rtl' : ''}`"></i> -->
                  <img class="mx-2 mb-1" src="/icons/login.png" alt="Login Icon" width="15" height="15" />
                  <span>{{ $t('sign-up') }}</span>
                </NuxtLink>
              </li>
            </template>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script setup>

  const isAuth = reactive({
    isAuthenticated: false
  })
  const user = ref('');
  const data = ref('');
 
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('productInfo');
    localStorage.removeItem('accountType');
    useAuth().value.isAuthenticated = false;
    return navigateTo('/');
  }

  onMounted(() => {
      data.value = useMenus().value;
  })
  
  watchEffect(() => {
    isAuth.isAuthenticated = useAuth().value.isAuthenticated
    user.value = useUserInfo().value;
    data.value = useMenus().value;
  })
</script>



<style lang="scss" scoped>
  @import '~/assets/styles/scss/theme/variables';
  @import '~/assets/styles/scss/theme/mixin';
    nav.navbar { 
      @include sm-mobile {
        height: 46px; 
      }
    }
    .nav-item {
      .nav-link { 
        font-size: 16px; 
        color: $medium-gold;
        @include tablet {
          font-size: 13px;
        }
        @include sm-mobile {
          font-size: 13px;
        }
      }
    }
    .navbar-nav {
      flex-direction: row;
    }
  .dropdown-item {
    &:hover {
      background-color: $gold;
      color: #fff;
    }
  }

  select.language-dropdown {
    background: transparent;
    color: $text-color;
    border: none;
    &:focus-visible { outline: none; }

    option {
      color: #000;
      &:hover {
        background-color: var(--selectHoverCol);
        color: #fff;
      }
    }
  }

  i.fa.rtl { vertical-align: middle; }
 
  .nav-mobile-auth {
    .dropdown-toggle::after {display: none;}
    .user-login-circle {
      display: inline-block;
      font-size: 1.1rem;
      width: 30px;
      height: 30px;
      overflow: hidden;
      line-height: 30px;
      background: linear-gradient(90deg, $medium-gold 0%, $light-gold-v1 100%);
      text-align: center;
      color: #fff;
      border-radius: 50%;
      vertical-align: middle;
    }
    .nav-item {
      .nav-link.icon {
        font-size: 15px;
      }
      .nav-link.router-link-exact-active {
        color: $white;
        background: $medium-gold;
      }
      .dropdown-menu {
        position: absolute !important;
        left: unset;
        right: 0;
      }
    }
  }


</style>