/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: 'amzn1.application-oa2-client.44a2154012214fc286872e4f9563958b',
    clientSecret: '27942bb323f11d571adb467c76fd26bc72177936b94aa3296ff1a81df8536af6',
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: 'amazon.com',
    lwaApiHost: 'api.amazon.com',
    validateCertChain: true,
    sslKey: '/home/pi/alexa-avs-raspberry-pi/samples/javaclient/certs/server/node.key',
    sslCert: '/home/pi/alexa-avs-raspberry-pi/samples/javaclient/certs/server/node.crt',
    sslCaCert: '/home/pi/alexa-avs-raspberry-pi/samples/javaclient/certs/ca/ca.crt',
    products: {
        "my_device": ["123456"], // Fill in with valid device values, eg: "testdevice1": ["DSN1234", "DSN5678"]
    },
};

module.exports = config;
