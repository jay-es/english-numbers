<template>
  <section class="section card-view">
    <div class="container">
      <div class="columns is-mobile has-text-centered">
        <aside class="column is-narrow">
          <button
            :disabled="!prevNumber"
            class="button is-primary is-inverted move-btn"
            @click="goPrev"
          >
            <b-icon icon="chevron-left" size="is-large"/>
          </button>
        </aside>

        <main class="column">
          <div v-touch="goNext" v-touch:swipe.left="goNext" v-touch:swipe.right="goPrev">
            <p class="title">{{ currentNumber.num }}</p>
            <p class="subtitle">{{ currentNumber.txt }}</p>
          </div>
          <audio-button :file-url="currentNumber.url"/>
        </main>

        <aside class="column is-narrow">
          <button
            :disabled="!nextNumber"
            class="button is-primary is-inverted move-btn"
            @click="goNext"
          >
            <b-icon icon="chevron-right" size="is-large"/>
          </button>
        </aside>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import AudioButton from '@/components/AudioButton.vue'
import { numbers, NumberInfo } from '@/common/numbers'

export default Vue.extend({
  components: {
    AudioButton,
  },
  data() {
    return {
      numbers,
      currentIndex: 0,
    }
  },
  computed: {
    currentNumber(): NumberInfo {
      return this.numbers[this.currentIndex]
    },
    nextNumber(): NumberInfo {
      return this.numbers[this.currentIndex + 1]
    },
    prevNumber(): NumberInfo {
      return this.numbers[this.currentIndex - 1]
    },
  },
  created() {
    const { isRandom, maxNum } = this.$store.state
    const tmpNumbers = numbers.slice(0, maxNum)

    if (isRandom) {
      // シャッフル
      for (let i = tmpNumbers.length; i--; ) {
        const r = Math.floor(Math.random() * i)
        ;[tmpNumbers[r], tmpNumbers[i]] = [tmpNumbers[i], tmpNumbers[r]]
      }
    }

    this.numbers = tmpNumbers
  },
  methods: {
    goPrev() {
      if (this.prevNumber) {
        this.currentIndex--
      }
    },
    goNext() {
      if (this.nextNumber) {
        this.currentIndex++
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.title {
  font-size: 16vw;
}
.subtitle {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
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
