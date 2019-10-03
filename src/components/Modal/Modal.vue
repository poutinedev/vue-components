<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal bg-white rounded p-8 shadow-xl"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal__header" id="modalTitle">
          <button
            type="button"
            class="modal__close"
            aria-label="Close modal"
            @click="$emit('close')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357">
              <path
                d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"
              />
            </svg>
          </button>
          <slot name="header"></slot>
        </header>
        <div class="modal__body" id="modalDescription">
          <slot name="body"></slot>
        </div>
        <footer class="modal__footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal"
};
</script>

<style lang="scss">
@import "../../assets/styles/utils";

.modal-backdrop {
  --modal-backdrop-color: rgba(0, 0, 0, 0.65);
  --modal-backdrop-blur-amount: 5px;
  --modal-close-dims: 5rem;
  --modal-close-bg-color: #f54768;
  --modal-close-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.35);
  --modal-close-x-fill: #fff;
  --modal-close-hover-scale: 1.15;
  --modal-body-bg-color: #fff;
  --modal-padding: 2rem;
  --modal-easing: cubic-bezier(0.215, 0.61, 0.355, 1);
  --modal-radius: 5px;
  --modal-max-width: 960px;
  --modal-max-height: 90vh;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--modal-backdrop-color);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(var(--modal-backdrop-blur-amount));

  .modal {
    position: relative;
    width: 100%;
    max-width: var(--modal-max-width);
    max-height: var(--modal-max-height);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    overflow: visible;
    background-color: var(--modal-body-bg-color);
    padding: var(--modal-padding);
    border-radius: var(--modal-radius);
  }

  .modal__header {
    @include reset-first-item;
  }

  .modal__body {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    @include reset-first-item;
  }

  .modal__footer {
  }

  .modal__close {
    position: absolute;
    top: calc(var(--modal-close-dims) / -2);
    right: calc(var(--modal-close-dims) / -2);
    width: var(--modal-close-dims);
    height: var(--modal-close-dims);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: var(--modal-close-bg-color);
    box-shadow: var(--modal-close-shadow);
    will-change: transform;
    transform-origin: center;
    transition: transform 150ms var(--modal-easing);
    border: 0;

    svg {
      width: 60%;
    }

    svg path {
      fill: var(--modal-close-x-fill);
    }

    &:hover {
      transform: scale(var(--modal-close-hover-scale));
      cursor: pointer;
    }
  }
}

/* Transitions */

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s var(--modal-easing);
}
</style>