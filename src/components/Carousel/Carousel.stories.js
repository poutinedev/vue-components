import { storiesOf } from "@storybook/vue";

import Carousel from "./Carousel.vue";

storiesOf("Carousel", module)
  .add("Default", () => {
    return {
      components: { Carousel },
      methods: {},
      template: `
          <carousel width="800px">
            <div>
              <img src="https://placeimg.com/800/350/nature" alt="Picture of nature"/>
            </div>
            <div>
              <img src="https://placeimg.com/800/350/animals" alt="Picture of animals"/>
            </div>
            <div>
              <img src="https://placeimg.com/800/350/cities" alt="Picture of cities"/>
            </div>
          </carousel>
        `
    };
  })
  .add("ImageBased", () => {
    return {
      components: { Carousel },
      methods: {},
      template: `
        <carousel width="90vw" imageBased>
          <div>
            <img src="https://placeimg.com/1024/450/nature" alt="Picture of nature"/>
          </div>
          <div>
            <img src="https://placeimg.com/1024/450/animals" alt="Picture of animals"/>
          </div>
          <div>
            <img src="https://placeimg.com/1024/450/cities" alt="Picture of cities"/>
          </div>
        </carousel>
      `
    };
  });
