const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require("daisyui"),
    require('@tailwindcss/container-queries'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00b0f3",
          "secondary": "#00a96b",
          "accent": "#009fff",
          "neutral": "#2c211b",
          "base-100": "#fffdf9",
          "info": "#00e5ff",
          "success": "#00f17f",
          "warning": "#fde047",
          "error": "#fb7185",
        },
      },
    ,"dracula"],
    darkTheme: "dracula",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}
