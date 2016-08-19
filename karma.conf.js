module.exports = function(config) {
    'use strict';

    const optionObj = {

        frameworks: [ 'jasmine', 'requirejs' ],
        browsers: [ 'Cordova' ],
        cordovaSettings: {

            platforms: [ 'android' ],
            mode: 'run',
            plugins: [

                'cordova-custom-config',
            ],
        },
        singleRun: true,
        files: [

            'test/js/main.js',
            { pattern: 'www/js/app.js', included: false },
            { pattern: 'test/js/app.js', included: false },
        ],
    };
    config.set(optionObj);
};
