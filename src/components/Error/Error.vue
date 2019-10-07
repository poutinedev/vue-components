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

<style lang="scss">
@import "../../assets/styles/utils";

.error {
  --error-bg-color: #f54768;
  --error-padding: 1.5rem;
  --error-margin: 2rem auto;
  --error-radius: 5px;
  --error-header-font-weight: 700;
  --error-header-border: 1px solid rgba(255, 255, 255, 0.15);

  display: block;
  background-color: var(--error-bg-color);
  padding: var(--error-padding);
  margin: var(--error-margin);
  border-radius: var(--error-radius);

  .error__header {
    @include reset-first-item;
    font-weight: var(--error-header-font-weight);
    border-bottom: var(--error-header-border);
  }

  .error__body {
    @include reset-first-item;
  }
}
</style>