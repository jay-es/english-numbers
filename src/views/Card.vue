<template>
  <section class="section card">
    <div class="container">
      <div class="columns is-mobile has-text-centered">
        <aside class="column is-narrow">
          <button
            :disabled="!prevNumber"
            class="button is-primary is-inverted move-btn"
            @click="goPrev"
          >
            <b-icon
              icon="chevron-left"
              size="is-large"
            />
          </button>
        </aside>

        <main class="column">
          <p class="title">{{ currentNumber.num }}</p>
          <p class="subtitle">{{ currentNumber.txt }}</p>
          <audio-button :file-name="currentNumber.file"/>
        </main>

        <aside class="column is-narrow">
          <button
            :disabled="!nextNumber"
            class="button is-primary is-inverted move-btn"
            @click="goNext"
          >
            <b-icon
              icon="chevron-right"
              size="is-large"
            />
          </button>
        </aside>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AudioButton from '@/components/AudioButton.vue'
import { numbers, NumberInfo } from '@/common/numbers'

@Component({
  components: {
    AudioButton,
  },
})
export default class Card extends Vue {
  private currentIndex: number = 0
  private numbers: NumberInfo[] = numbers

  get currentNumber(): NumberInfo {
    return this.numbers[this.currentIndex]
  }
  get nextNumber(): NumberInfo {
    return this.numbers[this.currentIndex + 1]
  }
  get prevNumber(): NumberInfo {
    return this.numbers[this.currentIndex - 1]
  }

  goPrev() {
    this.currentIndex--
  }
  goNext() {
    this.currentIndex++
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 16vw;
}
.subtitle {
  font-size: 4vw;
}
.move-btn {
  width: 48px;
  height: 100%;

  @media (min-resolution: 1.5dppx) {
    &:hover {
      background-color: inherit !important;
    }
    &:focus {
      box-shadow: none !important;
    }
  }
}
</style>
