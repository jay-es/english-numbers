<template>
  <div id="app">
    <the-header/>

    <router-view/>

    <section v-if="!isHome" class="section">
      <router-link
        class="button is-primary is-small is-outlined icon-btn"
        to="/"
      >
        <b-icon
          icon="home"
          custom-size="mdi-18px"
        />
      </router-link>
    </section>

    <footer class="footer">
      <div class="container">&copy; jshindo-gladd</div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TheHeader from '@/components/TheHeader.vue'

@Component({
  components: {
    TheHeader,
  },
})
export default class App extends Vue {
  get isHome() {
    return this.$route.name === 'home'
  }
}
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
