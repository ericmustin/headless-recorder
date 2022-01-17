// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  "preset": "jest-puppeteer",
  "verbose": true,
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    "preset": "jest-puppeteer",
    verbose: true,
  };
};