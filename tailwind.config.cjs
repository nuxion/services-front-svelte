const config = {
  content: ["./src/**/*.{html,js,svelte,ts}", "../<your-app>/templates/**/*.html"],

  theme: {
    extend: {},
  },

  plugins: [require('@tailwindcss/forms')],
};

module.exports = config;
