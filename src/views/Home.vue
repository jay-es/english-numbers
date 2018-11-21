<template>
  <div class="home-view">
    <section class="section">
      <router-link
        class="button is-primary is-large is-outlined"
        to="/card"
      >
        Start
      </router-link>
      <router-link
        class="button is-primary is-large is-outlined"
        to="/list"
      >
        List
      </router-link>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.button {
  display: block;
  margin: 1em auto;
  width: 200px;
}
</style>
