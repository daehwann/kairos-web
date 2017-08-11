<template>
  <div class="hello px-3">
    <h1>{{ msg }}</h1>
    <h2>Video List</h2>
    <v-layout row wrap>
        <video-card v-for="i in 10" :key="i"></video-card>
    </v-layout>
  </div>
</template>

<script>
import VideoCard from './VideoCard.vue'

export default {
  name: 'video-list',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    VideoCard
  }
}
</script>
