<template>
  <img v-bind:src="fakeImage(width,height,category)" :alt="alt" />
</template>

<style lang="scss">
</style>

<script>
export default {
  props: {
    category: String,
    width: Number,
    height: Number,
    alt: String
  },
  methods: {
    fakeImage() {
      let cat = this.category != undefined ? this.category : "any";
      let src = `https://placeimg.com/${this.width}/${this.height}/${cat}`;

      return src;
    }
  }
};
</script>
