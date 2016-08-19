requirejs.config({

    baseUrl: 'base/www/js',
    deps: Object.keys(window.__karma__.files),
    callback: window.__karma__.start,
});
