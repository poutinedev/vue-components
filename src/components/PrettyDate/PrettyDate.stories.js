import { storiesOf } from "@storybook/vue";

import PrettyDate from "./PrettyDate";

storiesOf("PrettyDate", module).add("Default", () => {
  return {
    components: { PrettyDate },
    template: `
      <div style="color:#fff">
        <p>Today's date is: <strong><PrettyDate :date="Date.now()"></PrettyDate></strong></p>
      </div>
    `
  };
});
