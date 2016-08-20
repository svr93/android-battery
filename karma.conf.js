const childProcess = require('child_process');

module.exports = function(config) {
    'use strict';

    const optionObj = {

        frameworks: [ 'jasmine', 'requirejs' ],
        browsers: [ 'Cordova' ],
        cordovaSettings: {

            platforms: [ 'android' ],
            mode: 'run',
            target: `${ childProcess.spawnSync('adb', [

                'shell',
                'getprop',
                'ro.product.model',
            ]).stdout }`,
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
