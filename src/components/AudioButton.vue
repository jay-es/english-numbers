<template>
  <button :disabled="isPlaying" class="button is-primary is-outlined icon-btn" @click="play">
    <b-icon icon="volume-high" class="audio-button-icon"/>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class AudioButton extends Vue {
  isPlaying: boolean = false

  @Prop({
    type: String,
    required: true,
  })
  fileName!: string

  get getUrl() {
    return `http://www.lexisrex.com/googletts/en/${this.fileName}.mp3`
  }

  @Watch('fileName')
  onFileNameChanged() {
    this.isPlaying = false
  }

  play() {
    const audioEl = new Audio(this.getUrl)
    this.isPlaying = true

    audioEl.addEventListener('ended', () => {
      this.isPlaying = false
    })

    audioEl.play()
  }
}
</script>

<style lang="scss">
.list-view .audio-button-icon .mdi::before {
  font-size: 18px;
}
</style>
