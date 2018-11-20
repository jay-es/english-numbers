<template>
  <button
    :disabled="isPlaying"
    class="button is-primary is-outlined icon-btn"
    @click="play"
  >
    <b-icon
      icon="volume-high"
      class="audio-button-icon"
    />
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

  get mp3Url() {
    return this.getUrl('mp3')
  }

  get oggUrl() {
    return this.getUrl('ogg')
  }

  getUrl(type: string) {
    return `http://packs.shtooka.net/eng-wims-mary-num/${type}/${this.fileName}.${type}` // eslint-disable-line prettier/prettier
  }

  @Watch('fileName')
  onFileNameChanged() {
    this.isPlaying = false
  }

  play() {
    const audioEl = new Audio(this.oggUrl)
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
