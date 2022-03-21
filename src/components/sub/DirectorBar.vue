<template>
<div class="main-wrapper">
  <div class="active-banner-slider">
    <div class="item d-flex align-items-center">
      <div class="container">
        <div class="content">
          <h1 class="text-white text-uppercase">The fascination of cube: speedsolving</h1>
          <p class="text-white">Weekly competition of SCUCA. Speedsolving enables us work fast, look ahead.</p>
          <router-link to="/rank/" class="primary-btn d-inline-flex align-items-center" @click="reload()"><span class="mr-10">Get Started</span><span class="lnr lnr-arrow-right"></span></router-link>
        </div>
      </div>
    </div>
    <div class="item d-flex align-items-center">
      <div class="container">
        <div class="content">
          <h1 class="text-white text-uppercase">SHARING MAKES WIN-WIN RESULT</h1>
          <p class="text-white">Here's a forum where everyone shares their experience. Remember, by cubing you do not compete with your opponents, but yourself.&nbsp; &nbsp;
          </p>
          <a href="#" class="primary-btn d-inline-flex align-items-center"><span class="mr-10">Get Started</span><span class="lnr lnr-arrow-right"></span></a>
        </div>
      </div>
    </div>
    <div class="item d-flex align-items-center">
      <div class="container">
        <div class="content">
          <h1 class="text-white text-uppercase">some functional tools</h1>
          <p class="text-white">By tools you solve faster, think clearer and get fun more. Enjoy :)
          </p>
          <a href="#" class="primary-btn d-inline-flex align-items-center"><span class="mr-10">Get Started</span><span class="lnr lnr-arrow-right"></span></a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DirectorBar',
  inject: ['reload']
}
</script>
