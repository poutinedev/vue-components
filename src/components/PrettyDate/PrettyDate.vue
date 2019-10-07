<template>
  <time :datetime="date">{{ makeDateHumanReadable(date) }}</time>
</template>

<script>
export default {
  props: {
    date: String
  },
  methods: {
    makeDateHumanReadable(value) {
      let newDate = new Date(value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });

      return newDate;
    }
  }
};
</script>
