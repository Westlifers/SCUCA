<template>
<div class="main-wrapper">
<section class="footer-widget-area">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="single-widget d-flex flex-wrap justify-content-between">
          <div class="icon d-flex align-items-center justify-content-center">
            <span class="lnr lnr-pushpin"></span>
          </div>
          <div class="desc">
            <h6 class="title text-uppercase">Address</h6>
            <p>四川大学江安校区</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="single-widget d-flex flex-wrap justify-content-between">
          <div class="icon d-flex align-items-center justify-content-center">
            <span class="lnr lnr-earth"></span>
          </div>
          <div class="desc">
            <h6 class="title text-uppercase">Email Address</h6>
            <div class="contact">
              <a href="mailto:mcwestlifer@gmail.com">mcwestlifer@gmail.com</a> <br>
              <a href="mailto:2021141210069@stu.scu.edu.com">2021141210069@stu.scu.edu.com</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="single-widget d-flex flex-wrap justify-content-between">
          <div class="icon d-flex align-items-center justify-content-center">
            <span class="lnr lnr-phone"></span>
          </div>
          <div class="desc">
            <h6 class="title text-uppercase">Phone Number</h6>
            <div class="contact">
              <a href="tel:15883821132">(+86) 15883821132</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div class="container">
      <div class="footer-content d-flex justify-content-between align-items-center flex-wrap">
        <div class="logo">
          <router-link to="/" @click="reload()"><img :src="publicPath + 'img/f-logo.png'" alt=""></router-link>
        </div>
        <div class="footer-social">
          <a href="#"><i class="fa fa-github"></i></a>
          <a href="#"><i class="fa fa-qq"></i></a>
        </div>
      </div>
    </div>
  </footer>
</section>
</div>

</template>

<script>
export default {
  name: 'FooterInfo',
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  inject: ['reload']
}
</script>
