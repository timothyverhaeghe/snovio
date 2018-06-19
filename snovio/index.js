const request = require('request');

const settings = {
  clientId: '',
  clientSecret: '',
  expired: false,
  access_token: '',
};


// AUTHENTICATION
const authenticate = (cb) => {
  if (settings.expired && settings.expired > (new Date().getTime() + 10)) {
    // We have an active access_token
    console.log('WE HAVE AN ACTIVE ACCESS_TOKEN');
    cb(false, settings.access_token);
  } else {
    request.post({
      url: 'https://app.snov.io/oauth/access_token',
      json: {
        grant_type: 'client_credentials',
        client_id: settings.clientId,
        client_secret: settings.clientSecret,
      },
    }, (err, response, body) => {
      if (err) console.log(err);
      if (body.access_token) {
        settings.access_token = body.access_token;
        settings.expired = new Date(new Date().getTime() + body.expires_in);
        cb(false, settings.access_token);
      } else {
        console.log("Couln't validate the clientId and/or client secret.");
        cb("Couln't validate the clientId and/or client secret.", false);
      }
    });
  }
};


const domainSearch = (domain, cb) => {
  authenticate((err, accessToken) => {
    if (accessToken) {
      request.post({
        url: 'https://app.snov.io/restapi/get-domain-emails-with-info',
        json: {
          access_token: accessToken,
          domain,
          type: 'all', // all, personal or generic
          limit: 100,
          // offset
        },
      }, (err, res, body) => {
        if (err) console.log(err);
        if (res && res.statusCode === 200) {
          cb(false, body);
        } else {
          console.log('CALL FAILED. ERRORCODE: ', res.status_code);
          console.log(body);
          cb('call failed', false);
        }
      });
    } else {
      console.log('AUTHENTICATION FAILED');
    }
  });
};


// Final sent back the entire object with functions
module.exports = (clientId, clientSecret) => {
  // Set settings
  settings.clientId = clientId;
  settings.clientSecret = clientSecret;

  // Return the object
  return {
    authenticate,
    domainSearch,
  };
};
