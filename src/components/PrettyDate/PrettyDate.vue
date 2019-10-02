<template>
  <time :datetime="date" v-html="readableDate(date)"/>
</template>

<script>
export default {
  props: {
    date: String
  },
  methods: {
    readableDate(value) {
      let newDate = new Date(value).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })

      return newDate
    }
  }
}
</script>
