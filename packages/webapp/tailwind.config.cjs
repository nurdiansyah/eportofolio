const { transform } = require("windicss/helpers");

module.exports = {
  extract: {
    include: ["./src/**/*.{html,js,svelte,ts}"]
  },
  theme: {
    extend: {}
  },
  plugins: [transform("daisyui")]
};
