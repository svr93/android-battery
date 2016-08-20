'use strict';

const replace = require('replace');
const ip = require('ip');
const KARMA_DEFAULT_PORT = 9876;
const DEFAULT_PROTOCOL = 'http';

if (process.argv.includes('--test')) {

    let address = null;
    let addressFlagIndex = process.argv.indexOf('-address');
    if (addressFlagIndex !== -1) {

        address = process.argv[ addressFlagIndex + 1 ];
    } else {

        address = ip.address();
    }
    replace({

        regex: '(content src=)".*"',
        replacement: `$1"${
                DEFAULT_PROTOCOL
            }://${
                address
            }:${
                KARMA_DEFAULT_PORT
            }"`,
        paths: [ './config.xml' ],
    });
}
