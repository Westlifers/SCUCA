<template>
  <all-navbar></all-navbar>
  <nice-title title="welcome!"></nice-title>
</template>

<script>
import AllNavbar from '../sub/AllNavbar.vue'
import NiceTitle from '../sub/NiceTitle.vue'

export default {
  name: 'IndexView',
  components: {
    AllNavbar,
    NiceTitle
  },
  provide() {
    return {
      scores: this.scores
    }
  }
}
</script>

