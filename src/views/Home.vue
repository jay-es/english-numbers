<template>
  <div class="home">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            English Numbers
          </h1>
          <!-- <h2 class="subtitle">
            Primary subtitle
          </h2> -->
        </div>
      </div>
    </section>
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
