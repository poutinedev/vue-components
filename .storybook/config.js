import { configure, addParameters } from "@storybook/vue";
import customTheme from "./theme";

// automatically import all files ending in *.stories.js
configure(require.context("../src/components", true, /\.stories\.js$/), module);

addParameters({
  options: {
    theme: customTheme
  }
});
