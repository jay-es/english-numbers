<template>
  <button :disabled="isPlaying" class="button is-primary is-outlined icon-btn" @click="play">
    <b-icon icon="volume-high" class="audio-button-icon"/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    fileName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isPlaying: false,
    }
  },
  computed: {
    getUrl(): string {
      return `http://www.lexisrex.com/googletts/en/${this.fileName}.mp3`
    },
  },
  watch: {
    fileName() {
      this.isPlaying = false
    },
  },
  methods: {
    play() {
      const audioEl = new Audio(this.getUrl)
      this.isPlaying = true

      audioEl.addEventListener('ended', () => {
        this.isPlaying = false
      })

      audioEl.play()
    },
  },
})
</script>

<style lang="scss">
.list-view .audio-button-icon .mdi::before {
  font-size: 18px;
}
</style>
