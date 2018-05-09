<template>
  <div class="hello">
    {{ primaryColor }}
    <input type="text" v-model="primaryColor"/>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Primary title
          </h1>
          <h2 class="subtitle">
            Primary subtitle
          </h2>
        </div>
      </div>
    </section>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <a class="button is-primary">Primary</a>
          <a class="button is-link">Link</a>
          <a class="button is-info">Info</a>
          <a class="button is-success">Success</a>
          <a class="button is-warning">Warning</a>
          <a class="button is-danger">Danger</a>
          <a class="button is-rounded">Rounded</a>
          <a class="button is-primary is-rounded">Rounded</a>
          <a class="button is-link is-rounded">Rounded</a>
          <a class="button is-info is-rounded">Rounded</a>
          <a class="button is-success is-rounded">Rounded</a>
          <a class="button is-danger is-rounded">Rounded</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Bulma',
    data() {
      return {
        primaryColor: true
      }
    }
  }
</script>
