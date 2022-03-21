<template>
  <div class="main-wrapper-first">
    <header>
      <div class="container">
        <div class="header-wrap">
          <div class="header-top d-flex justify-content-between align-items-center">
            <div class="logo">
              <router-link to="/"><img :src="publicPath + 'img/logo.png'" alt=""></router-link>
            </div>
            <div class="main-menubar d-flex align-items-center">
              <nav class="hide">
                <router-link to="/" @click="reload()">Home</router-link>
              </nav>
              <div class="menu-bar"><span class="lnr lnr-menu"></span></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'AllNavbar',
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  inject: ['reload']
}
</script>
