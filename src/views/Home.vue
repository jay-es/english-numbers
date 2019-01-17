<template>
  <div class="home-view">
    <section class="section">
      <div class="field">
        Max: {{ maxNum }}
        <br>
        <input v-model.number="maxNum" type="range" min="10" max="100" step="10">
      </div>

      <div class="field">
        <b-checkbox v-model="isRandom">Randomize</b-checkbox>
      </div>

      <router-link class="button is-primary is-large is-outlined" to="/card">Start</router-link>
      <router-link class="button is-primary is-large is-outlined" to="/list">List</router-link>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  get isRandom() {
    return this.$store.state.isRandom
  }
  set isRandom(val) {
    this.$store.commit('update', { isRandom: val })
  }

  get maxNum() {
    return this.$store.state.maxNum
  }
  set maxNum(val) {
    this.$store.commit('update', { maxNum: val })
  }
}
</script>

<style lang="scss" scoped>
input[type='range'] {
  width: 200px;
}
.button {
  display: block;
  margin: 1em auto;
  width: 200px;
}
</style>
