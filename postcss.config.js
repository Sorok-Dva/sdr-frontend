module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['>0.2%', 'not dead', 'not op_mini all'],
      grid: true,
      removeDeprecated: false,
    }),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
