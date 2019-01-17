<template>
  <button :disabled="isPlaying" class="button is-primary is-outlined icon-btn" @click="play">
    <b-icon icon="volume-high" class="audio-button-icon"/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    fileUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isPlaying: false,
    }
  },
  watch: {
    fileUrl() {
      this.isPlaying = false
    },
  },
  methods: {
    play() {
      const audioEl = new Audio(this.fileUrl)
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
