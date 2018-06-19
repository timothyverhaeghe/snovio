const credits = require('./credentials'); // My credits, gitignored.
const snovio = require('../snovio')(credits.appId, credits.appSecret);

snovio.domainSearch('taglayer.com', (err, data) => {
  if (err) console.log(err);
  if (data) {
    console.log(data);
  } else {
    console.log("we couldn't parse data from Snovio");
  }
});

/*
{ domain: 'taglayer.com',
  webmail: false,
  result: 6,
  limit: 100,
  offset: 0,
  companyName: 'Taglayer | Personalisation Software',
  emails:
   [ { email: 'info@taglayer.com',
       type: 'email',
       status: 'notVerified' },
     { email: 'anneleen@taglayer.com',
       type: 'email',
       status: 'notVerified' },
     { email: 'timothy@taglayer.com',
       type: 'prospect',
       status: 'verified',
       firstName: 'Timothy',
       lastName: 'Verhaeghe',
       position: 'Co-founder & CTO',
       sourcePage: 'https://be.linkedin.com/in/verhaeghetimothy/' },
     { email: 'willem@taglayer.com',
       type: 'prospect',
       status: 'verified',
       firstName: 'Willem',
       lastName: 'Drijver',
       position: 'Co-Founder / CEO',
       sourcePage: 'https://be.linkedin.com/in/willemdrijver/' },
     { email: 'press@taglayer.com',
       type: 'email',
       status: 'notVerified' },
     { email: 'timothyverhaeghe@taglayer.com',
       type: 'prospect',
       status: 'verified',
       firstName: 'Timothy',
       lastName: 'Verhaeghe',
       position: 'Co-founder & CTO',
       sourcePage: 'https://be.linkedin.com/in/verhaeghetimothy/' } ] }
*/
