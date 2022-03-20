<template>
  <director-bar />
  <featre-area />
  <story-area />
</template>

<script>
import DirectorBar from '../sub/DirectorBar.vue'
import StoryArea from '../sub/StoryArea.vue'
import FeatreArea from '../sub/FeatureArea.vue'

export default {
  name: 'IndexView',
  components: {
    DirectorBar,
    FeatreArea,
    StoryArea,
  }
}

</script>

