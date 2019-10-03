import { storiesOf } from "@storybook/vue";

import PlaceHolderImage from "./PlaceholderImage";

storiesOf("PlaceHolderImage", module).add("Default", () => {
  return {
    components: { PlaceHolderImage },
    template: `
      <div>
        <PlaceHolderImage category="nature" width=300 height=300 alt="Nature"></PlaceHolderImage>
        <PlaceHolderImage category="animals" width=800 height=250 alt="Animals"></PlaceHolderImage>
        <PlaceHolderImage category="people" width=150 height=150 alt="People"></PlaceHolderImage>
      </div>
    `
  };
});
