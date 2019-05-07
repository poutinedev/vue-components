<template>
  <div>
    <img v-bind:src='fakeImage(600,600,"nature")' alt="" />
    <p>Hard-refresh for a new image.</p>
  </div>
</template>

<style lang="scss">
:root {
  text-align: center;
  font: normal 18px/1.3 sans-serif;
}

img {
  max-width: 100%;
  height: auto;
}
</style>

<script>
export default {
  methods: {
    fakeImage(w, h, cat) {
      let c = cat != undefined ? cat : 'any'
      let img = `https://placeimg.com/${w}/${h}/${c}`
      return img
    }
  }
}
</script>
