// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = config;
// config.resolver.assetExts.push('db'); // Uncomment if you need to handle .db files
// config.resolver.sourceExts.push('cjs'); // Uncomment if you need to handle .cjs files