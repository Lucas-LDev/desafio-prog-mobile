const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// aqui os svgs que eu imporeti viram componentes tipo <IconeDeFlecha/>
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== "svg");
config.resolver.sourceExts.push("svg");

//aqui é o suporte pro nativewind, onde ele carrega as configs iniciais do tailwind
module.exports = withNativeWind(config, { input: "./global.css" });
