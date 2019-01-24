const path = require("path");

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.resolve.alias = {
    ...storybookBaseConfig.resolve.alias,
    angular: require.resolve("angular")
  };

  storybookBaseConfig.module.rules.push({
    test: /\.(css)$/,
    use: [
      "style-loader",
      "css-loader"
    ]
  });

  return storybookBaseConfig;
};
