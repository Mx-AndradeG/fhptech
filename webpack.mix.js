const mix = require('laravel-mix');
const path = require('path'); mix.alias({ ziggy: path.resolve('vendor/tightenco/ziggy/dist.vue') });
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */


 mix.js("resources/js/app.js", "public/js")
 .vue({ version: 3 })
 .webpackConfig({
     resolve: {
         alias: {
             "@": path.resolve(__dirname, "resources/js"),
         },
     },
 })
 .extract()
 .postCss("resources/css/app.css", "public/css", [])
 .version();

// Rezolve Ziggy
mix.alias({
    ziggy: path.resolve("vendor/tightenco/ziggy/dist/vue"),
});