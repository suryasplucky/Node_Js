const dns = require('dns');

// Replace 'example.com' with the domain you want to query.
const domain = 'https://nodejs.com';

dns.lookup(domain, (err, address, family) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Domain: ${domain}`);
  console.log(`IP Address: ${address}`);
  console.log(`IP Family: IPv${family}`);
});

