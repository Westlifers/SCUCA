<template>
  <all-navbar />
  <router-view />
  <footer-info />
</template>

<script>
import AllNavbar from './components/sub/AllNavbar.vue'
import FooterInfo from './components/sub/FooterInfo.vue'
export default {
  components: {
    AllNavbar,
    FooterInfo
  },
  methods: {
    reload(){
      setTimeout(function () {
        window.location.reload();
      }, 100);
    }
  },
  provide(){
    return {
      reload: this.reload
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
