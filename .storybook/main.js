/** @type { import('@storybook/svelte-vite').StorybookConfig } */
const config = {
  stories: ["../src/components/*.mdx", "../src/components/*.stories.@(js|jsx|ts|tsx|svelte)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/svelte-vite",
    options: {},
  },
};
export default config;
