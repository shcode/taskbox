/** @type { import('@storybook/svelte').Preview } */
import "../src/index.css";
const preview = {
  actions: { argTypesRegex: "^on.*" },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
