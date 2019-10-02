<template>
  <div class="error">
    <header class="error__header">
      <slot name="header"></slot>
    </header>
    <div class="error__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style scoped>
.error {
}
</style>