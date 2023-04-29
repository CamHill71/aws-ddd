const fs = require('fs');
const { command, instance, tag, message, keyExists, ensureKey } = require('./helpers');

/****************
AWS Configuration
*****************/
const AWS = require('aws-sdk');
AWS.config.region = 'us-west-2';
AWS.config.apiVersions = { ec2: '2016-11-15' };
const ec2 = new AWS.EC2();
const keyParams = {
    KeyName: 'ec2-js-sdk-key-pair'
}

switch (command) {
    case 'key':
        
    default:
    console.error('Not a valid command!');
    break;
}
