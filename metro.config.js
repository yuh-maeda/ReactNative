const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

config.resolver.assetExts.push(
    // Adds support for `.db` files for SQLite databases
    'obj',
    'glb',
    'gltf',
    'png',
    'jpg',
  );

module.exports = withNativeWind(config, { input: './app/globals.css' })