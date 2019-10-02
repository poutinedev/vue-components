import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

import Modal from "./Modal.vue";

storiesOf("Modal", module).add("Default", () => {
  return {
    components: { Modal },
    data: () => ({ isModalVisible: false }),
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      closeOnEsc(ev) {
        if (this.isModalVisible && ev.keyCode === 27) {
          this.closeModal();
        }
      }
    },
    template: `
      <div>
        <button type="button" @click="showModal" @keydown.prevent="closeOnEsc">See Modal</button>
        <modal v-show="isModalVisible" @close="closeModal">
          <template v-slot:header>
            <h2>Modal Header</h2>
          </template>
          <template v-slot:body>
            <p>Modal body content.</p>
          </template>
        </modal>
      </div>
    `
  };
});
