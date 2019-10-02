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
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(#000, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}

.modal {
  --modal-body-bg-color: #fff;
  position: relative;
  width: 100%;
  max-width: 960px;
  max-height: 90vh;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  overflow: visible;
  background-color: var(--modal-body-bg-color);
}

.modal__header {
}

.modal__body {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.modal__footer {
}

.modal__close {
  --modal-close-icon-dims: 5rem;
  position: absolute;
  top: calc(var(--modal-close-icon-dims) / -2);
  right: calc(var(--modal-close-icon-dims) / -2);
  width: var(--modal-close-icon-dims);
  height: var(--modal-close-icon-dims);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #000;
  font-weight: 700;
  font-size: 1rem;
  line-height: var(--modal-close-icon-dims);
  color: #fff;
  text-align: center;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.35);
  will-change: transform;
  transform-origin: center;
  transition: transform 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  border: 0;
}

.modal__close svg {
  width: 50%;
  margin: 0 auto;
}

.modal__close svg path {
  fill: #fff;
}

.modal__close:hover {
  transform: scale(1.15);
}

/* Transitions */

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>