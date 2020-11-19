const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.postCss('resources/css/theme.css', './style.css',
  tailwindcss('./tailwind.config.js')
);

mix.js('./resources/js/app.js', './js/app.js');

mix.browserSync({
  proxy: 'cedria.local',
  files: [ 'public/js/**/*.js', 'public/css/**/*.css', '*.php' ],
})