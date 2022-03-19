<template>
  <all-navbar></all-navbar>
  <nice-title title="welcome!"></nice-title>
  <submit-form />
</template>

<script>
import AllNavbar from '../sub/AllNavbar.vue'
import NiceTitle from '../sub/NiceTitle.vue'
import SubmitForm from '../sub/SubmitForm.vue'

export default {
  name: 'IndexView',
  components: {
    AllNavbar,
    NiceTitle,
    SubmitForm
  },
  provide() {
    return {
      scores: this.scores
    }
  }
}
</script>

