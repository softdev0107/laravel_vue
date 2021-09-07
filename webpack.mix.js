const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/vuedir/main.js', 'public/vuedir').vue();
mix.sass('resources/vuedir/sass/bundle.scss', 'public/css');
mix.sass('resources/vuedir/sass/wes.scss', 'public/css');
mix.js('resources/vuedir/assets/js/app.min.js', 'public/js').vue();
mix.webpackConfig({
    output: {
        chunkFilename: 'vuedir/output/[name].js',
    }
});
