<template>
  <div>
    <section v-if="isHome" class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">English Numbers</h1>
          <h2 class="subtitle">1 - 100</h2>
        </div>
      </div>
    </section>

    <section v-else class="navbar is-primary">
      <h1 class="navbar-item subtitle">
        <router-link to="/">English Numbers</router-link>
      </h1>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    isHome: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.navbar .subtitle {
  line-height: 2.25rem;

  a {
    color: #fff;
  }
}
</style>
