module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-storyshots'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  staticDirs: ['../public']
};
