<template>
  <div id="app">
    <the-header :is-home="isHome"/>

    <router-view/>

    <section v-if="!isHome" class="section">
      <router-link class="button is-primary is-small is-outlined icon-btn" to="/">
        <b-icon icon="home" custom-size="mdi-18px"/>
      </router-link>
    </section>

    <footer class="footer">
      <div class="container">&copy; jshindo</div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '@/components/TheHeader.vue'

export default Vue.extend({
  components: {
    TheHeader,
  },
  computed: {
    isHome(): boolean {
      return this.$route.name === 'home'
    },
  },
})
</script>
<style lang="scss">
#app {
  font-family: 'Roboto Slab', serif;
  text-align: center;
}
.icon-btn {
  min-width: 4em;
}
</style>
