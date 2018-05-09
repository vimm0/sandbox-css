<template>
  <div class="hello">
    {{ primaryColor }}
    <div class="field">
      <div class="control">
        is-primary: <input class="input is-primary" type="text" placeholder="is-primary modifier" v-model="primaryColor">
      </div>
    </div>
    <section class="hero is-primary" :style="{backgroundColor: primaryColor }">
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

    <section class="hero is-primary" :style="{backgroundColor: primaryColor, fontSize: fontSize + 'px' }">
      <div class="hero-body">
        <div class="container">
          <a class="button is-primary" :style="{backgroundColor: primaryColor }">Primary</a>
          <a class="button is-link">Link</a>
          <a class="button is-info">Info</a>
          <a class="button is-success">Success</a>
          <a class="button is-warning">Warning</a>
          <a class="button is-danger">Danger</a>
          <a class="button is-rounded">Rounded</a>
          <a class="button is-primary is-rounded" :style="{backgroundColor: primaryColor }">Rounded</a>
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
        primaryColor: '#ffb3b3',
        fontSize: '2rem'
      }
    }
  }
</script>
