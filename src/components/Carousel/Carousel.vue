<template>
  <div class="carousel-wrapper" :class="{ 'image-based': imageBased }">
    <div class="carousel" :style="{ width, height }">
      <slot />
    </div>
    <div class="carousel__controls">
      <button @click="changeSlide(-1)">
        <span class="sr-only">Previous Slide</span>
      </button>
      <button @click="changeSlide(1)">
        <span class="sr-only">Next Slide</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: String,
    height: String,
    imageBased: Boolean
  },
  methods: {
    changeSlide(delta) {
      const carousel = this.$el.querySelector(".carousel");
      const width = carousel.offsetWidth;
      carousel.scrollTo({
        top: 0,
        left: carousel.scrollLeft + width * delta,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/utils";

.carousel {
  display: flex;
  max-width: 100%;
  overflow: hidden;
  scroll-snap-type: x mandatory;
  border: 2px solid red;
  transition: all 150ms ease-in-out;

  > * {
    flex: 1 0 100%;
    scroll-snap-align: start;
    margin: 0;
    padding: 0;

    img {
      display: block;
      margin: 0;
      @include responsive-image;
    }
  }
}

// image-based carousels
.image-based {
  img {
    width: 100%;
  }
}
</style>