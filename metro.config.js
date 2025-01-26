// const { getDefaultConfig } = require("metro-config");
// const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();
// exports.resolver = {
//   ...defaultResolver,
//   sourceExts: [...defaultResolver.sourceExts, "cjs"],
// };
// //https://github.com/facebook/metro/issues/1028#issuecomment-1628933510
// //https://stackoverflow.com/questions/72179070/react-native-bundling-failure-error-message-while-trying-to-resolve-module-i
// /** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname);
 
// module.exports = {
//   resolver: {
//     assetExts: ['png', 'jpg', 'jpeg', 'gif', 'svg', 'json'],
//   },
// };


const path = require("path");
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
const { resolver: { sourceExts, assetExts } } = defaultConfig;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
    resolverMainFields: ["sbmodern", "react-native", "browser", "main"],
  },
  watchFolders: [path.resolve(__dirname, "../")],
};

module.exports = mergeConfig(defaultConfig, config);