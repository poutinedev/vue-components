import { storiesOf } from "@storybook/vue";

import Error from "./Error.vue";

storiesOf("Error", module).add("Default", () => {
  return {
    components: { Error },
    data: () => ({}),
    methods: {},
    template: `
      <error>
        <template v-slot:header>
          <p>There was an API error:</p>
        </template>
        <template v-slot:body>
          <code>
            <pre>Some error here</pre>
          </code>
        </template>
      </error>
    `
  };
});
